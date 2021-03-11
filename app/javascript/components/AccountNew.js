import React from 'react';
const AccountNew = ({ account, user }) => {
  const { name, balance } = account
  const { id } = user 
  const defaultName = name ? name : ""
  const defaultBalance = balance ? balance : 0
  return (
    <>
      <h1>Add Account</h1>
      <form action='/accounts' method='post'>
        <input type="hidden" name="account[user_id]" value={id} />
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="account[name]"
        />
        <input
          placeholder="Balance"
          type="number"
          defaultValue={defaultBalance}
          name="account[balance]"
        />
        <button class="btn waves-effect waves-light" type="submit" name="action">Add Account
    <i class="material-icons right">send</i>
  </button>
      </form>
    </>
  )
}
export default AccountNew;