process.env.NODE_ENV = 'test';

const {expect} = require('chai');
const request = require('supertest');
const testseed = require('../seed/test_seed');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const ROOT = 'localhost:9090';

require('../server');

describe('Chattaranga server', () => {
  let data;

  before((done) => {
    mongoose.connection.once('connected', (err) => {
      if (err) {
        console.log(err); 
        return done();
      }

      mongoose.connection.db.dropDatabase(() => {
        testseed((testdata) => {
          data = testdata;
          done();
        });
      });
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      console.log('drop database');
      return done();
    });
  });


  describe('/', () => {
    it('handles invalid routes', (done) => {
      request(ROOT)
        .get('/nonsense')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });

  describe('/API', () => {
    describe('GET /badges', () => {
      let badges;
      let response;

      before((done) => {
        request(ROOT)
          .get('/api/badges')
          .end((err, res) => {
            badges = res.body.badges.reduce((res, badge) => {
              res[badge._id] = badge;
              return res;
            }, {});
            
            response = res;
            done();
          });
      });
      
      it('returns status code 200', () => {
        expect(response.status).to.equal(200);
      });

      it('returns all available badges', () => {
        data.badges.forEach((badge) => {
          expect(badge._id.toString()).to.eql(badges[badge._id]._id);
        });
      });
    });

    describe('GET /languages', () => {
      let languages;
      let response;

      before((done) => {
        request(ROOT)
          .get('/api/languages')
          .end((err, res) => {
            languages = res.body.languages.reduce((res, language) => {
              res[language._id] = language;
              return res;
            }, {});
            
            response = res;
            done();
          });
      });
      
      it('returns status code 200', () => {
        expect(response.status).to.equal(200);
      });

      it('returns all available languages', () => {
        data.languages.forEach((language) => {
          expect(language._id.toString()).to.eql(languages[language._id]._id);
        });
      });
    });

    describe('GET /levels', () => {
      let levels;
      let response;

      before((done) => {
        request(ROOT)
          .get('/api/levels')
          .end((err, res) => {
            levels = res.body.levels.reduce((res, level) => {
              res[level._id] = level;
              return res;
            }, {});
            
            response = res;
            done();
          });
      });
      
      it('returns status code 200', () => {
        expect(response.status).to.equal(200);
      });

      it('returns all available levels', () => {
        data.levels.forEach((level) => {
          expect(level._id.toString()).to.eql(levels[level._id]._id);
        });
      });
    });
  });
});