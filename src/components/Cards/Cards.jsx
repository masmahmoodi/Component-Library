import React from "react"


export default function Cards({children,card_title}){
    return (
       <div className="card">
        <div className="icon-wrapper"><i class="fa-solid fa-cloud-arrow-down"></i></div>
        <h3>{card_title}</h3>
        <p>{children}</p>
       </div>
    )
}