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
export const userOptions = [
  {
    title: "Mi carrito",
    description: "Tenga acceso a su carrito de compras",
    buttom: "cart",
  },
  {
    title: "Mis favoritos",
    description: "Tenga acceso a sus productos favoritos",
    buttom: "favorites",
  },
  {
    title: "Mis ordenes",
    description: "Tenga acceso a sus ordenes creadas",
    buttom: "Ordenes",
  }
];


export const adminOptions = [
    {
      title: "Crear Productos",
    },
    {
      title: "Editar Productos"
    },
    {
      title: "Eliminar Productos"
    },
    {
      title: "Usuario a Admin"
    },
    {
      title: "Usuario a Admin"
    },
    {
      title: "Eliminar Usuario"
    },
  ];

