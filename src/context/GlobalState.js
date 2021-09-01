import React , {createContext,useReducer} from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
};

// create context
export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer , initialState);

    //actions

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRAN',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRAN',
            payload:transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}