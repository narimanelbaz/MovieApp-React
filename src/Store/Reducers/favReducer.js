const INITIAL_VALUE = {
    favoriteMovies:[]
}

const addFavorite = (state = INITIAL_VALUE , action)=> {
    switch (action.type){
        case 'ADD_FAVORITE':
            return{
                ...state,
                favoriteMovies : action.payload
            }
            
            default:
                return state 
    }
}

export default addFavorite