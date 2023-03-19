import React from "react";
import { useDispatch } from "react-redux";
import Button from './Button';

import './button.css';

const SectionBtn =() => {
    
    const dispatch = useDispatch();

    const Plus = () => {
        dispatch({type: 'PLUS_COUNT', countChange: 1});
    }

    const Zero = () => {
        dispatch({type: 'ZERO_COUNT', countChange: 0});
    }

    const Minus = () => {
        dispatch({type: 'MINUS_COUNT', countChange: 1});
    }

    return(
        <section className='section__button'>
            <Button text={'Plus'} background={'#37c628'} textColor={'white'} border={'3px solid #11a501'} click={() => Plus()}/>
            <Button text={'Zero'} background={'#1fcac2'} textColor={'white'} border={'3px solid #01b1a9'} click={() => Zero()}/>
            <Button text={'Minus'} background={'#dc5151'} textColor={'white'} border={'3px solid red'} click={() => Minus()}/>
        </section>
    );
}

export default SectionBtn;