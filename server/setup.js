Meteor.startup(function() {

	//create the admin account
	if(Meteor.settings != undefined) {
		// create admin account and make sure the password is up-to-date.
		if(Accounts.findUserByUsername("admin") == null) {
			Accounts.createUser({username: "admin", password : Meteor.settings.private.admin.password });
		} else {
			Accounts.setPassword(Accounts.findUserByUsername("admin")._id, Meteor.settings.private.admin.password, true);
		}
	} else {
		console.log("Cannot find Meteor.settings. Are you sure you ran with `npm start`?");
	}


});
