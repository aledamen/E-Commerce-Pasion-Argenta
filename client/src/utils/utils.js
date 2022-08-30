export const subtotal = (cart) => {
    let total = cart?.reduce((acc,product) => {
     return acc+=product.price*product.amount
    },0)
    return total
}

export const saveToLocalStorage = (info) => {
    let data = { ...info, amount: 1 }
    let cart = []
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(data)
    localStorage.setItem('cart', JSON.stringify(cart));
}