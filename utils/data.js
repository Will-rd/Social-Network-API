const usernameSeed = [
    'mofungo',
    'fetusdeletus',
    'Porkenstien',
    'BattleTanx',
    'PropDriller69',
    'IheartBugs',
    'TwilightFan43',
    'BiggestFan67',
    'MrMosh420',
    'BookReader42',
    'PrettyPants',
    'OmegaTrain',
    'FortunesFury',
];

const emailSeed = [
    'apples@testmail.com',
    'bananas@testmail.com',
    'cremefraishe@testmail.com',
    'dogtreats@testmail.com',
    'epicfail@testmail.com',
    'metalgear@testmail.com',
    'silenthill@testmail.com',
    'matrixfan@testmail.com',
    'bonkerboys@testmail.com',
    'filthypeasant@testmail.com',
    'helpmeimcoding@testmail.com',
    'masterprogrammer56@testmail.com',
    'simplebest@testmail.com',

];



// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(usernameSeed)}`;

  // Gets a random email
const getRandomEmail = () =>
`${getRandomArrItem(emailSeed)}`;

module.exports = {getRandomUsername, getRandomEmail }