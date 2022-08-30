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
      title: "Agregar Productos",
      description: "Aqui puede agregar productos a su tienda",
      buttom: "Agregar",
      // name : "Nombre del Producto",
      // description: "Descripcion del producto",
      // img: "Imagen URL",
      // price: "Precio del Producto",
      // stock: "Stock agregado",
      // category: "Categoria"
    },
    {
      title: "Editar Productos",
      description: "Aqui puede agregar productos a su tienda",
      buttom: "Editar",
    },
    {
      title: "Eliminar Productos",
      description: "Aqui puede agregar productos a su tienda",
      buttom: "Eliminar",
    },
    {
      title: "Usuario a Admin",
      description: "Aqui puede agregar productos a su tienda",
      buttom: "Promover",
    },
    {
      title: "Usuario a Admin",
      description: "Aqui puede agregar productos a su tienda",
      buttom: "Promover",
    },
    {
      title: "Eliminar Usuario",
      description: "Aqui puede agregar productos a su tienda",
      buttom: "Eliminar",
    },
  ];

