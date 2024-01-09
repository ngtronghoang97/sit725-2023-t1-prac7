const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat;


describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(error, response, bodyString){
        	if (bodyString) {
            	let responseObj = JSON.parse(bodyString);
            	expect(responseObj.statusCode).to.equal('GET success');
			}
            done();
        });
    });
});

describe('test POST api', function(){
    it('post cat to DB', function(done){
        request.post({url:url,form:cat}, function(error, response, bodyString){
        	if (bodyString) {
            	let responseObj = JSON.parse(bodyString);
            	expect(responseObj.statusCode).to.equal('POST success');
			}
            done();
        });
    });
});

describe('test DELETE api', function(){
    it('delete a cat', function(done){
        request.delete({url:url,form:cat}, function(a,b,c){
            //todo asserts here
            done();
        });
    });
});