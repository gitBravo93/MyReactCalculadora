import React from "react";
import "../hojas-style/botonclear.css"

const BotonClear = (props) => (

    <div 
      className="boton-clear" 
      onClick={props.manejarclear}>
      {props.children}
    </div>
)

export default BotonClear;