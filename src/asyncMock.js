const products = [
    {id: 0,category:"sol", title: "Lentes Aviador",description: "Lentes de sol tornasolados",price: 15000 ,img:"../assets/LentesAviador.png",stock:5},
    {id: 1,category:"sol", title: "Lentes Ryban",description: "Lentes oscuros para sol",price: 23000 ,img:"../assets/LentesRayBan.png",stock:2},
    {id: 2,category:"sport", title: "Lentes Sport",description: "Lentes para ciclistas",price: 13000 ,img:"../assets/LentesSport.png",stock:8},
    {id: 3,category:"sol", title: "Lentes conductor",description: "Lentes para conducir",price: 17000 ,img:"../assets/lentesConductor.png",stock:10},
    {id: 4,category:"sport", title: "Lentes de sol para niños",description: "Lentes deportivos para niños",price: 9600,img:"../assets/lentesSolNiños.png",stock:3},
    {id: 5,category:"lectura", title: "Lentes de Lectura",description: "Lentes para lectura con marcos de colores",price: 12500 ,img:"../assets/lentesLectura.png",stock:15},
    {id: 6, category:"lectura",title: "Lentes lectura ",description: "Lentes de lectura para niños",price: 4700 ,img:"../assets/lentesLecturaNiños.png",stock:9},
    {id: 7,category:"contactología", title: "Lentes de contacto",description: "Lentes de contacto flexibles",price: 7900,img:"../assets/lentesContacto.png",stock:11},
    {id: 8, category:"limpieza",title: "Liquido para lentes",description: "Solución multipropósitos",price: 1400 ,img:"../assets/solucionLentes.png",stock:6}
];
export const getProducts =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {resolve(products)},500)
    })
        
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}