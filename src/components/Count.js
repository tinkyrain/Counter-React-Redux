import React from "react";
import SectionBtn from "./SectionBtn"; 

import './count.css';

function Count(){
    return(
        <section className='count__section'>
            <h1 className='count__value'>0</h1>
            <SectionBtn/>
        </section>
    );
}

export default Count;