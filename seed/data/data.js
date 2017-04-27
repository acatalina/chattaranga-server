const users = [
  {
    username: 'baboquivari',
    smileys: 8,
    name: 'Tony',
    email: 'to.sian.san@gmail.com',
    memberSince: '2017-01-04T00:00:00.234Z',
    userLanguages: [0, 1]
  },
  {
    username: 'ruthymng',
    name: 'Ruth',
    email: 'ruth.ym.ng@gmail.com',
    smileys: 5,
    memberSince: '2017-01-04T00:00:00.234Z',
    userLanguages: [2]
  }
];

const languages = [
  {name: 'english'},
  {name: 'spanish'}
 ];

const userLanguages = [
  {
    language: 0,
    numOfChats: 0,
    level: 3,
    talkTime: 0,
    teacherPoints: 0
  },
  {
    language: 1,
    numOfChats: 8,
    level: 1,
    talkTime: 4500000,
    teacherPoints: 2
  },
  {
    language: 1,
    numOfChats: 10,
    level: 2,
    talkTime: 4500000,
    teacherPoints: 5
  }
];

const levels = [
  {name: 'beginner'},
  {name: 'intermediate'},
  {name: 'advanced'},
  {name: 'native / bilingual'}
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
    language: 1,
    level: 0,
    topic: 'weather'
  },
  {
    language: 1,
    level: 1,
    topic: 'travel'
  }
];

const prompts = [
  {
    topic: 0,
    text: 'Prefieres el clima caliente o frio?',
    language: 1,
    level: 0
  },
  {
    topic: 0,
    text: 'Que tiempo hace por alli?',
    language: 1,
    level: 2
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