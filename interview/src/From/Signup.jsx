import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'

function Signup() {

    const navigate = useNavigate()

const [name,setName]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(name,email, password)
        axios.post('http://localhost:5000/signup',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Signup success.')
                    navigate('/home')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return ( 
    <>
        <h1 className="center"> SIGNUP </h1>
        <div className="outcard">
        Name<br />
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
                className="inputs"
                type="email" /><br /> <br /> 
            Email<br/>
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
            Password
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            <button
                onClick={handleSubmit}
                className="btns"> SUBMIT </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/signin'}> SIGN IN </Link>
        </div>
    </>
    )
}


export default Signup