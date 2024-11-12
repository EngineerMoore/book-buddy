import { useState } from "react";

const Login = ({ setToken }) => {
  const [ loginEmail, setLoginEmail ] = useState("");
  const [ loginPassword, setLoginPassword ] = useState("");

  const authorize = async (e) => {
    e.preventDefault;
    try{
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`,
        {
          method: `POST`,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword
          })
        })
        const result = await response.json();
        console.log(result);
        const accessToken = result.token
        setToken(accessToken);
        localStorage.setItem(`token`, accessToken);
    }catch(error){console.error(error.message)}

    }

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={authorize}>
        <input
          type="email"
          placeholder="Email"
          onChange={ (e) => {setLoginEmail(e.target.value)}}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={ (e) => {setLoginPassword(e.target.value)}}
        />
        <button>Log In</button>
      </form>
    </>
  )
}
export default Login