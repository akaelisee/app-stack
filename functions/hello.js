exports.handler = function (event, context, callback){
    console.log(event);
    console.log(event);
    console.log('event');
    callback(null, {
        statusCode: 200,
        body: JSON.stringify('Hello ici bas')
    })
}