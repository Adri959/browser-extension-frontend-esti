import { useState } from "react"

const ToggleSwitch = (props) => {

  const [toggle, setToggle] = useState(props.isActive)

  return (
    <div onClick={()=>setToggle(!toggle)} 
    className={toggle ? "toggleSwitch on" : "toggleSwitch"}>
        <div></div>
    </div>
  )
}

export default ToggleSwitch