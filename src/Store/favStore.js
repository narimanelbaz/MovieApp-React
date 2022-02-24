import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  addFavorite from './Reducers/favReducer'


 const store = createStore(addFavorite, composeWithDevTools())

export default store