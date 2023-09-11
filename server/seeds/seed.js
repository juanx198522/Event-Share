const db = require('../config/connection');
const { User, Event } = require('../models');

const userData = require('./userData.json');
const eventData = require('./eventData.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Event.deleteMany({});

    const users = await User.insertMany(userData);
    console.log('Users seeded successfully');

    const events = await Event.insertMany(eventData);
    console.log('Events seeded successfully');
  } catch (error) {
    console.error('Seed script error:', error);
  } finally {
    db.close();
  }
});
