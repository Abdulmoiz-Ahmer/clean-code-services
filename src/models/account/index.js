const buildMakeAccount = require('./build-make-account.js');
const accountSchema = require('./account-schema');
const accountValidator = require('../validator')(accountSchema);
const fakeAccount = require('./fake-account');

const makeAccount = buildMakeAccount(accountValidator);
module.exports = { makeAccount, fakeAccount };
