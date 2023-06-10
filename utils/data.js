const usernameSeed = [
    'mofungo',
    'fetusdeletus',
    'Porkenstien',
    'BattleTanx',
    'PropDriller69',
];

const emailSeed = [
    'apples@testmail.com',
    'bananas@testmail.com',
    'cremefraishe@testmail.com',
    'dogtreats@testmail.com',
    'epicfail@testmail.com',

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