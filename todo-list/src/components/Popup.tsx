import React from 'react'

const  Popup = (props:any) => {
  return (props.trigger) ?  (
    <div>
        
        {props.children}
    </div>
  ) : ""
}

export default Popup