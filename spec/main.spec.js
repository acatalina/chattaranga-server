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

    describe('GET /prompts/:language/:level', () => {
      let level;
      let language;
      let prompts;
      let response;

      before((done) => {
        language = data.languages[1].name;
        level = data.levels[2].name;
        request(ROOT)
          .get(`/api/prompts/${language}/${level}`)
          .end((err, res) => {
            prompts = res.body.prompts.reduce((res, prompt) => {
              res[prompt._id] = prompt;
              return res;
            }, {});

            response = res;
            done();
          });
      });
      
      it('returns status code 200', () => {
        expect(response.status).to.equal(200);
      });

      it('returns all available prompts from a particular language and level', () => {
        data.prompts.forEach((prompt) => {
          if (prompts[prompt._id]) {
            expect(prompt._id.toString()).to.equal(prompts[prompt._id]._id);
          }
        });

        response.body.prompts.forEach((prompt) => {
          expect(prompt.language).to.equal(language);
          expect(prompt.level).to.equal(level);
          expect(prompt).to.haveOwnProperty('topic');
          expect(prompt).to.haveOwnProperty('text');
        });
      });

      it('handles invalid language or level', (done) => {
        request(ROOT)
          .get('/api/prompts/nonsense/nonsense')
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.reason).to.equal('Invalid query');
            done();
          });
      });
    });

    describe('GET /users/:username', () => {
      let requestedUser;
      let user;
      let response;

      before((done) => {
        requestedUser = data.users[0];

        request(ROOT)
          .get(`/api/users/${requestedUser.username}`)
          .end((err, res) => {            
            user = res.body.user;
            response = res;
            done();
          });
      });
      
      it('returns status code 200', () => {
        expect(response.status).to.equal(200);
      });

      it('returns a particular user by username', () => {
        expect(user.username).to.equal(requestedUser.username);
        expect(user).to.haveOwnProperty('email');
        expect(user).to.haveOwnProperty('userLanguages');
        expect(user).to.haveOwnProperty('name');
        expect(user).to.haveOwnProperty('memberSince');
        expect(user).to.haveOwnProperty('smileys');
      });

      it('returns 404 if the user does not exist', (done) => {
        request(ROOT)
          .get('/api/users/DONOTEXIST')
          .end((err, res) => {            
            expect(res.status).to.equal(404);
            expect(res.body.reason).to.equal('Not found');
            done();
          });
      });
    });

    describe('PUT /users/:username/smileys', () => {
      let requestedUser;
      let response;

      before((done) => {
        requestedUser = data.users[0];

        request(ROOT)
          .put(`/api/users/${requestedUser.username}/smileys`)
          .end((err, res) => {
            response = res;
            done();
          });
      });
      
      it('returns status code 204', () => {
        expect(response.status).to.equal(204);
      });

      it('updates by one the smileys of a particular user by username', (done) => {
        request(ROOT)
          .get(`/api/users/${requestedUser.username}`)
          .end((err, res) => {
            expect(res.body.user.smileys).to.equal(requestedUser.smileys + 1);
            done();
          });
      });

      it('returns 404 if the user does not exist', (done) => {
        request(ROOT)
          .put('/api/users/DONOTEXIST/smileys')
          .end((err, res) => {            
            expect(res.status).to.equal(404);
            expect(res.body.reason).to.equal('Not found');
            done();
          });
      });
    });

    describe('PUT /users/:username/:language', () => {
      let requestedLanguage;
      let requestedUser;
      let response;

      before((done) => {
        requestedUser = data.users[0];
        requestedLanguage = 'english';
        
        request(ROOT)
          .put(`/api/users/${requestedUser.username}/${requestedLanguage}?teacherpoints=1&numofchats=1&talktime=1`)
          .end((err, res) => {
            response = res;
            done();
          });
      });
      
      it('returns status code 204', () => {
        expect(response.status).to.equal(204);
      });

      it('updates teacherpoints, numofchats and talktime of a username`s language', (done) => {
        request(ROOT)
          .get(`/api/users/${requestedUser.username}`)
          .end((err, res) => {
            let userLanguageToTest = res.body.user.userLanguages.find(userLanguage => {
              return userLanguage.language === requestedLanguage;
            });
            expect(userLanguageToTest.teacherPoints).to.equal(data.userLanguages[0].teacherPoints + 1);
            expect(userLanguageToTest.talkTime).to.equal(data.userLanguages[0].talkTime + 1);
            expect(userLanguageToTest.numOfChats).to.equal(data.userLanguages[0].numOfChats + 1);
            done();
          });
      });

      it('handles non existant users', (done) => {
        request(ROOT)
          .put('/api/users/NONSENSE/NONSENSE?teacherpoints=1&numofchats=1&talktime=1')
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body.reason).to.equal('Not found');
            done();
          });
      });

      it('handles invalid queries', (done) => {
        request(ROOT)
          .put('/api/users/NONSENSE/NONSENSE?nonsense=1')
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.reason).to.equal('Invalid query');
            done();
          });
      });
    });


    describe('POST /users', () => {
      let newUser;
      let createdUser;
      let response;

      before((done) => {
        newUser = {
          username: 'tester',
          name: 'don test',
          email: 'dt@dt.com',
          userLanguages: [
            {[data.languages[0]._id]: data.levels[0]._id}
          ]
        };
        request(ROOT)
          .post('/api/users')
          .send(newUser)
          .end((err, res) => {
            createdUser = res.body.user;
            response = res;
            done();
          });
      });
      
      it('returns status code 201', () => {
        expect(response.status).to.equal(201);
      });

      it('returns the new created user', () => {
        expect(createdUser.name).to.equal(newUser.name);
        expect(createdUser.username).to.equal(newUser.username);
        expect(createdUser.email).to.equal(newUser.email);
        expect(createdUser.smileys).to.equal(0);
        expect(createdUser.userLanguages).to.be.an('array');
        expect(createdUser.userLanguages).to.lengthOf(1);
        expect(createdUser.userLanguages[0].language).to.equal('english');
        expect(createdUser.userLanguages[0].level).to.equal('beginner');
      });

      it('handles attempt to override an existent user', (done) => {
        request(ROOT)
          .post('/api/users')
          .send(newUser)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.reason).to.equal('Duplicate key');
            done();
          });
      });
    });

    describe ('GET /translate', () => {
      it ('returns a correctly translated sentence', () => {
        const sourceText = 'Hello, my name is Will. I like parrots.';
        const expectedText = 'Hola, mi nombre es Will. Me gustan los loros.';
        let translation;

        request(ROOT)
          .get(`/api/translate?text=${sourceText}&sourceLanguage=en&targetLanguage=es`)
          .end((err, res) => {
            translation = res.body.translation;
            expect(res.status).to.equal(200);
            expect(translation).to.equal(expectedText);
          });
      });
    });
  });
});