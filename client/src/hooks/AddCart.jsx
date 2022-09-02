import { useDispatch } from 'react-redux'
import { addToCart, sendMe } from '../store/user'

const AddCart = (productId) => {
    const dispatch = useDispatch()
    dispatch(addToCart({ pid: productId, amount: 1 })).then(() => dispatch(sendMe()))
    return
}

export default AddCart
