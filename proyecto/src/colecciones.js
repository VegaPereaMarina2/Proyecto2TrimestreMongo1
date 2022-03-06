db.restaurante.drop()
db.restaurante.insertMany([
    {_id: 1, 
        nombrePlato: "Ensalada clásica", 
        precio: 7,  
        nutricion: {calorias:260, carbohidratos:3, grasa:0.28, proteina:1.11 }, 
        ingredientes:[{idIngr:12, gramos:30}, 
                    {idIngr:3, gramos:10}, 
                    {idIngr:7, gramos:50}],  
        idCategoria:[4],
        vegano: true,
    },  
    {_id: 2, nombrePlato: "Bocadillo de calamares al estilo Martina", precio:11,  nutricion: {calorias:550, carbohidratos:8, grasa:1.5, proteina:16 }, 
    ingredientes:[{idIngr:18, gramos:50}, {idIngr:7, gramos:25}, {idIngr:3, gramos:60}], idAlergenos: [4, 1, 13],
    idCategoria:[1],
    vegano: false, 
    },
    {_id: 3, nombrePlato: "Langostinos", precio:10,  nutricion: {calorias:450, carbohidratos:0, grasa:0.8, proteina:24.8 }, 
    ingredientes:[{idIngr:13, gramos:50}], idAlergenos: [2, 13],
    idCategoria:[3],
    vegano: false,
    },
       
    {_id: 4, nombrePlato: "Entrecot de ternera", precio:18.5,  nutricion: {calorias:900, carbohidratos:0, grasa:7, proteina: 20}, 
    ingredientes:[{idIngr:8, gramos:60}, {idIngr:10, gramos:30}, {idIngr:2, gramos:10}], idAlergenos: [],
    idCategoria:[2],
    vegano: false,
    },
       
    {_id: 5, nombrePlato: "Carrillada", precio:15,  nutricion: {calorias:650, carbohidratos:0, grasa:6.2, proteina:20 }, 
    ingredientes:[{idIngr:17, gramos:30}, {idIngr:16, gramos:10}, {idIngr:14, gramos:10}], idAlergenos: [12],
    idCategoria:[2],
    vegano: false,
    },
       
    {_id: 6, nombrePlato: "bocadeillo de pulpo a la brasa", precio: 18.50,  nutricion: {calorias:510, carbohidratos:0, grasa:1.5, proteina:18 }, 
    ingredientes:[{idIngr:11, gramos:30}, {idIngr:7, gramos:20}, {idIngr:14, gramos:10}], idAlergenos: [7, 13],
    idCategoria:[1],
    vegano: false,
    },
       
    {_id: 7, nombrePlato: "Puchero Clásico", precio:9,  nutricion: {calorias:400, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{idIngr:8, gramos:30}, {idIngr:9, gramos:20}, {idIngr:10, gramos:10}], idAlergenos: [],
    idCategoria:[2],
    vegano: false,
    },
       
    {_id: 8, nombrePlato: "Sorbete de limón", precio:5,  nutricion: {calorias:110, carbohidratos:25, grasa:0, proteina:0 }, 
    ingredientes:[{idIngr:15, gramos:30}, {idIngr:19, gramos:50}], idAlergenos: [],
    idCategoria:[4],
    vegano: true,
    },
       
    {_id: 9, nombrePlato: "Salmorejo andaluz", precio:5,  nutricion: {calorias:400, carbohidratos:6.2, grasa:5.1, proteina: 10}, 
    ingredientes:[{idIngr:3, gramos:30}, {idIngr:6, gramos:25}, {idIngr:14, gramos:50}, {idIngr:1, gramos:30}], idAlergenos: [1],
    idCategoria:[4],
    vegano: true,
    },
    {_id: 10, nombrePlato: "Hummus de garbanzos con nachos", precio:10,  nutricion: {calorias:200, carbohidratos:4.1, grasa:3, proteina: 16}, 
    ingredientes:[{idIngr:20, gramos:50}, {idIngr:6, gramos:40}, {idIngr:15, gramos:45}, {idIngr:5, gramos:12}], idAlergenos: [11],
    idCategoria:[4],
    vegano: true,
    },
    {_id: 11, nombrePlato: "legumbre con carrillera", precio:12,  nutricion: {calorias:400, carbohidratos:3.2, grasa:2, proteina:19 }, 
    ingredientes:[{idIngr:17, gramos:10}, {idIngr:20, gramos:20}, {idIngr:7, gramos:40}, {idIngr:8, gramos:17}, {idIngr:6, gramos:10}], idAlergenos: [7, 8, 12],
    idCategoria:[2, 4],
    vegano: false,
    },
    {_id: 12, nombrePlato: "Flor de loto", precio:20,  nutricion: {calorias:240, carbohidratos:21, grasa:8.6, proteina: 4}, 
    ingredientes:[{idIngr:21, gramos:20}, {idIngr:22, gramos:10}], idAlergenos: [],
    idCategoria:[4],
    vegano: true,
    },
    {_id: 13, nombrePlato: "Puchero Gaditano", precio:11,  nutricion: {calorias:200, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{idIngr:8, gramos:21}, {idIngr:9, gramos:20}, {idIngr:10, gramos:10}, {idIngr:1, gramos:5}, {idIngr:14, gramos:10}],
    idCategoria:[2, 4],
    vegano: false,
    },
    {_id: 14, nombrePlato: "Puchero Andaluz con Pringá", precio:10,  nutricion: {calorias:230, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{idIngr:8, gramos:20}, {idIngr:9, gramos:20}, {idIngr:10, gramos:10}, {idIngr:20, gramos:15}], idAlergenos: [7],
    idCategoria:[2, 4],
    vegano: false,
    },
    {_id: 15, nombrePlato: "Un puchero paraguayo", precio:9,  nutricion: {calorias:290, carbohidratos:0.8, grasa:3.6, proteina: 19}, 
    ingredientes:[{idIngr:8, gramos:25}, {idIngr:9, gramos:20}, {idIngr:10, gramos:10}, {idIngr:3, gramos:10}], idAlergenos: [8, 7],
    idCategoria:[2, 4],
    vegano: false,
    },   
    {_id: 16, nombrePlato: "Bacalado dorado", precio:12,  nutricion: {calorias:230, carbohidratos:0.5, grasa:1.6, proteina: 10}, 
    ingredientes:[{idIngr:8, gramos:25}, {idIngr:7, gramos:20}, {idIngr:23, gramos:10}, {idIngr:24, gramos:10}], idAlergenos: [3, 7],
    idCategoria:[3],
    vegano: false,
    },   
    
       
])

