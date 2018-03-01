import { combineReducers } from "redux";
import sampleReducler from './sample'


const rootReducer = combineReducers({
    bookList : sampleReducler,
});

export default rootReducer;