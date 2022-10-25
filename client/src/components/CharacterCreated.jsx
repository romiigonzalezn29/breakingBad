import React, {useState,useEffect} from 'react' ;
import {Link, useHistory} from 'react-router-dom';
import {getOccupations, postCharacter} from '../actions';
import {useDispatch, useSelector} from 'react-redux';

export default function CharacterCreate() {
	const dispatch = useDispatch();
	const occupations = useSelector((state) => state.occupations)

	const [input,setInput] = useState({
		name:"",
		nickname:"",
		status:"",
		birthday:"",
        
		occupation:[]
	})

	function handleChange(e){
		setInput({
			...input,
			[e.target.name] : e.target.value
		})
		console.log("input",input)
	}
    function handleCheck(e){
        console.log("checkbox",e.target)
        if (e.target) {
            setInput({
                ...input,
                status: e.target.value
            })
        }
    }
	function handleSelect(e){
        console.log(e.target.value)
		setInput({
			...input,
			occupation: [...input.occupation ,e.target.value]
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		
		dispatch(postCharacter(input))
		alert("Character creado con exito")
		 setInput({
		 name:"",
		 resumen:"",
		 saludable:"",
		 realizado:"",
		 diets:[]
		 })
	}


	useEffect(()=> {
		dispatch(getOccupations());
	}, []);

	return(
		<div>

		<Link to='/home'> <button>Volver a home</button></Link>
		<h1>Crea tus personajes</h1>
		<form onSubmit={(e)=>handleSubmit(e)}>
			<div>
				<label>Nombre:</label>
				<input
				type="text"
				value={input.name}
				name="name"
				onChange={(e)=>handleChange(e)} 
				/>
			</div>
			<div>
				<label>Nickname:</label>
				<input 
				type="text"
				value={input.nickname}
				name="nickname"
				onChange={(e)=>handleChange(e)}
				/>
			</div>
			
			 <div>
			 <label>Birthday:</label>
			 <input
			 type="text"
			 value={input.birthday}
			 name="birthday"
			 onChange={(e)=>handleChange(e)}
			 />
			 </div>
			  <div>
			 <label>Imagen:</label>
			 <input
			 type="text" 
			 value={input.image}
			 name="image"
			 onChange={(e)=>handleChange(e)}
			 />
			 </div>
             <div>
			 <label>Status:</label>
			 <label><input
			 type="checkbox" 
			 value='alive'
			 name="alive"
			 onChange={(e)=>handleCheck(e)}
			 />Alive </label>
             <label><input
			 type="checkbox" 
			 value='deceased'
			 name="deceased"
			 onChange={(e)=>handleCheck(e)}
			 />Deceased </label>
             <label><input
			 type="checkbox" 
			 value='unknown'
			 name="unknown"
			 onChange={(e)=>handleCheck(e)}
			 />Unknown </label>
             <label><input
			 type="checkbox" 
			 value='presumed dead'
			 name="presumed dead"
			 onChange={(e)=>handleCheck(e)}
			 />Presumed dead </label>
             
			 </div>
			 <select onChange={(e)=>handleSelect(e)}>
                {occupations.map((occ) => (
                    <option key={occ.id} value={occ.name} >{occ.name}</option>
                ))}
             </select>
             <ul><li>{input.occupation.map(el => el + ", ")}</li></ul>
			  <button type='submit'>Crear personaje</button>
			 
		</form>
		 </div>

		)
}