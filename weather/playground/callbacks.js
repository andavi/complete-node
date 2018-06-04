var getUser = (id, callback) => {
	var userObject = {
		id,
		name: 'Vikram'
	};

	setTimeout(() => {
		callback(userObject);
	}, 3000);
};

getUser(123, (user) => {
	console.log(user);
});