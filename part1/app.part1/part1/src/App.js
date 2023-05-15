import { useState } from 'react'

const Display = props => <div>{props.value}</div>


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => setValue(0)

  return (
    <div>
      <Display value={value} />
      <Button handleClick={handleClick}
        text="reset to zero" />
    </div>
  )
}

export default App