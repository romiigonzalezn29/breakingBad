import React from "react"
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCharacters, filterByStatus, filterCreated, filterByName } from "../actions"
import Card from "./Card"
import SearchBar from "./SearchBar"
import Paginado from "./Paginado" 
import style from './Home.module.css'
import s from './Card.module.css'
export default function Home () {

    const dispatch = useDispatch()
    const allCharacters = useSelector((state)=> state.characters)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage, setCharactersPerPage] = useState(6)
    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = allCharacters.slice(indexOfFirstCharacter,indexOfLastCharacter)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        dispatch(getCharacters())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCharacters())
    }

    function handleStatus(e){
        dispatch(filterByStatus(e.target.value))
    }
    function handleCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleName(e){
        e.preventDefault();
        dispatch(filterByName(e.target.value));
        setCurrentPage(1);
        setOrden(`ordenado ${e.target.value}`)
    }
    return (
        <div>
            <Link to = '/character'>
                <button className={style.button}>
                    Crear Personaje
                </button>
            </Link>
            <h3 className={style.title}> Home</h3>
            <button className={style.button} onClick={e=> {handleClick(e)}}>Recargar personajes</button>
            <SearchBar/>
            <div>
                <select className={style.select} onChange={e=> handleName(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>
                <select className={style.select} onChange={e=> handleStatus(e)}>
                    <option value='All'>Todos</option>
                    <option value='Alive'>Vivo</option>
                    <option value='Deceased'>Muerto</option>
                    <option value='Unknown'>Desconocido</option>
                    <option value='Presumed dead'>Probablemente muerto</option>
                </select>
                <select className={style.select} onChange={e=> handleCreated(e)}>
                    <option value='All'>Todos</option>
                    <option value='created'>Creados</option>
                    <option value='api'>Existente</option>
                </select>
                <Paginado
                charatersPerPage={charactersPerPage}
                allCharacters={allCharacters.length}
                paginado = {paginado} />
                <div className={s.card}>
                {
                    currentCharacters?.map((c)=> {
                        return (
                            <div  key={c.id}>
                                <Link to={'/home/' + c.id}>
                                    <Card name={c.name} img={c.img} nickname={c.nickname}/>
                                </Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>

    )
}