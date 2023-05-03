const { faker } = require('@faker-js/faker');

const createFakeUser = async () => {
    const fakeUser = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };

    return fakeUser;
}

const generateFakeUsers = async (numberOfUsers = 1) => {
    const users = [];
    for(let i = 0; i < numberOfUsers; i++){
        users.push(await createFakeUser());
    }
    return users;
}

module.exports = {
    generateFakeUsers
}
