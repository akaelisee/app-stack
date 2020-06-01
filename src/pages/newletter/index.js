import React, {useState} from 'react'
import handlers from '../../../functions/signup';
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
        handlers.handler({
            email_address : inputForm.email,
        },
        (data) => {
            if(data.error) {
                alert('erreur');
            }
            else{
                alert("ok");
            }
        })
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