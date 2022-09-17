exports.handler = (event) => {

    const AWS = require('aws-sdk');
    var message = "hola nuevo mensaje";
    var topicArn = "	arn:aws:sns:us-east-1:561607169148:standartopic";
    var sns = new AWS.SNS();
    sns.publish({
        TopicArn: topicArn,
        Message: JSON.stringify(message)
    }, function (err, data) {
        if (err) {
            console.error('error publishing to SNS');
            context.fail(err);
        } else {
            console.info('message published to SNS');

        }
    });
};