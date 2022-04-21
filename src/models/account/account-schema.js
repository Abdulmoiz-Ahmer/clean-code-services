let Joi = require('joi');

module.exports = Joi.object().keys({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	phoneNumber: Joi.string()
		.required()
		.regex(new RegExp('/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g'))
		.messages({
			'string.pattern.base': `"phoneNumber" should be in format (###) ###-####`,
		}),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});
