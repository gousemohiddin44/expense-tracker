import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExp = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const incomeArray = amounts.filter(item => item > 0);

    function incomeCalc(){
        let sum=0;
        for (let i = 0; i< incomeArray.length; i++) {
          sum += incomeArray[i];
        }
        return sum
    }

    const income = incomeCalc();

    const expenseArray = amounts.filter(item => item < 0);
    
    function expenseCalc(){
        let sum=0;
        for (let i = 0; i< expenseArray.length; i++) {
          sum += expenseArray[i];
        }
        return sum
    }

    const expense = expenseCalc();

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+ {income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>- {Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExp
