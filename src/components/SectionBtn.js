import React from "react";
import Button from './Button';

import './button.css';

const SectionBtn =() => {
    return(
        <section className='section__button'>
            <Button text={'Plus'} background={'#37c628'} textColor={'white'} border={'3px solid #11a501'}/>
            <Button text={'Zero'} background={'#1fcac2'} textColor={'white'} border={'3px solid #01b1a9'}/>
            <Button text={'Minus'} background={'#dc5151'} textColor={'white'} border={'3px solid red'}/>
        </section>
    );
}

export default SectionBtn;