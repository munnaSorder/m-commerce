
import { cartSlice } from '../cartSlice/cartSlice'
const { actions: slice } = cartSlice;


// login actions
export const cartAction = (data) => (dispatch) => {
    dispatch(slice.setCart(data))
}
