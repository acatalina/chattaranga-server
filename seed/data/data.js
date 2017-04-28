const users = [
  {
    username: 'baboquivari',
    name: 'Tony',
    email: 'to.sian.san@gmail.com',
    smileys: 8,
    memberSince: '2017-01-04T00:00:00.234Z',
    userLanguages: [0, 1]
  },
  {
    username: 'ruthymng',
    name: 'Ruth',
    email: 'ruth.ym.ng@gmail.com',
    smileys: 5,
    memberSince: '2017-01-04T00:00:00.234Z',
    userLanguages: [2, 3, 4]
  }
];

const languages = [
  {name: 'english'},
  {name: 'spanish'},
  {name: 'italian'},
  {name: 'french'}
 ];

const userLanguages = [
  {
    language: 1,
    numOfChats: 20,
    level: 2,
    talkTime: '0000000050000',
    teacherPoints: 8
  },
  {
    language: 2,
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
    teacherPoints: 9
  },
  {
    language: 2,
    numOfChats: 6,
    level: 2,
    talkTime: 3500000,
    teacherPoints: 4
  },
  {
    language: 3,
    numOfChats: 7,
    level: 1,
    talkTime: 2500000,
    teacherPoints: 1
  }
];

const levels = [
  {name: 'beginner'},
  {name: 'intermediate'},
  {name: 'advanced'}
];

const badges = [
  {
    name: 'first-conv-sp',
    description: 'First conversation in Spanish'
  },
  {
    name: 'first-conv-fr',
    description: 'First conversation in French'
  },
  {
    name: 'first-conv-it',
    description: 'First conversation in Italian'
  },
  {
    name: 'first-chatta-coach',
    description: 'First chatta-coach'
  },
  {
    name: 'first-chatta-smile',
    description: 'First chatta-smile'
  },
  {
    name: '5-chatta-smiles',
    description: '5 chatta-smiles awarded'
  },
  {
    name: '20-chatta-smiles',
    description: '20 chatta-smiles awarded'
  },
  {
    name: '50-chatta-smiles',
    description: '50 chatta-smiles awarded'
  },
  {
    name: '5-chatta-coaches',
    description: '5 chatta-coaches awarded'
  },
  {
    name: '20-chatta-coaches',
    description: '20 chatta-coaches awarded'
  },
  {
    name: '50-chatta-coaches',
    description: '50 chatta-coaches awarded'
  },
  {
    name: '10-min-talk',
    description: '10 minutes of talk-time'
  },
  {
    name: '1-hour-talk',
    description: '60 minutes of talk-time'
  },
  {
    name: '5-hour-talk',
    description: '300 minutes of talk-time'
  },
  {
    name: '10-hour-talk',
    description: '600 minutes of talk-time'
  },
  {
    name: '10-chat-sessions',
    description: 'Connected to other users 10 times'
  },
  {
    name: '20-chat-sessions',
    description: 'Connected to other users 20 times'
  },
  {
    name: '50-chat-sessions',
    description: 'Connected to other users 50 times'
  },
  {
    name: '100-chat-sessions',
    description: 'Connected to other users 100 times'
  },
  {
    name: 'fast-parrot-master',
    description: 'Attained all badges for a single language'
  },
  {
    name: 'ultimate-fast-parrot-demigod',
    description: 'Attained ALL badges for ALL languages'
  }

];

