/*
1ª Consuta:
    Obtener el coste de elaboración de cada plato ordenados de más caro a más barato. 
*/

db.restaurante.aggregate([
    {
        $unwind: "$ingredientes"
    },{
        $lookup: {
            from: "ingredientes",
            localField: "ingredientes.idIngr",
            foreignField: "idIngr",
            as: "composicion"
        }
    } , {
        $set: {
            precioIngrediente: {$arrayElemAt: ["$composicion.precioCompra", 0]}
        }
    },{
        $project: {
            _id: 0,
            nombrePlato: "$nombrePlato",
            precioIngrediente: 1,
            precioTotalIngrediente: {$round: {$multiply: ["$ingredientes.gramos", "$precioIngrediente"]}},
        }
    },{
        $group: {
            _id: "$nombrePlato",
            costeElaboracion: {$sum: "$precioTotalIngrediente"}
        }
    },{
        $sort: {
            costeElaboracion: -1
        }
    }
]).pretty()

/* { "_id" : "Carrillada", "costeElaboracion" : 1370 }
{ "_id" : "bocadeillo de pulpo a la brasa", "costeElaboracion" : 1088 }
{ "_id" : "Langostinos", "costeElaboracion" : 1000 }
{ "_id" : "Bocadillo de calamares al estilo Martina", "costeElaboracion" : 855}
{ "_id" : "Puchero Andaluz con Pringá", "costeElaboracion" : 595 }
{ "_id" : "Puchero Gaditano", "costeElaboracion" : 568 }
{ "_id" : "Un puchero paraguayo", "costeElaboracion" : 562 }
{ "_id" : "Puchero Clásico", "costeElaboracion" : 552 }
{ "_id" : "legumbre con carrillera", "costeElaboracion" : 551 }
{ "_id" : "Hummus de garbanzos con nachos", "costeElaboracion" : 549 }
{ "_id" : "Entrecot de ternera", "costeElaboracion" : 535 }
{ "_id" : "Sorbete de limón", "costeElaboracion" : 262 }
{ "_id" : "Salmorejo andaluz", "costeElaboracion" : 211 }
{ "_id" : "Flor de loto", "costeElaboracion" : 179 }
{ "_id" : "Bacalado dorado", "costeElaboracion" : 170 }
{ "_id" : "Ensalada clásica", "costeElaboracion" : 105 }*/

/* 
    2ª consulta: 
    Averigua los ingredientes que caducarán en el próximo mes, y como de urgente es reponerlos en función del número de platos que necesiten
    dicho ingrediente.
*/

db.restaurante.aggregate([
    {
        $unwind: "$ingredientes"
    },{
        $lookup: {
            from: "ingredientes",
            localField: "ingredientes.idIngr",
            foreignField: "idIngr",
            as: "composicion"
        }
    },{
        $project: {
            _id: 0,
            nombrePlato: "$nombrePlato",
            ingre: "$composicion.nombreIng",
            caducidad: "$composicion.fechaCaducidad",
            precioCompra: "$composicion.precioCompra"
        } 
    },{
        $match: {
            caducidad: {
                $lte: new Date("2022-04-30")
            }
        }
    },{
        $project: {
            ingredientesPorCaducar: "$ingre",
            precioCompra: "$precioCompra"
        }
    },{
        $group: {
            _id: "$ingredientesPorCaducar",
            precio: {$addToSet: "$precioCompra"},
            count: {$sum: 1},
            
        }
    },{
        $project: {
            condiciones: {
                $cond: {
                    if: {
                        $gte: ["$count", 3]
                    },
                        then: "Urge", else: "No urge tanto"
                }
            }
        }
    }
]).pretty()

/*{ "_id" : [ "Pulpo" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Huevos" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Lechuga" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Ajo" ], "condiciones" : "Urge" }
{ "_id" : [ "Entrecot" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Pimiento" ], "condiciones" : "Urge" }
{ "_id" : [ "Carrillera" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Garbanzos" ], "condiciones" : "Urge" }
{ "_id" : [ "Pan" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Hielo" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Costillas" ], "condiciones" : "Urge" }
{ "_id" : [ "Limón" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Patata" ], "condiciones" : "Urge" }
{ "_id" : [ "Setas" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Calamares" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Tomate" ], "condiciones" : "Urge" }
{ "_id" : [ "Cebolla" ], "condiciones" : "Urge" }
{ "_id" : [ "Langostinos" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Galleta" ], "condiciones" : "No urge tanto" }
{ "_id" : [ "Yogurt" ], "condiciones" : "No urge tanto" } */


/* 
    3ª consulta: 
    Calculo el precio de venta de cada plato, resultado de la aplicación de un impuesto al coste de fabricación de cada plato. Y, además
    obtengo el beneficio de que se obtiene con la venta de cada plato.
*/

db.restaurante.aggregate([
    {
        $unwind: "$ingredientes"
    } ,{
        $lookup: {
            from: "ingredientes",
            localField: "ingredientes.idIngr",
            foreignField: "idIngr",
            as: "composicion"
        }
    },{
        $lookup: {
            from: "categoria",
            localField: "idCategoria",
            foreignField: "idCategoria",
            as: "impuestos"
        }
    },{
        $set: {
            precioIngrediente: {$arrayElemAt: ["$composicion.precioCompra", 0]},
            agregado: {$arrayElemAt: ["$impuestos.precioAdd", 0]}
        }
    },{
        $project: {
            _id: 0,
            nombrePlato: "$nombrePlato",
            precioIngrediente: 1,
            precioTotalIngrediente: {$round: {$multiply: ["$ingredientes.gramos", "$precioIngrediente"]}},
            agregado: 1,
            nombreIngre: "$composicion.nombreIng"
        }
    },{
        $group: {
            _id: "$nombrePlato",
            costeElaboracion: {$sum: "$precioTotalIngrediente"},
            iva: {$push: "$agregado"}
        }
    },{
        $project: {
            costeElaboracion: "$costeElaboracion",
            impuesto: {$arrayElemAt: ["$iva", 0]},
        }
    },{
        $project: {
            costeElaboracion: "$costeElaboracion",
            precioVenta: {$multiply: ["$costeElaboracion", "$impuesto"]}
        }
    },{
        $project: {
            costeElaboracion: "$costeElaboracion",
            precioVenta: "$precioVenta",
            beneficioNeto: {$subtract: ["$precioVenta", "$costeElaboracion"]}
        }
    }
]).pretty()

