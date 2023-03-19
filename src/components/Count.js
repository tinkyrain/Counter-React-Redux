import React from "react";
import SectionBtn from "./SectionBtn"; 
import { useSelector } from "react-redux";

import './count.css';


function Count(){

    const valCount = useSelector(state => state.count);

    return(
        <section className='count__section'>
            <h1 className='count__value'>{valCount}</h1>
            <SectionBtn/>
        </section>
    );
}

export default Count;