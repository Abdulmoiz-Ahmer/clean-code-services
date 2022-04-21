let Joi = require('joi');

module.exports = Joi.object().keys({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),

	phoneNumber: Joi.string()
		.required()
		// .regex(new RegExp('/(d{3})s?d{3}-d{4}'))
		.messages({
			'string.pattern.base': `"phoneNumber" should be in format (###) ###-####`,
		}),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});
