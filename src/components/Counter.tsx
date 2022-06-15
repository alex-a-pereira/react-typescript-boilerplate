import { useState } from 'react'

import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <h3 className='the-heading'>Update the count and edit src/App.tsx, state is preserved!!!</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  )
}

export default Counter;
