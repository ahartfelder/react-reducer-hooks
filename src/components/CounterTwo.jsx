import { useReducer } from "react"

const initialState = {
    firstCounter: 0,
    secondCounter: 50
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <h1>Counter Two</h1>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset All</button>
            <h3>First Counter: {count.firstCounter}</h3>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <h3>Second Counter: {count.secondCounter}</h3>
            <button onClick={() => dispatch({ type: 'increment2', value: 1})}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement</button>
        </>
    )
}