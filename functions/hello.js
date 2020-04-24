exports.handler = function (event, context, callback){
    console.log(event);
    console.log(context);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify("Hello !")
    })
}