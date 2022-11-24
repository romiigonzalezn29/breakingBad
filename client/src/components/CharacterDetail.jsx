import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetails } from "../actions";
import { useEffect } from "react";

import style from './CharacterDetail.module.css'
export default function CharacterDetail(props){
    
    const dispatch = useDispatch()
   
    const myCharacter = useSelector((state=> state.detail))
    
    const {id}=useParams()

    useEffect(()=>{
        
      dispatch(getDetails(id))
      
    },[dispatch])

    
    

    return(
        
        <div className={style.card}>
            { myCharacter.name ?
            
            <div className={style.div}>
                <div> 
                <img className={style.img} src = {myCharacter.img? myCharacter.img : myCharacter.image}/>
                </div>
                <div className={style.info}> 
                <h1>{myCharacter.name}</h1>
                <div className={style.descripcion}> 
                <h2> Status: {myCharacter.status}</h2>
                
                <h4>Ocupaciones: {!myCharacter.createdDb ? ( myCharacter.occupation + ' ' ) : myCharacter.occupation.map(el => el.name + ' ') }</h4>
                <h4>Nacimiento: {myCharacter.birthday} </h4>
                </div>
                <div className={style.espacioBoton} >
                <Link to='/home'>
                <button className={style.button}> Volver </button>
            </Link>
            </div>
                </div>
               
                </div> 
                :
                <div >
                <h1> Cargando...</h1>
                <img className={style.cargando} src="https://acegif.com/wp-content/uploads/loading-96.gif" alt="cargando"/>
                </div>
            } 
            
        </div>
        
    )
}