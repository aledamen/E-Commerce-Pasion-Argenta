export const subtotal = (cart) => {
    let total = cart?.reduce((acc, product) => {
        return (acc += product.price * product.amount)
    }, 0)
    return total
}

export const saveToLocalStorage = (info, string) => {
    let existCart = JSON.parse(localStorage.getItem('cart'))
    let newCart = verifyIncludeInLocalStorage(existCart, info, string)
    if (newCart) return localStorage.setItem('cart', JSON.stringify(newCart))
    let data = { ...info, amount: 1 }
    let cart = []
    cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(data)
    localStorage.setItem('cart', JSON.stringify(cart))
}

const verifyIncludeInLocalStorage = (cart, info, string) => {
    if (cart?.filter((product) => product._id === info._id).length) {
        let newProduct = cart?.filter((product) => {
            if (product._id === info._id) return product
        })
        if (string === 'add') {
            newProduct.length &&
                cart.splice(cart.indexOf(newProduct[0]), 1, { ...newProduct[0], amount: newProduct[0]?.amount + 1 })
        } else if (string === 'reduce') {
            newProduct.length &&
                cart.splice(cart.indexOf(newProduct[0]), 1, { ...newProduct[0], amount: newProduct[0]?.amount - 1 })
        } else if (string === 'remove') {
            newProduct.length && cart.splice(cart.indexOf(newProduct[0]), 1)
        }
        return cart
    }
}

export const userOptions = [
    {
        title: 'Mi carrito',
        description: 'Tenga acceso a su carrito de compras',
        buttom: 'cart',
        name: 'Carrito',
    },
    {
        title: 'Mis favoritos',
        description: 'Tenga acceso a sus productos favoritos',
        buttom: 'favorites',
        name: 'Favoritos',
    },
    {
        title: 'Mis ordenes',
        description: 'Tenga acceso a sus ordenes creadas',
        buttom: 'orders',
        name: 'Ordenes',
    },
]

export const adminOptions = [
    {
        title: 'Crear Productos',
    },
    {
        title: 'Editar Productos',
    },
    {
        title: 'Eliminar Productos',
    },
    {
        title: 'Opciones de Usuarios',
    },
    {
        title: 'Ver Ordenes',
    },
]
