let _ = require('lodash');
let parser = require('rss-parser');
let request = require('request');

exports.handler = function(event, context, callback) {

    let rating = event.rating;
    let outOf = event.outOf;

    if (rating < 10) {
        return callback("What are you asking for—some kind of... bad? dog? No such thing");
    }

    request('https://queryfeed.net/twitter?q='+rating+'%2F'+outOf+
            '+from%3Adog_rates&title-type=user-name-both&geocode=',
        function(error, response, body) {
            if (error) {
                return callback("Error fetching Queryfeed:" + error);
            }
            parser.parseString(body, function(err, goodies) {
                if (err) {
                    return callback("Error parsing feed RSS:" + error);
                }
                let doggoTweets = goodies.feed.entries;
                if (doggoTweets.length == 0) {
                    return callback("No doggos found at that level of goodness.");
                }
                return callback(null, { tweet: _.sample(doggoTweets).link });
            });
        });

}
