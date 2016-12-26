Meteor.methods({
    clearTerminal: function () {
    	terminal.remove({});
        console.log("terminal cleared");
    }
});
