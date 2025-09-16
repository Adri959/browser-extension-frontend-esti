import { useState } from "react"

const ToggleSwitch = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <div onClick={()=>setToggle(!toggle)} 
    className={toggle ? "toggleSwitch on" : "toggleSwitch"}>
        <div></div>
    </div>
  )
}

export default ToggleSwitch