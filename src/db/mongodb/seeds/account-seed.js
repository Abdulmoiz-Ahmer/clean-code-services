const mongoose = require('mongoose');
const faker = require('faker');
const { fakeAccount } = require('../../../models/Account');
const account = require('../models/account');

// Seeder using async await
const seedDatabase = async function () {
	const accounts = [];

	for (let i = 0; i < 5; i++) {
		const data = {
			...fakeAccount(),
		};
		const account = accounts.push(data);
	}

	await account.create(accounts);
};

// Drop DB then seed

mongoose.connection.dropCollection('accounts', async function () {
	await seedDatabase();
	mongoose.connection.close();
});
