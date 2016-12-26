
var scrollingToBottom = false;

Template.home.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('terminal', function () {
	   	$(document).ready(function() {
			scrollBottom();
		});
	});
  });
});

Template.home.helpers({
  terminalLines: function() {
    return terminal.find();
  }
});


Template.home.rendered = function(){
	terminal.find().observeChanges({
	    added: function (id, fields) {
            scrollBottom();
	    }
	});	
};


function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function scrollBottom(){
	if(!scrollingToBottom) {
		scrollingToBottom = true;
		$("html, body").animate({ scrollTop: $(document).height() }, "fast", function(){
			scrollingToBottom = false;
		});
	}

}