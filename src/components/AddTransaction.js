import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [text,setText] = useState("");
    const [amount,setAmount] = useState("");

    const {addTransaction} = useContext(GlobalContext);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*10000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter Text..." autoComplete="off" value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income) </label>
                    <input type="number" id="amount" placeholder="Enter Amount..." value={amount} onChange={(e)=> setAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
