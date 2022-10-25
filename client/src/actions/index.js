import axios from 'axios';

export function getCharacters(){
    return async function(dispatch){
        let json = await axios ('http://localhost:3001/characters',{

        })
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: json.data
        })
    }
}
 export function getNameCharacter(name){
    return async function(dispatch){
        try {
            let json = await axios ('http://localhost:3001/characters?name=' + name)
return dispatch({
    type : 'GET_NAME_CHARACTERS',
    payload: json.data
})
        } 
       catch (error) {
        console.log(error)
        }
 }
}

export function getOccupations(){
    return async function(dispatch) {
        try {
            let json = await axios('http://localhost:3001/occupations',{

            })
            return dispatch({
                type: 'GET_OCCUPATIONS',
                payload: json.data
        })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postCharacter(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/character', payload)
    console.log(response)
    return response;
    }
}

export function filterByStatus(payload){
    
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
}

export function filterCreated(payload){

    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function filterByName(payload){
	console.log('action', payload)
		return  {
			type: 'FILTER_BY_NAME',
			payload
		}
	
}

export function getDetails(id){
    console.log('me llaman detail')
        return async function (dispatch){
            try {
                var json = await axios.get(`http://localhost:3001/characters/${id}`)
                
                return dispatch({
                type: 'GET_DETAILS' ,
                payload: json.data
            })
            } catch (error) {
                console.log(error);
            }
            }
        }
