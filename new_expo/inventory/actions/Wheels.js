export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = productId =>{
    return{
        type: DELETE_PRODUCT, pid: productId
    };
};

export const createProduct = (id, hollander, location, size, boltPattern, title, imageUrl)=>{
    return{
        type: CREATE_PRODUCT,
        product_data:{
            hollander,
            location,
            size,
            boltPattern,
            title,
            imageUrl
        }
    }
}

export const updateProduct = (hollander, location, size, boltPattern, title, imageUrl)=>{
    return{
        type: CREATE_PRODUCT,
        pid: id,
        product_data:{
            hollander,
            location,
            size,
            boltPattern,
            title,
            imageUrl
        }
    }
}