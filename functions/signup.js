const axios = require('axios');

module.exports.handler = (event, context, callback) => {
    const mailchimpApi = "7352456b713e735667462364ff7513d9-us8";
    const memberListId = "a8ff5ceece";

    const formData = JSON.parse(event.body);

    const data = {
        email_address: formData.email,
        status: "subscribed"
    }

    axios.post(`https://us8.api.mailchimp.com/3.0/lists/${memberListId}/members/`, data, {
        headers: {
            'Content-Type' : 'application-json',
            'Authorization': `apikey ${mailchimpApi}`,
            'Access-Control-Allow-Origin' : '*'
        }
    })
    .then((res) => {
        callback(null, JSON.stringify({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: {
                status: "Successfully",
                error: res.data.status !== "subscribed",
            }
        }))
    })
    .catch ((err) => {
        callback(JSON.stringify({
            statusCode: err.status,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: err.response.status
            })
        }))
    })
}
