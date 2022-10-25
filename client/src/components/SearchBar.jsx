
import React  from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNameCharacter } from '../actions';
import style from './SearchBar.module.css'




 export default function SearchBar () {
	const dispatch = useDispatch()
	const [name,setName] = useState("")
	


	function handleInputChange(e){
		e.preventDefault()
		setName(e.target.value)
		console.log(name)
	}
	function handleSubmit(e) {
		e.preventDefault()
		dispatch(getNameCharacter(name))
	}
	

	return  (
		
		<div >

			<input className={style.input} type='text' 
			placeholder= 'Buscar...'
			onChange  = {(e)=> handleInputChange(e)}/>
			<button className={style.button} type='submit' onClick = {(e)=>handleSubmit(e)}>Buscar</button>

		 	</div>
			
			 
		
		)
} 