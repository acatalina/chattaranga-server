const users = [
  {
    username: 'baboquivari',
    userLanguages: [3, 4],
    name: 'Tony',
    email: 'to.sian.san@gmail.com',
    smileys: 6,
    available: false,
    ip: '127.800.1.3000',
    memberSince: '2016-11-14T00:00:00.234Z'
  },
  {
    username: 'ruthymng',
    userLanguages: [1, 2],
    name: 'Ruth',
    email: 'ruth.ym.ng@gmail.com',
    smileys: 5,
    available: false,
    ip: '127.800.4.3000',
    memberSince: '2017-01-04T00:00:00.234Z'
  }
];

const languages = [
  {name: 'English'},
  {name: 'Spanish'}
 ];

const userLanguages = [
  {
    language: 1,
    numOfChats: 0,
    level: 4,
    talkTime: 0,
    teacherPoints: 0
  },
  {
    language: 2,
    numOfChats: 8,
    level: 2,
    talkTime: 4500000,
    teacherPoints: 2
  }
];

const levels = [
  {name: 'Beginner'},
  {name: 'Intermediate'},
  {name: 'Advanced'},
  {name: 'Native / Bilingual'}
];

const badges = [
  {
    name: 'first-conv-sp',
    description: 'First conversation in Spanish'
  },
  {
    name: '10-min-talk',
    description: '10 minutes of talk-time'
  },
  {
    name: '5-smileys',
    description: '5 smileys awarded'
  }
];

const topics = [
  {
    language: 2,
    level: 1,
    topic: 'Weather'
  },
  {
    language: 2,
    level: 2,
    topic: 'Travel'
  }
];

const prompts = [
  {
    topic: 1,
    text: 'Prefieres el clima caliente o frio?',
    language: 2,
    level: 1
  },
  {
    topic: 1,
    text: 'Que tiempo hace por alli?',
    language: 2,
    level: 1
  }
];

module.exports = {
  users,
  userLanguages,
  languages,
  levels,
  badges,
  topics,
  prompts
};
