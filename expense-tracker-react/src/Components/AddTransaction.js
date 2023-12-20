import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
const AddTransaction = () => {
    const[text, setText]=useState("");
    const[amount, setAmount]=useState(0);
    

    const {addTransaction, transactions}=useContext(GlobalContext);
    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id: transactions.length+1,
            text:text,
            amount:parseInt(amount)
        }
        addTransaction(newTransaction);
    }

  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={onSubmit}>
        {/* <div className='form-control'> */}
            <label htmlFor="text">Text</label>
            <input type='text'value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...'></input>
        {/* </div> */}
        {/* <div className='form-control'> */}
            <label htmlFor="amount">Amount <br/>
            (negative - expense, positive + income)
            </label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount...'></input>
        {/* </div> */}
        <button className='btn'>Add transaction</button>
    </form>
    </>
  )
}

export default AddTransaction
