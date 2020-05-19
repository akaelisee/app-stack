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
            'Authorization': `$apikey ${mailchimpApi}`
        }
    })
    .then((res) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                status: "Successfully"
            })
        })
    })
    .catch ((err) => {
        callback(null, {
            statusCode: err.status,
            body: JSON.stringify({
                error: err.response.data
            })
        })
    })
}

// const mailchimpApi = process.env.GATSBY_API_KEY;

// exports.handler = (event, context, callback) => {
//     fetch(`Contact avec API `, {
//         method:"POST"
//     })  https://us8.api.mailchimp.com/3.0/lists/a8ff5ceece/members/

// }