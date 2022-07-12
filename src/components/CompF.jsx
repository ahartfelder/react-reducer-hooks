import { useContext } from "react"
import { CountContext } from "../App"

export default function CompF() {
    const countContext = useContext(CountContext)
    
    return (
        <>
            <h3>Component F: {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </>
    )
}