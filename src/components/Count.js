import React from "react";
import Button from './Button';

import './count.css';

function Count(){
    return(
        <section class='count__section'>
            <h1 class='count__value'>0</h1>

            <section class='section__button'>
                <Button text={'Plus'} background={'#37c628'} textColor={'white'} borderColor={'3px solid #11a501'}/>
                <Button text={'Zero'} background={'#1fcac2'} textColor={'white'} borderColor={'3px solid #01b1a9'}/>
                <Button text={'Minus'} background={'#dc5151'} textColor={'white'} borderColor={'3px solid red'}/>
            </section>

        </section>
    );
}

export default Count;