const topics = [
  {
    language: 1,
    level: 0,
    topic: 'shopping'
  },
  {
    language: 1,
    level: 0,
    topic: 'weather'
  },
  {
    language: 1,
    level: 0,
    topic: 'food'
  },
  {
    language: 1,
    level: 0,
    topic: 'travel'
  },
  {
    language: 1,
    level: 1,
    topic: 'sports'
  },
  {
    language: 1,
    level: 1,
    topic: 'film'
  },
  {
    language: 1,
    level: 1,
    topic: 'music'
  },
  {
    language: 1,
    level: 1,
    topic: 'hobbies'
  },
  {
    language: 1,
    level: 2,
    topic: 'books'
  },
  {
    language: 1,
    level: 2,
    topic: 'work'
  },
  {
    language: 1,
    level: 2,
    topic: 'aspirations'
  },
  {
    language: 1,
    level: 2,
    topic: 'current-affairs'
  },


  {
    language: 2,
    level: 0,
    topic: 'shopping'
  },
  {
    language: 2,
    level: 0,
    topic: 'weather'
  },
  {
    language: 2,
    level: 0,
    topic: 'food'
  },
  {
    language: 2,
    level: 0,
    topic: 'travel'
  },
  {
    language: 2,
    level: 1,
    topic: 'sports'
  },
  {
    language: 2,
    level: 1,
    topic: 'film'
  },
  {
    language: 2,
    level: 1,
    topic: 'music'
  },
  {
    language: 2,
    level: 1,
    topic: 'hobbies'
  },
   {
    language: 2,
    level: 2,
    topic: 'books'
  },
  {
    language: 2,
    level: 2,
    topic: 'work'
  },
  {
    language: 2,
    level: 2,
    topic: 'aspirations'
  },
  {
    language: 2,
    level: 2,
    topic: 'current-affairs'
  },


  {
    language: 3,
    level: 0,
    topic: 'shopping'
  },
  {
    language: 3,
    level: 0,
    topic: 'weather'
  },
  {
    language: 3,
    level: 0,
    topic: 'food'
  },
  {
    language: 3,
    level: 0,
    topic: 'travel'
  },
  {
    language: 3,
    level: 1,
    topic: 'sports'
  },
  {
    language: 3,
    level: 1,
    topic: 'film'
  },
  {
    language: 3,
    level: 1,
    topic: 'music'
  },
  {
    language: 3,
    level: 1,
    topic: 'hobbies'
  },
   {
    language: 3,
    level: 2,
    topic: 'books'
  },
  {
    language: 3,
    level: 2,
    topic: 'work'
  },
  {
    language: 3,
    level: 2,
    topic: 'aspirations'
  },
  {
    language: 3,
    level: 2,
    topic: 'current-affairs'
  }
];

