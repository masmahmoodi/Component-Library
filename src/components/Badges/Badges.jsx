import React from "react"
import classnames from "classnames"

export default function Badges({children,color,txtColor,shape}){
    const colorShape = `${color}-${shape}`
    // const allClassNames = classnames("badges",colorShape)
    const styles ={
        backgroundColor: color,
        borderRadius: shape ==="pill" ? "5px" : "0px",
        color: txtColor
    }
    return (
        <div className="badges" style={styles}>
            {children}
        </div>
    )
}