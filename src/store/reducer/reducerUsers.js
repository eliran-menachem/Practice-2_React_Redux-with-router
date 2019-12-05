const initialState = {
  isLogged: false,
  users: [
    {
      id: 1,
      firstName: 'Eliran',
      lastName: 'Menachem',
      age: 34,
      email: 'eliran.menachem@gmail.com',
      account: '123'
    },
    {
      id: 2,
      firstName: 'Eliran',
      lastName: 'Menachem',
      age: 34,
      email: 'eliran.menachem@gmail.com',
      account: '123'
    },
    {
      id: 3,
      firstName: 'Eliran',
      lastName: 'Menachem',
      age: 34,
      email: 'eliran.menachem@gmail.com',
      account: '123'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: action.payload
      
      }
     
  } // End switch
  return state
} // End reducer

export default reducer;
