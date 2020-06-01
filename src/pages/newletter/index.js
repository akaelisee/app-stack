import React, {useState} from 'react'
import handlers from '../../../functions/signup';
import { navigate } from 'gatsby';
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

        fetch('https://inspiring-visvesvaraya-f559ca.netlify.app/.netlify/functions/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( datas )
        })
        .then(res => {
            console.log(res);
            return navigate('../success');
        })
        .catch(err => {
            alert(err);
        });

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