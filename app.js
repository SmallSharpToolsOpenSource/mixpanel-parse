global.Parse = require("parse-cloud").Parse;

var Mixpanel = require("mixpanel");

var mixpanelToken = "SET_VALID_TOKEN";

var mixpanel = Mixpanel.init(mixpanelToken);
var distinctId = "abc123";

// track an event related to a user with their distinctId

mixpanel.track(eventName, properties).then(function() {
	console.log("event was tracked");
}, function(error) {
	console.log(error);
});

// set properties for a user using their distinctId

var properties = {"lastUseDate" : new Date()};

mixpanel.people.set(distinctId, properties).then(function(error) {
	console.log("person properties were set");
}, function(error) {
	console.log(error);
});
