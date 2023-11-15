const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Yana',
        email: 'yana@gmail.com'
    },
    {
        username: 'John',
        email: 'john@gmail.com'
    },
    {
        username: 'Ben',
        email: 'ben@gmail.com'
    },
    {
        username: 'Will',
        email: 'will@gmail.com'
    },
    {
        username: 'Mishka',
        email: 'mishka@gmail.com'
    },
    {
        username: 'Lola',
        email: 'lola@gmail.com'
    },
    {
        username: 'Tom',
        email: 'tom@gmail.com'
    },
    {
        username: 'Iryna',
        email: 'iryna@gmail.com'
    },
    {
        username: 'Slava',
        email: 'slava@gmail.com'
    }
]

connection.on('error', (err) => err);

// connecting to server
connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({}); // Drop existing thoughts
    await User.deleteMany({}); // Drop existing students

    await User.collection.insertMany(users);  // Adds seed data to db

    console.info('Seeding is done!');
    process.exit(0);
});