db.categoria.drop()
db.categoria.insertMany([
    {
        idCategoria: 1,
        nombreCat: "Bocadillos",
        precioAdd: 1.30
    },

    {idCategoria: 2, nombreCat: "Carnicos", precioAdd: 1.55},
    {idCategoria: 3, nombreCat: "Pescados", precioAdd: 1.70},
    {idCategoria: 4, nombreCat: "Vegetales", precioAdd: 1.30},
])

db.alergenos.drop()
db.alergenos.insertMany([
    {
        idAlergenos: 1,
        alergeno: "Gluten"
    },

    {idAlergenos: 2, alergeno: "Crustáceos"}, 
    {idAlergenos: 3, alergeno: "Huevos"},
    {idAlergenos: 4, alergeno: "Pescado"},
    {idAlergenos: 5, alergeno: "Cacahuetes"},
    {idAlergenos: 6, alergeno: "Soja"},
    {idAlergenos: 7, alergeno: "Lácteos"},
    {idAlergenos: 8, alergeno: "Frutos de cascara"},
    {idAlergenos: 9, alergeno: "Apio"}, 
    {idAlergenos: 10, alergeno: "Mostaza"},
    {idAlergenos: 11, alergeno: "Granos de sesamo"},
    {idAlergenos: 12, alergeno: "Sulfitos"},
    {idAlergenos: 13, alergeno: "Moluscos"},
    {idAlergenos: 14, alergeno: "Altramuces"},
])

db.ingredientes.drop()
db.ingredientes.insertMany([
    {
        idIngr: 1,
        nombreIng: "Pan",
        precioCompra: 2.10,
        fechaCaducidad: new Date("2022-03-26")
    },

    {idIngr: 2, nombreIng: "Entrecot", precioCompra: 40, fechaCaducidad: new Date("2022-05-12")},
    {idIngr: 3, nombreIng: "Tomate", precioCompra: 1.30, fechaCaducidad: new Date("2022-03-21")},
    {idIngr: 4, nombreIng: "Pimiento", precioCompra: 1.55, fechaCaducidad: new Date("2022-03-30")},
    {idIngr: 5, nombreIng: "Yogurt", precioCompra: 6.70, fechaCaducidad: new Date("2022-05-27")},
    {idIngr: 6, nombreIng: "Ajo", precioCompra: 2.10, fechaCaducidad: new Date("2022-04-16")},
    {idIngr: 7, nombreIng: "Cebolla", precioCompra: 1.3, fechaCaducidad: new Date("2022-04-01")},
    {idIngr: 8, nombreIng: "Patata", precioCompra: 0.70, fechaCaducidad: new Date("2022-03-15")},
    {idIngr: 9, nombreIng: "Costillas", precioCompra: 25, fechaCaducidad: new Date("2022-05-17")},
    {idIngr: 10, nombreIng: "Pimiento", precioCompra: 3.10, fechaCaducidad: new Date("2022-04-21")},
    {idIngr: 11, nombreIng: "Pulpo", precioCompra: 35, fechaCaducidad: new Date("2022-06-12")},
    {idIngr: 12, nombreIng: "Lechuga", precioCompra: 0.90, fechaCaducidad: new Date("2022-03-25")},
    {idIngr: 13, nombreIng: "Langostinos", precioCompra: 20, fechaCaducidad: new Date("2022-09-30")},
    {idIngr: 14, nombreIng: "Perejil", precioCompra: 1.15, fechaCaducidad: new Date("2023-05-19")},
    {idIngr: 15, nombreIng: "Limón", precioCompra: 4.89, fechaCaducidad: new Date("2022-03-26")},
    {idIngr: 16, nombreIng: "Setas", precioCompra: 15.75, fechaCaducidad: new Date("2022-06-26")},
    {idIngr: 17, nombreIng: "Carrillera", precioCompra: 40, fechaCaducidad: new Date("2022-04-15")},
    {idIngr: 18, nombreIng: "Calamares", precioCompra: 14.90, fechaCaducidad: new Date("2022-04-13")},
    {idIngr: 19, nombreIng: "Hielo", precioCompra: 2.30, fechaCaducidad: new Date("2022-03-26")},
    {idIngr: 20, nombreIng: "Garbanzos", precioCompra: 3.30, fechaCaducidad: new Date("2022-04-26")},
    {idIngr: 21, nombreIng: "Chocolate", precioCompra: 7.30, fechaCaducidad: new Date("2023-04-27")},
    {idIngr: 22, nombreIng: "Galleta", precioCompra: 3.30, fechaCaducidad: new Date("2022-05-26")},
    {idIngr: 23, nombreIng: "Huevos", precioCompra: 5.30, fechaCaducidad: new Date("2022-03-26")},
    {idIngr: 24, nombreIng: "Nata", precioCompra: 7.30, fechaCaducidad: new Date("2023-02-26")}
])