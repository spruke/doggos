let _ = require('lodash');
let mathematicsWizard = require('./mathematics-wizard.js');

exports.handler = function(event, context, callback) {
    console.log("test");

    let num1 = event.num1;
    let num2 = event.num2;

    try {
        let result = mathematicsWizard.performMagic(num1, num2);
        callback(null, result);
    } catch (ex) {
        callback(ex);
    }

}

