import { useState } from "react"
function Button({cat, onFilter}){
  const [classNm, setClassnm] = useState(false)
  return(
    <button className={classNm ? 'selected' : ''} onClick={() => {setClassnm(!classNm); onFilter(cat)}}>{cat}</button>
  )
}

export default Button 