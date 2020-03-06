import { ADD_TO_RED_LINE} from '../actions/RedLine'
import RedLineProduct from '../../models/RedLineProduct'

const initialState ={
    items:{}
};

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_RED_LINE:
            const addedProduct = action.product;
            const prodTitle = addedProduct.title;
            const prodHollander = addedProduct.hollander;

            if(state.items[addedProduct.id]){
                
                const updateRedLineItem = new RedLineProduct(
                state.items[addedProduct.id].quantity + 1,
                prodTitle,
                prodHollander
                );
                return{
                    ...state,
                    items: {...state.items, [addedProduct.id]: updateRedLineItem}
                };
            }
            else{
                const newRedLineProduct = new RedLineProduct(1, prodTitle, prodHollander);
                return{
                    ...state,
                    items : { ...state.items, [addedProduct.id]: newRedLineProduct}
                };
            }
    }
    return state;
}