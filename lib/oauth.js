var OAuth = require('oauth2').OAuth2,
    url = require('url');

var EventEmitter = require('events').EventEmitter;
var MyOauthModule = function(){
	EventEmitter.call(this);
	var self = this;
}

util.inherits(OauthModule, EventEmitter);
