const client = require('./client');

const {
    createUser
} = require('./tables');

const {
    generateFakeUsers
} = require('./testData');

async function dropTables() {
    try {
        console.log('Dropping tables...');
        await client.query(`
        DROP TABLE IF EXISTS users;
        `);
    } catch (error) {
        console.error('error dropping tables');
        throw error;
    }
}
async function createTables() {
    try {
        console.log('building tables...');
        await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(225) UNIQUE NOT NULL,
            email VARCHAR(225) UNIQUE NOT NULL,
            password VARCHAR(225) UNIQUE NOT NULL,
            "isAdmin" BOOLEAN DEFAULT true
        );
        `);
    } catch (error) {
        console.error('error creating tables');
        throw error;
    }
}
async function createInitialUsers() {
    try {
         const usersToCreate = await generateFakeUsers(50);
         const users = await Promise.all(usersToCreate.map(user => createUser(user)));

         console.log('users created:');
         return users;
    } catch (error) {
        console.error("error creating initial users");
        throw error;
    }
}
async function rebuildDB() {
    try {
        await dropTables();
        await createTables();
        await createInitialUsers();
    } catch (error) {
        console.error('error during rebuildDB');
        throw error;
    }
}

module.exports = {
    rebuildDB,
    dropTables,
    createTables,
  };