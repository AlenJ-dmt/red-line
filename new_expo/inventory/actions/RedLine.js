export const ADD_TO_RED_LINE = 'ADD_TO_RED_LINE';

export const addToRedLine = product =>{
    return{
        type: ADD_TO_RED_LINE, 
        product: product
    }
}