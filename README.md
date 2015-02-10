# Mixpanel for Parse Cloud Code

The existing Node module for [mixpanel-node](https://github.com/mixpanel/mixpanel-node)
did not working with Parse Cloud Code so I adjusted that code base to work as a 
dependency when deployed and to also return promises for all functions so that
they could be used like other Parse functions.

## Sample Code

````javascript
var Mixpanel = require("cloud/mixpanel");

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
````

## License

MIT

## Author

Brennan Stehling (@smallsharptools)
