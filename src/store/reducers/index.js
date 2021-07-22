import {GET_SLOTS,} from '../actions/index';

const initialState = {
    currentSlots: [],
};
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_SLOTS: 
        return {
            ...state,
            currentSlots: action.payload
             
        }
    
       default:
           return {
               ...state,
           }

    }
    
}
export default reducer;
