const initialState = {
  accounts: [
    { bank: 10, account: '40254646', branch: 705, balance:10954 },
    { bank: 11, account: '20252346', branch: 702, balance:10554 },
    { bank: 12, account: '15654646', branch: 703, balance:1854 },
  ]
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case'EXAMPLE':{
            return{
                ...state
            }
        }
    }// End of switch
    return state
}// Ens of reducer
