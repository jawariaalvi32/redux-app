const initailaState = {
    counter : 0
}

export default function CounterReducer(state = initailaState, action) {
    switch (action.type) {
        case 'INCREAMENT' :
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREAMENT' :
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}