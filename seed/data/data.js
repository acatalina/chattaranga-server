const languages = [
  {name: 'English'},
  {name: 'Spanish'},
  {name: 'Italian'},
  {name: 'French'}
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
  },
  {
    language: 3,
    level: 2,
    topic: 'Travel'
  },
  {
    language: 3,
    level: 2,
    topic: 'Books'
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
  },
  {
    topic: 3,
    text: 'Cuales libros has leido recientamente?',
    language: 2,
    level: 3
  }
];

module.exports = {
  languages,
  levels,
  badges,
  topics,
  prompts
};