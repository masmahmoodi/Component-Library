import React from "react"

export default function Banners({icon, state,txt,backgroundColor,txtColor,icon_color}){
  const  styles = {
        backgroundColor: backgroundColor,
        color: txtColor,
    
    }
    return (
     <div className="b1">
       <div className="banner"  style={styles}>
           <div className="banner-info">
             <span dangerouslySetInnerHTML={{ __html: icon }}  style={{color:icon_color}}/>
             {/* <i class="fa-solid fa-circle-check"></i> */}
            <div>
                <span>{state}!</span>
                <p> {txt} </p>
            </div>
           </div>
       </div>
     </div>
    )
}