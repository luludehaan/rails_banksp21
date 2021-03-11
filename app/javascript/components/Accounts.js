import React from 'react';
import Navbar from './Navbar';
const Accounts = ({ user, accounts  }) => {
  const { first_name, last_name } = user
  return (
    <>
      <Navbar />
      <h1 className="deep-purple accent-1 center-align white-text">Accounts</h1>
      <h2>Welcome {`${first_name}  ${last_name}`}</h2>
      <hr />
      <a href="/accounts/new">New Account</a>
      <br />
      <h3>Your Accounts</h3>
      <ul>
        { accounts.map( (a) => (
          <li key={a.id}>
            {a.name} - ${a.balance}
          </li>
        ))}
      </ul>
    </>
  )
}
export default Accounts;