export const subtotal = (cart) => {
    let total = cart?.reduce((acc,product) => {
     return acc+=product.price*product.amount
    },0)
    return total
}