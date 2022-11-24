import React from "react";
import styles from './Card.module.css' 
export default function Card({name, img, nickname}) {
    return (
        <div >
            <h3 className={styles.title}>{name}</h3>
            <h5 >{nickname}</h5>
            <img className={styles.img} src={img} alt='img not found' width='200px' height='250px' />
        </div>
    )
}