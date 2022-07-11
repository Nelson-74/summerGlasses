const products = [
    {id: 0,category:"sol", title: "Lentes Aviador",description: "Lentes de sol tornasolados",price: 15000 ,image:"../..assets/lentes-Aviador.png",qty:5},
    {id: 1,category:"sol", title: "Lentes Ryban",description: "Lentes oscuros para sol",price: 23000 ,image:"../..assets/lentes-RayBan.png",qty:2},
    {id: 2,category:"sport", title: "Lentes Sport",description: "Lentes para ciclistas",price: 13000 ,image:"../..assets/lentes-Sport.png",qty:8},
    {id: 3,category:"sol", title: "Lentes conductor",description: "Lentes para conducir",price: 17000 ,image:"../..assets/lentes-Conductor.png",qty:10},
    {id: 4,category:"sport", title: "Lentes de sol para niños",description: "Lentes deportivos para niños",price: 9600,image:"../..assets/lentes-SolNiños.png",qty:3},
    {id: 5,category:"lectura", title: "Lentes de Lectura",description: "Lentes para lectura con marcos de colores",price: 12500 ,image:"../..assets/lentes-Lectura.png",qty:15},
    {id: 6, category:"lectura",title: "Lentes lectura ",description: "Lentes de lectura para niños",price: 4700 ,image:"../..assets/lentes-LecturaNiños.png",qty:9},
    {id: 7,category:"contactología", title: "Lentes de contacto",description: "Lentes de contacto flexibles",price: 7900,image:"../..assets/lentes-Contacto.png",qty:11},
    {id: 8, category:"limpieza",title: "Liquido para lentes",description: "Solución multipropósitos",price: 1400 ,image:"../..assets/lentes-Solucion.png",qty:6}
];
export const getProducts =()=>{
    return new Promise((resolve) => {
        setTimeout(()=> {resolve(products)},500)
    })
        
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
export const getProductById =(productsId)=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        }, 500)
    })
}