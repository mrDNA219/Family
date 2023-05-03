const client = require('../client');

async function createUser(user) {
    try {
        const columnNames = Object.keys(user).join('", "');
        const valueString = Object.keys(user).map((key, index) => `$${index + 1}`).join();

        const { rows: [newUser] } = await client.query(`
        INSERT INTO users("${columnNames}")
        VALUES (${valueString})
        RETURNING *;`,
        Object.values(user)
        );

        return newUser;
    } catch (error) {
        console.error('error creating user');
        throw error;
    }
}

module.exports = {
    createUser
}