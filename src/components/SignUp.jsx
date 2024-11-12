import { useState } from "react";


const SignUp = () => {
  const [ firstNameInput, setFirstNameInput ] = useState("");
  const [ lastNameInput, setLastNameInput ] = useState("");
  const [ emailInput, setEmailInput ] = useState("");
  const [ passwordInput, setPasswordInput ] = useState("");

  const submitSignUp = async (e) => {
    e.preventDefault;
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type":  "application/json"
          },
          body: JSON.stringify({
              firstname: firstNameInput,
              lastname: lastNameInput,
              email: emailInput,
              password: passwordInput
          })
        }
      )
      const result = await response.json();
      console.log(result);
      setFirstNameInput("")
      setLastNameInput("")
      setEmailInput("")
      setPasswordInput("")
    }catch(error){console.error(error.message)}
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={submitSignUp}>
        <input
          type="text"
          placeholder="First name"
          onChange={ (e) => {setFirstNameInput(e.target.value)}}
          value={firstNameInput}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={ (e) => {setLastNameInput(e.target.value)}}
          value={lastNameInput}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={ (e) => {setEmailInput(e.target.value)}}
          value={emailInput}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={ (e) => {setPasswordInput(e.target.value)}}
          value={passwordInput}
        />
        <button>Sign Up</button>
      </form>
    </>
  )
}
export default SignUp