const prompts = [

  // //////////////////////// SPANISH /////////////////////////
  // RUN THIS BY AL, ALSO TO ADD ACCENTS.
  {
    topic: 0,
    text: 'Que has comprado recientamente?',
    language: 1,
    level: 0
  },
  {
    topic: 0,
    text: '¿Que necesitas comprar pronto?',
    language: 1,
    level: 0
  },
  {
    topic: 0,
    text: '¿Te gusta comprar ropa?',
    language: 1,
    level: 0
  },
  {
    topic: 1,
    text: '¿Te gusta el clima cálido o frio?',
    language: 1,
    level: 0
  },
  {
    topic: 1,
    text: '¿Te gusta bailer en la lluvia? :)',
    language: 1,
    level: 0
  },
  {
    topic: 1,
    text: '¿Que tiempo hace por alli?',
    language: 1,
    level: 0
  },
  {
    topic: 2,
    text: '¿Cual es tu comida espanola favorita?',
    language: 1,
    level: 0
  },
  {
    topic: 2,
    text: '¿Cual es la mejor comida que puedes hacer?',
    language: 1,
    level: 0
  },
  {
    topic: 2,
    text: '¿Que fue lo ultimo que comiste?',
    language: 1,
    level: 0
  },
  {
    topic: 3,
    text: '¿Te gusta viajar?',
    language: 1,
    level: 0
  },
  {
    topic: 3,
    text: '¿Cual es el ultimo pais que has visitado?',
    language: 1,
    level: 0
  },
  {
    topic: 3,
    text: '¿Donde iras por tus vacaciones proximas?',
    language: 1,
    level: 0
  },


  {
    topic: 4,
    text: '¿Practicas algun deporte?',
    language: 1,
    level: 1
  },
  {
    topic: 4,
    text: '¿Cual es tu mayor logro deportivo?',
    language: 1,
    level: 1
  },
  {
    topic: 4,
    text: '¿Alguna vez se ha lesionado practicando deportes?',
    language: 1,
    level: 1
  },
  {
    topic: 5,
    text: '¿Has visto algun pelicula en Espanol?',
    language: 1,
    level: 1
  },
  {
    topic: 5,
    text: '¿Que pelicula deberia ver esta noche?',
    language: 1,
    level: 1
  },
  {
    topic: 5,
    text: '¿Cual fue la ultima pelicula que viste en el cine?',
    language: 1,
    level: 1
  },
  {
    topic: 6,
    text: '¿Escuchas música española?',
    language: 1,
    level: 1
  },
  {
    topic: 6,
    text: '¿Puedes tocar algun instrumento musical?',
    language: 1,
    level: 1
  },
  {
    topic: 6,
    text: '¿Vas a ir a algún festival de música este año?',
    language: 1,
    level: 1
  },
  {
    topic: 7,
    text: '¿Tienes algun hobby?',
    language: 1,
    level: 1
  },
  {
    topic: 7,
    text: '¿Te gustaria empezar un nuevo pasatiempo?',
    language: 1,
    level: 1
  },
  {
    topic: 7,
    text: 'Piensas que eres una persona creativa?',
    language: 1,
    level: 1
  },


  {
    topic: 8,
    text: '¿Cual fue el ultimo libro que leiste?',
    language: 1,
    level: 2
  },
  {
    topic: 8,
    text: '¿Cuál fue el último libro que intercambiaste o regalaste a alguien?',
    language: 1,
    level: 2
  },
  {
    topic: 8,
    text: '¿Te gusta la literatura de ficción o no?',
    language: 1,
    level: 2
  },
  {
    topic: 9,
    text: '¿Dime lo que haces sin decir tu titulo professional?',
    language: 1,
    level: 2
  },
  {
    topic: 9,
    text: '¿Cuál es el trabajo más gratificante que has tenido?',
    language: 1,
    level: 2
  },
  {
    topic: 9,
    text: '¿Cuáles son los pros y los contras de tu trabajo?',
    language: 1,
    level: 2
  },
  {
    topic: 10,
    text: '¿Tienes grandes metas este año?',
    language: 1,
    level: 2
  },
  {
    topic: 10,
    text: '¿Dónde te gustaría estar en 5 años?',
    language: 1,
    level: 2
  },
  {
    topic: 10,
    text: '¿Qué significa el éxito para ti?',
    language: 1,
    level: 2
  },
  {
    topic: 11,
    text: '¿Cuál historia en las noticias te interesa en este momento?',
    language: 1,
    level: 2
  },
  {
    topic: 11,
    text: '¿Cuál es su plataforma favorita para mantenerse al día con los asuntos de actualidad?',
    language: 1,
    level: 2
  },
  {
    topic: 11,
    text: '¿En qué canal de noticias confías más?',
    language: 1,
    level: 2
  },

  // ///////////////////////// ITALIAN //////////////////////////
  // NEED SOMEONE TO REVIEW!!
  {
    topic: 0,
    text: 'Cosa hai acquistato di recente?',
    language: 2,
    level: 0
  },
  {
    topic: 0,
    text: 'Che cosa devi acquistare in questo momento?',
    language: 2,
    level: 0
  },
  {
    topic: 0,
    text: 'Ti piace acquistare dei vestiti?',
    language: 2,
    level: 0
  },
  {
    topic: 2,
    text: 'Preferisci il tempo caldo o freddo?',
    language: 2,
    level: 0
  },
  {
    topic: 2,
    text: 'Ti piace ballare sotto la pioggia? :)',
    language: 2,
    level: 0
  },
  {
    topic: 2,
    text: 'Come è il tempo dove sei?',
    language: 2,
    level: 0
  },
  {
    topic: 2,
    text: 'Qual’è il tuo piatto preferito?',
    language: 2,
    level: 0
  },
  {
    topic: 2,
    text: 'Qual\'è il miglior piatto che sai cucinare?',
    language: 2,
    level: 0
  },
  {
    topic: 2,
    text: 'Qual’è l\'ultima cosa che hai mangiato?',
    language: 2,
    level: 0
  },
  {
    topic: 3,
    text: 'Ti piace viaggiare?',
    language: 2,
    level: 0
  },
  {
    topic: 3,
    text: 'Qual’è l\'ultimo paese che hai visitato?',
    language: 2,
    level: 0
  },
  {
    topic: 3,
    text: 'Dove andrai per la tua prossima vacanza?',
    language: 2,
    level: 0
  },

  {
    topic: 4,
    text: 'Fai qualche sport?',
    language: 2,
    level: 1
  },
  {
    topic: 4,
    text: 'Qual\'è il tuo risultato sportivo più soddisfacente?',
    language: 2,
    level: 1
  },
  {
    topic: 4,
    text: 'Ti sei mai fatto male facendo sport?',
    language: 2,
    level: 1
  },
  {
    topic: 5,
    text: 'Hai visto qualche film italiano?',
    language: 2,
    level: 1
  },
  {
    topic: 5,
    text: 'Che film dovrai guardare questa notte?',
    language: 2,
    level: 1
  },
  {
    topic: 5,
    text: 'Qual\'è stato l\'ultimo film che hai visto al cinema?',
    language: 2,
    level: 1
  },
  {
    topic: 6,
    text: 'Ascolti qualsiasi musica italiana?',
    language: 2,
    level: 1
  },
  {
    topic: 6,
    text: 'Suoni alcuni strumenti musicali?',
    language: 2,
    level: 1
  },
  {
    topic: 6,
    text: 'Stai andando a qualche intrattenimento musicale quest\'anno?',
    language: 2,
    level: 1
  },
  {
    topic: 7,
    text: 'Hai qualche hobby?',
    language: 2,
    level: 1
  },
  {
    topic: 7,
    text: 'Vuoi avere degli altri hobby?',
    language: 2,
    level: 1
  },
  {
    topic: 7,
    text: 'Ti consideri una persona creativa?',
    language: 2,
    level: 1
  },


  {
    topic: 8,
    text: 'Qual'è stato l'ultimo libro che hai letto?',
    language: 2,
    level: 2
  },
  {
    topic: 8,
    text: 'Qual\'è stato l\'ultimo libro che hai regalato o scambiato con qualcun altro e perché?',
    language: 2,
    level: 2
  },
  {
    topic: 8,
    text: 'Ti piacciono i libri di finzione o di fantascienza?',
    language: 2,
    level: 2
  },
  {
    topic: 9,
    text: 'Dimmi cosa fai ... senza divulgare il tuo titolo di lavoro :)',
    language: 2,
    level: 2
  },
  {
    topic: 9,
    text: 'Qual è il lavoro più gratificante che hai mai avuto?',
    language: 2,
    level: 2
  },
  {
    topic: 9,
    text: 'Quali sono i pro e contro del tuo lavoro attuale?',
    language: 2,
    level: 2
  },
  {
    topic: 10,
    text: 'Quali sono i tuoi obiettivi quest\'anno?',
    language: 2,
    level: 2
  },
  {
    topic: 10,
    text: 'Dove vedi te stesso tra 5 anni?',
    language: 2,
    level: 2
  },
  {
    topic: 10,
    text: 'Cosa significa il successo per te?',
    language: 2,
    level: 2
  },
  {
    topic: 11,
    text: 'Quale storia ti interessa di più nei telegiornali, e perché?',
    language: 2,
    level: 2
  },
  {
    topic: 11,
    text: 'Qual\'è la tua piattaforma multimediale preferita per tenerti aggiornato con le notizie attuali?',
    language: 2,
    level: 2
  },
  {
    topic: 11,
    text: 'Di quale giornale ti fidi di più?',
    language: 2,
    level: 2
  },

  // ////////////////////// FRENCH //////////////////////////

  {
    topic: 0,
    text: 'Qu’est-ce que tu as acheté récemment?',
    language: 3,
    level: 0
  },
  {
    topic: 0,
    text: 'Qu’est-ce que tu as besoin d’acheter bientôt?',
    language: 3,
    level: 0
  },
  {
    topic: 0,
    text: 'Est-ce que tu aimes acheter des vêtements?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Préfrès-tu quand il fait chaud ou quand il fait beau?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Aimes-tu dancer dans la pluie? :)',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Quel temps fait-il où tu habites?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Quel est ton plat préféré francais?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Quel est le meilleur plat que tu peut préparer?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Quel était la dernière chose que tu as mangé?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Aimes-tu voyager?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Quel est le dernier pays que tu est visité?',
    language: 3,
    level: 0
  },
  {
    topic: 3,
    text: 'Où vas-tu pour des vacances que vienen?',
    language: 3,
    level: 0
  },

  {
    topic: 4,
    text: 'Est-ce que tu joues des sports?',
    language: 3,
    level: 1
  },
  {
    topic: 4,
    text: 'Quel est ta plus grande prouesse sportive?',
    language: 3,
    level: 1
  },
  {
    topic: 4,
    text: 'Est-ce que tu t’as blessé en jouant des sports?',
    language: 3,
    level: 1
  },
  {
    topic: 5,
    text: 'Est-ce que tu as vu des films francais?',
    language: 3,
    level: 1
  },
  {
    topic: 5,
    text: 'Quel film recommanderais-tu pour ce soir?',
    language: 3,
    level: 1
  },
  {
    topic: 5,
    text: 'Quel était la dernière chose que tu as vu au ciné?',
    language: 3,
    level: 1
  },
  {
    topic: 6,
    text: 'Est-ce que tu écoutes de la musique italienne?',
    language: 3,
    level: 1
  },
  {
    topic: 6,
    text: 'Est-ce que tu joues des instruments?',
    language: 3,
    level: 1
  },
  {
    topic: 6,
    text: 'Est-ce que tu vas aller a des festivals musicales cette année?',
    language: 3,
    level: 1
  },
  {
    topic: 7,
    text: 'Quels son tes passetemps?',
    language: 3,
    level: 1
  },
  {
    topic: 7,
    text: 'Est-ce que tu veux commencer un nouveau passetemps?',
    language: 3,
    level: 1
  },
  {
    topic: 7,
    text: 'Est-ce que tu te consideres un person créatif?',
    language: 3,
    level: 1
  },


  {
    topic: 8,
    text: 'Quel était le dernier livre que tu as lu?',
    language: 3,
    level: 2
  },
  {
    topic: 8,
    text: 'Quel était le dernier livre que tu as donné a, ou échangé avec, un ami, et pourquoi?',
    language: 3,
    level: 2
  },
  {
    topic: 8,
    text: 'Est-ce que tu préfères des livres romanesques ou non-romanesques?',
    language: 3,
    level: 2
  },
  {
    topic: 9,
    text: 'Dis-moi qu’est-ce que tu fais au travail, sans dire el intitulé du poste :)',
    language: 3,
    level: 2
  },
  {
    topic: 9,
    text: 'Quel était le travail le plus gratifiant que tu as jamais eu?',
    language: 3,
    level: 2
  },
  {
    topic: 9,
    text: 'Quels sont les avantages et les inconvénients de ton emploi actuel?',
    language: 3,
    level: 2
  },
  {
    topic: 10,
    text: 'Est-ce que tu as des buts de cette année?',
    language: 3,
    level: 2
  },
  {
    topic: 10,
    text: 'Où est-ce que tu te vois en 5 années?',
    language: 3,
    level: 2
  },
  {
    topic: 10,
    text: 'Qu’est-qui te signifie el sucés?',
    language: 3,
    level: 2
  },
  {
    topic: 11,
    text: 'Quelle histoire dans les nouvelles te intéresse le plus? Pourquoi?',
    language: 3,
    level: 2
  },
  {
    topic: 11,
    text: 'Quelle est ta source préférée pour les actualités, et pourquoi?',
    language: 3,
    level: 2
  },
  {
    topic: 11,
    text: 'Quelle est la source d’actualités que te fait la plus confiance?',
    language: 3,
    level: 2
  },
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