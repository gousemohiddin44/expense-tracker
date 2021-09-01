export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRAN':
            return {
                ...state,
                transactions:state.transactions.filter(tran => tran.id !== action.payload),
            }
        case 'ADD_TRAN':
            return {
                ...state,
                transactions: [...state.transactions,action.payload],
            }
        default:
            return  state;
    }
}