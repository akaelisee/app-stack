const axios = require('axios');

module.exports.handler = (event, context, callback) => {
    const mailchimpApi = process.env.API_MAILCHIMP;
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
        callback(null, ({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                status: "Successfully"
            })
        }))
    })
    .catch ((err) => {
        callback(null, ({
            statusCode: err.status,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: err
            })
        }))
    })
}
