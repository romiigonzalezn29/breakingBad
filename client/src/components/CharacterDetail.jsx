import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetails } from "../actions";
import { useEffect } from "react";

export default function CharacterDetail(props){
    
    const dispatch = useDispatch()
   
    const myCharacter = useSelector((state=> state.detail))
    
    const {id}=useParams()

    useEffect(()=>{
        
      dispatch(getDetails(id))
      
    },[dispatch])

    console.log( myCharacter.occupation)
    

    return(
        <div>
            {
            
            <div>
                <h1> {myCharacter.name}</h1>
                <img src = {myCharacter.img? myCharacter.img : myCharacter.image}/>
                <h2> Status: {myCharacter.status}</h2>
                <p>Nacimiento: {myCharacter.birthday} </p>
                <h4>Ocupaciones: {!myCharacter.createdDb ? ( myCharacter.occupation + ' ' ) : myCharacter.occupation.map(el => el.name + ' ') }</h4>
                
            
                </div>
            } 
            <Link to='/home'>
                <button> Volver </button>
            </Link>
        </div>
        
    )
}