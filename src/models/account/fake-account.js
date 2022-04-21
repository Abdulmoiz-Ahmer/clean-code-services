const faker = require('faker');

const fakeAccount = function () {
	const account = {
		name: {
			first: faker.name.firstName(),
			last: faker.name.lastName(),
		},
		phone: {
			primary: faker.phone.phoneNumber('(###) ###-####'),
		},
		password: faker.internet.password(8, false),
	};

	account.email = faker.internet.email(account.firstName, account.lastName);

	return account;
};

module.exports = fakeAccount;
