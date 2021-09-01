import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

    const {transactions} = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction=> transaction.amount);

    
    function totalBalance(){
        let sum =0;
        for (let i = 0; i < amounts.length; i++) {
            sum += amounts[i];    
        }
        return sum
    }

    const total = totalBalance();
    
    console.log(total)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id='balance'>Rs {total}</h1>
        </>
    )
}

export default Balance
