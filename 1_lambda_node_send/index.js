exports.handler = (event) => {
    const AWS = require('aws-sdk');
    var message = "hola nuevo mensaje";
    var topicArn = "arn:aws:sns:us-east-1:123601231238:standartopic";
    var sns = new AWS.SNS();
    sns.publish({
        TopicArn: topicArn,
        Message: JSON.stringify(message)
    }, function (err, data) {
        if (err) {
            console.error('error publishing to SNS');
        } else {
            console.info('message published to SNS');
        }
    });
};