import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"
const Login = () => {
    const [creds, setcreds] = useState({
        username:undefined,
        password:undefined
    })
    const navigate = useNavigate()
    const {loading,error,dispatch} = useContext(AuthContext)
  const handleChange = () =>{
    setcreds(prev=>({...prev,[e.target.id]:e.target.value}))
  }
  const handleClick = async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_LOADING"})
    try {
        const response = await axios.post("/auth/login",creds)
        dispatch({type:"LOGIN_SUCCESS",payload:response.data})
        navigate("/")
    } catch (error) {
        dispatch({type:"LOGIN_FAILED",payload:error.response.data})
    }
  }
    return (
    <div className='login'>
        <div className='LoginContainer'>
            <input type="text" placerholder="username" id="username" className='loginInput' onChange={handleChange} />
            <input type="password" placerholder="password" id="password" className='loginInput' onChange={handleChange} />
            <button onClick={(e)=>handleClick(e)} className='loginButton'>Login</button>
            {error && <span>{error.message}</span>}
        </div>

    </div>
  )
}

export default Login