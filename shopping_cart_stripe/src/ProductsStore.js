
// coffee: price_1O5shSSIt68lv3KupezideE1
// 600    : price_1O5siRSIt68lv3Ku4I2iNhMs
///6000   : price_1O5sjDSIt68lv3KuKW5qzAYi   

const ProductsArray=[
    {
        id:"price_1O5shSSIt68lv3KupezideE1",
        title:"coffee",
        price:60
    },
    {
        id:"price_1O5siRSIt68lv3Ku4I2iNhMs",
        title:"t-shirt",
        price:600
    },
    {
        id:"price_1O5sjDSIt68lv3KuKW5qzAYi",
        title:"sunglassess",
        price:6000

    },
]

function getProductData(id){
    let productData=ProductsArray.find(product=>product.id===id);

    return productData ? productData:undefined;
}

export {ProductsArray,getProductData};