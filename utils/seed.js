const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail } = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  const users = [];

  for (let i = 0; i < 2; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
        username,
        email,
    });
  }

  await User.collection.insertMany(users);

   // Log out the seed data to indicate what should appear in the database
   console.table(users);
   console.info('Seeding complete! 🌱');
   process.exit(0);

});


