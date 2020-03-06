import Wheels from '../../data/dummyData'
import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/Wheels'
import WheelDetail from '../../screens/inventory/WheelDetail';
import Wheel from '../../models/Wheel'

const initialState = {
    availableWheels: Wheels,
    userWheels: Wheels
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (CREATE_PRODUCT):
            const newWheel = new Wheel(new Date().toString(),
                action.product_data.hollander,
                action.product_data.location,
                action.product_data.size,
                action.product_data.boltPattern,
                action.product_data.title,
                action.product_data.imageUrl);
            return {
                ...state,
                availableWheels: state.availableWheels.concat(newWheel),
                userWheels: state.userWheels.concat(newWheel)
            }
        case (UPDATE_PRODUCT):
            const productIndex = state.userWheels.findIndex(
                prod => prod.id === action.pid
            );
            const updateProduct = new Wheel(
                action.pid,
                action.product_data.hollander,
                action.product_data.location,
                action.product_data.size,
                action.product_data.boltPattern,
                action.product_data.title,
                action.product_data.imageUrl);

            const updateUserWheels = [...state.userWheels];
            updateUserWheels[productIndex] = updateProduct;
            const availableWheelIndex = state.availableWheels.findIndex(
                prod => prod.id === action.pid
            )

            const updateAvailablewheels = [...state.availableWheels];
            updateAvailablewheels[availableWheelIndex] = updateProduct;

            return {
                ...state,
                availableWheel: updateAvailablewheels,
                userWheels: updateAvailablewheels
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                userWheels: state.userWheels.filter(
                    product => product.Id !== action.pid
                ),
                availableWheel: state.availableWheels.filter(
                    product => product.Id !== action.pid
                ),
            }

    }
    return state;
}