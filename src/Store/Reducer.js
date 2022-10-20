


function Reducer(state,action){

    switch (action.type) {
        case 'ADD':
            return  [...state,action.payload];
        case 'DEL':
            var s = state.filter( a => a.id !== action.payload.id)
            return s;
        default:
            return ;
    }

}

export default Reducer;