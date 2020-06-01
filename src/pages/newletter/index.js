import React, {useState} from 'react'
import handlers from '../../../functions/signup';
const axios = require('axios');

const Index = () => {
    const [inputForm, setInputForm] = useState({
        email: ""
    })

    const handleChange = (e) => {
        setInputForm({
            [e.target.name] : e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
       
        const datas = { email: inputForm.email };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
            }
          };

        axios.post(`https://inspiring-visvesvaraya-f559ca.netlify.app/.netlify/functions/signup`, datas, axiosConfig)
        .then(res => {
            // console.log(res);
            // console.log(res.data);
            console.log("RESPONSE ==== : ", res);
        })
        .catch(err => {
            // console.log(err);
            console.log("ERROR: ====", err);
        })
        // fetch('https://inspiring-visvesvaraya-f559ca.netlify.app/.netlify/functions/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify( datas )
        // })
        // .then(response => {
        //     console.log( response );
        // })
        // .catch(err => {
        //     console.log( err );
        // });
    }
    return (
        <div>
            <form onSubmit = {submitForm}>
                <input type = "email" value = {inputForm.email} name="email" onChange={handleChange} />
                <button type="submit">
                    S'inscrire 
                </button>
            </form> 
        </div>
    )
}

export default Index