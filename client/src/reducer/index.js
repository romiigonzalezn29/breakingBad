

const initialState = {
	characters : [],
	allCharacters: [],
	occupations: [],
	detail: []
}

function rootReducer (state= initialState, {type , payload}) {
	switch(type) {
		case 'GET_CHARACTERS':
			return{
				...state,
				characters: payload,
				allCharacters: payload
			}
		case 'GET_NAME_CHARACTERS' :
			return {
				...state,
				characters: payload,
			}
		case 'GET_OCCUPATIONS' :
			return {
				...state,
				occupations : payload
			}
		case 'POST_CHARACTERS':
			return {
				...state
			}

		case 'FILTER_BY_STATUS':
			const allCharacters = state.allCharacters
			const statusFilter = payload === 'All'? allCharacters : allCharacters.filter(el => el.status === payload)
			return {
				...state,
				characters: statusFilter
			}
		
		case 'FILTER_CREATED':
			const allCharacters2 = state.allCharacters
			const createdFilter = payload === 'created'? allCharacters2.filter(el => el.createdInDb) : allCharacters2.filter(el => !el.createdInDb);
			return {
				...state,
				characters: payload === 'All'? state.allCharacters : createdFilter
			}

			case 'FILTER_BY_NAME':
				console.log('reducer', payload)
				let sortedArr = payload === 'asc' ?
				state.characters.sort(function(a,b) {
					if (a.name  > b.name) {
						return 1;
					}
					if (b.name > a.name) {
						return  -1; 
	
					}
					return 0
				}) :
				state.characters.sort(function(a,b) {
					if (a.name  > b.name) {
						return -1;
					}
					if (b.name > a.name) {
						return  1; 
	
					}
					return 0
				})
				return {
					...state,
					characters: sortedArr
				}
			case 'GET_DETAILS' :
				console.log(payload)
				return {
					...state,
					detail: payload
				}
			default: 
			return state;
		
	}
		

}




export default rootReducer; 