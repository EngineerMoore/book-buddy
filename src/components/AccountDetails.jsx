import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AccountDetails = ({token}) => {
  const [ userDetails, setUserDetails ] = useState({});
  const [ storedToken, setStoredToken ] = useState("");
  console.log({token});
  console.log(localStorage.getItem('token'))


  useEffect( () => {
    setStoredToken(localStorage.getItem('token'));
    const getUserDetails = async () => {
      try {
        console.log(storedToken);
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`,
          {
            method: "GET",
            header: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ${storedToken}"
            }
          }
        )
      }catch(error){console.error(error.message)}
    };
    getUserDetails()
  },[])
  return (
    <>
      <h2>Welcome firstname,</h2>
      <section>
        <section>
          <h3>Account Holder:</h3>
          <p>firstname lastname</p>
        </section>
        <section>
          <form>
            <label>Email:
            <input
              type="email"
              placeholder="useremail"
            />
            </label>
            <button>Update</button>
          </form>
        </section>
      </section>
      <Link to="/rentals">Rented Books</Link>
    </>
  )
}
export default AccountDetails