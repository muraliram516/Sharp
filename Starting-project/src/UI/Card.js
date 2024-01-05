import React from "react";
import './Card.module.css'
const Card = (props) => {
    return<div className={`${classes.Card} ${props.cssClass} `}>{props.children}</div>;
};

export default Card;    