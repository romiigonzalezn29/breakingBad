import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'
export default function LandingPage()  {
return (
    <div >
        <h1 className={style.title}>
            Characters of Breaking Bad
        </h1>

        <Link to='/home'>
            <button className={style.button}> Ingresar </button>
        </Link>
    </div>
)
}