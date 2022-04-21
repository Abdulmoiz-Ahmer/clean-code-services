let validator = (schema) => (payload) => {
	let { error } = schema.validate(payload, { abortEarly: false });

	if (error) {
		let errors = error.details.map((el) => ({
			field: el.path[0],
			message: el.message.replace('"', '').replace('"', '').toLowerCase(),
		}));
		return {
			errors,
		};
	}
	return true;
};

module.exports = validator;