/*{
        "_id" : "Sorbete de limón",
        "costeElaboracion" : 262,
        "precioVenta" : 340.6,
        "beneficioNeto" : 78.60000000000002
}
{
        "_id" : "Langostinos",
        "costeElaboracion" : 1000,
        "precioVenta" : 1700,
        "beneficioNeto" : 700
}
{
        "_id" : "Bocadillo de calamares al estilo Martina",
        "costeElaboracion" : 855,
        "precioVenta" : 1111.5,
        "beneficioNeto" : 256.5
}
{
        "_id" : "bocadeillo de pulpo a la brasa",
        "costeElaboracion" : 1088,
        "precioVenta" : 1414.4,
        "beneficioNeto" : 326.4000000000001
}
{
        "_id" : "Un puchero paraguayo",
        "costeElaboracion" : 562,
        "precioVenta" : 871.1,
        "beneficioNeto" : 309.1
}
{
        "_id" : "Carrillada",
        "costeElaboracion" : 1370,
        "precioVenta" : 2123.5,
        "beneficioNeto" : 753.5
}
{
        "_id" : "legumbre con carrillera",
        "costeElaboracion" : 551,
        "precioVenta" : 854.0500000000001,
        "beneficioNeto" : 303.05000000000007
}
{
        "_id" : "Flor de loto",
        "costeElaboracion" : 179,
        "precioVenta" : 232.70000000000002,
        "beneficioNeto" : 53.70000000000002
}
{
        "_id" : "Ensalada clásica",
        "costeElaboracion" : 105,
        "precioVenta" : 136.5,
        "beneficioNeto" : 31.5
}
{
        "_id" : "Entrecot de ternera",
        "costeElaboracion" : 535,
        "precioVenta" : 829.25,
        "beneficioNeto" : 294.25
}
{
        "_id" : "Puchero Gaditano",
        "costeElaboracion" : 568,
        "precioVenta" : 880.4,
        "beneficioNeto" : 312.4
}
{
        "_id" : "Puchero Clásico",
        "costeElaboracion" : 552,
        "precioVenta" : 855.6,
        "beneficioNeto" : 303.6
}
{
        "_id" : "Hummus de garbanzos con nachos",
        "costeElaboracion" : 549,
        "precioVenta" : 713.7,
        "beneficioNeto" : 164.70000000000005
}
{
        "_id" : "Puchero Andaluz con Pringá",
        "costeElaboracion" : 595,
        "precioVenta" : 922.25,
        "beneficioNeto" : 327.25
}
{
        "_id" : "Salmorejo andaluz",
        "costeElaboracion" : 211,
        "precioVenta" : 274.3,
        "beneficioNeto" : 63.30000000000001
}
{
        "_id" : "Bacalado dorado",
        "costeElaboracion" : 170,
        "precioVenta" : 289,
        "beneficioNeto" : 119
}*/


/* 
    4ª consulta: 
    Agrupar según intervalos los platos mediante sus calorias. Se mostrarán cuantos platos hay en cada intervalo, el nombre del mismo y 
    sus calorías exactas.
*/

db.restaurante.aggregate([
    {
        $lookup: {
            from: "categoria",
            localField: "idCategoria",
            foreignField: "idCategoria",
            as: "categorias"
        }
    },{
        $project: {
            _id: 0,
            nombrePlato: "$nombrePlato",
            calorias: "$nutricion.calorias"
        }
    } ,{
        $bucket: {
            groupBy: "$calorias",
            boundaries: [0, 300, 600, 800],
            default: "Muy denso calóricamente",
            output: {
                cuantos: {$sum: 1},
                cuales: {$addToSet: "$nombrePlato"},
                caloriasExactas: {$addToSet: "$calorias"}
            }
        }
    }
]).pretty()

/*{
        "_id" : 0,
        "cuantos" : 8,
        "cuales" : [
                "Puchero Gaditano",
                "Hummus de garbanzos con nachos",
                "Puchero Andaluz con Pringá",
                "Bacalado dorado",
                "Sorbete de limón",
                "Un puchero paraguayo",
                "Ensalada clásica",
                "Flor de loto"
        ],
        "caloriasExactas" : [
                110,
                260,
                240,
                230,
                290,
                200
        ]
}
{
        "_id" : 300,
        "cuantos" : 6,
        "cuales" : [
                "Bocadillo de calamares al estilo Martina",
                "Puchero Clásico",
                "Salmorejo andaluz",
                "bocadeillo de pulpo a la brasa",
                "legumbre con carrillera",
                "Langostinos"
        ],
        "caloriasExactas" : [
                510,
                400,
                550,
                450
        ]
}
{
        "_id" : 600,
        "cuantos" : 1,
        "cuales" : [
                "Carrillada"
        ],
        "caloriasExactas" : [
                650
        ]
}
{
        "_id" : "Muy denso calóricamente",
        "cuantos" : 1,
        "cuales" : [
                "Entrecot de ternera"
        ],
        "caloriasExactas" : [
                900
        ]
}*/

