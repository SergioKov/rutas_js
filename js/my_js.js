'use strict'



//start modo 1
class ProductRepository {
    async getProducts(){
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
    }
}

const repo = new ProductRepository();
//repo.getProducts();

const asyncArrow = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    //console.log(data);
    return data;
}

//asyncArrow();
//end modo 1







//start modo 2
/*(async ()=>{
    console.log(1);
    const res = await asyncArrow();
    console.log(res);
    console.log(2);
})();
*/
//end modo 2

/*
//start modo 3
async function aaa(){
    console.log(1);
    const res = await asyncArrow();
    console.log(res);
    console.log(2);
}

aaa();
//end modo 3
*/




//lesson 88
async function getAllProducts(){
    const response = await fetch('https://dummyjson.com/products');
    //console.log(response);
    return response.json();
}

async function getProduct(id){
    const response = await fetch('https://dummyjson.com/products/' + id);
    //console.log(response);
    return response.json();
}

async function main(){
    const { products } = await getAllProducts();
    //console.log(products);

    
    const res = await Promise.all([
        getProduct(1),
        getProduct(2),
        getProduct(3),
    ]);
    console.log(res);
    

    const res2 = await Promise.all( products.map(product => getProduct(product.id)));

    console.log(res2);

    /*for (const product of products){
        
        const res = await getProduct(product.id);
        console.log(res);        

        //console.log(`${product.id} ${product.title}`);
    }
    */
}

main();







