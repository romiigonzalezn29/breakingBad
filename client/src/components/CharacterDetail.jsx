import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetails } from "../actions";
import { useEffect } from "react";

export default function CharacterDetail(props){
    console.log(props, 'detail.props')
    const dispatch = useDispatch()
   
    const myCharacter = useSelector((state=> state.detail))
    
    const {id}=useParams()

    useEffect(()=>{
        console.log('effect')
      dispatch(getDetails(id))
      
    },[dispatch])

    console.log(myCharacter)
    

    return(
        <div>
            {
            myCharacter.length>0 ?
            <div>
                <h1> {myCharacter[0].name}</h1>
                <img src = {myCharacter[0].img? myCharacter[0].img : myCharacter[0].image}/>
                <h2> Status: {myCharacter[0].status}</h2>
                <p>Nacimiento: {myCharacter[0].birthday} </p>
                <h4>Ocupaciones: {!myCharacter[0].createdDb ? myCharacter[0].occupation + ' ' : myCharacter[0].occupations.map(el => el.name + ' ') }</h4>
                
             </div> : <p> CARGANDO... </p>
        
            } 
            <Link to='/home'>
                <button> Volver </button>
            </Link>
        </div>
    )
}