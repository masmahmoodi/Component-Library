import React from "react";
import img from "../../assets/Image.png"
// TestimonialsWithImg component
export default function TestimonialsWithImg(){
    return (
        <div className="testimonial">
            <div className="testimonial-img"><img src={img} alt="" /></div>
            <div className="testimonial-info">
                <div><i class="fa-solid fa-quote-left"></i></div>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </h4>
                <h5>May Andersons</h5>
                <h6>Workcation, CTO</h6>
            </div>
        </div>
    )
}