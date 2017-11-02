let _ = require('lodash');
let mathematicsWizard = require('./mathematics-wizard');

exports.handler = function(event, context, callback) {
    let num1 = event.num1;
    let num2 = event.num2;
    try {
        let result = mathematicsWizard.performMagic(num1, num2);
        callback(null, result);
    } catch (ex) {
        callback(ex);
    }
};

/*exports.handler = function(event, context, callback) {
    let num1 = parseInt(event.pathParameters.num1);
    let num2 = parseInt(event.queryStringParameters.num2);
    try {
        let result = mathematicsWizard.performMagic(num1, num2);
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({result: result})
        });
    } catch (ex) {
        callback(ex);
    }
};*/
