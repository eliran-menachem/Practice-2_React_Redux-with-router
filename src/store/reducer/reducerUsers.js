const initialState = {
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
    case 'EXAMPLE':
      return {
        ...state
      }
  } // End switch
  return state
} // End reducer

export default reducer;
