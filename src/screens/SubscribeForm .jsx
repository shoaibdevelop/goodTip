import React from 'react';
import { useState } from 'react';

 const SubscribeForm = () => {
    const [email, setEmail] = useState("")
  

    const handleSubmit =  (event) => {
        event.preventDefault()
        // TODO
    }

    const handleEmailChange = (event) => {
        const { value } = event.target.value
        setEmail(value)
    }

  

    return (
        <>



            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Your Email Id" aria-label="Your email address" required
                    onChange={handleEmailChange}
                    value={email} />
                <button >Sign Me Up</button>
            </form>

        </>
    )
}

export default SubscribeForm