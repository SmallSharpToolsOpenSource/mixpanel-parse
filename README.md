# Mixpanel for Parse Cloud Code

The existing Node module for [mixpanel-node](https://github.com/mixpanel/mixpanel-node)
did not working with Parse Cloud Code so I adjusted that code base to work as a 
dependency when deployed and to also return promises for all functions so that
they could be used like other Parse functions.

## Usage

Simply copy `mixpanel.js` from this Git repository into your `cloud` folder for Parse.
To reference it use the require statement shown in the example below. You will need to
set a valid token to work with your Mixpanel profiles.

## Caveat

Typically with Node.js you can use NPM to install and use modules. A directory named
`node_modules` is created for the dependencies. It does not work this way with Parse
so you must reference dependencies differently as described above and shown below.

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
