import React from 'react'

const index = () => {
    return (
        <div>
            <h1> Bienvenue</h1>
            <form action="/success" name="contact" method="POST" data-netlify="true">
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" class="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Nom
                    </label>
                    <input type="text" class="form-control" name="firstname"/>
                </div>
                <input type="hidden" name="form-contact" value="contact"/>
                <input type="submit" value="envoyer"/>
            </form>
        </div>
    )
}

export default index