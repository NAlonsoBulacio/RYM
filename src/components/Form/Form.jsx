import { useState } from "react";
import Validation from "../validation/Validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
       email:'',
       password:'' 
    })
    const[errors, setErrors] = useState({})
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(Validation({
         ...userData,
        [event.target.name]:event.target.value  
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
     }


return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{color: 'white'}}>email</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
        <hr></hr>
        <label htmlFor="password" style={{color: 'white'}}>password</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange} />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
        <button>Submit</button>
    </form>
)
}

export default Form;