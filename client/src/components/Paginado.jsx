/* import React from "react";

export default function Paginado ({charatersPerPage, allCharacters,paginado}){
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allCharacters/charatersPerPage); i++) {
        pageNumbers.push[i+1];
        
    }
    return(
        <nav>
            <ul>
            {pageNumbers && pageNumbers.map(number=>(
                <li>
                    <a onClick={()=> paginado(number)}>{number}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
} */
import React from 'react';
import style from './Paginado.module.css'
export default function Paginado ({charatersPerPage, allCharacters, paginado}){
	const pageNumbers=[]
	for (let i=1; i<=Math.ceil(allCharacters/charatersPerPage); i++ ){
		pageNumbers.push(i);
	}


return (
	<nav>
		<ul> 
			{pageNumbers && pageNumbers.map(number =>(
				<button className={style.button} key={number+100}> 
				<a onClick={()=> paginado(number)} key={number}>{number}</a> 

				</button>

				))}

		</ul> 

	</nav>
	)
}