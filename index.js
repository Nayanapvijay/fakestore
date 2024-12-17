const productContainer=document.getElementById('product-container')

async function fetchProduct(){
    try {
        const response=await fetch('https://fakestoreapi.com/products')
        //console.log(response);
        if(!response.ok){
            throw new Error("Something went wrong!!")
        }
        const products=await response.json()
        console.log(products);
        
        products.forEach((product)=>{
            let productCard = `
            <div class="card col-sm-12 col-lg-3">
                        
                            <img src=${product.image} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description.slice(0,100)}...</p>
                                <a href="./productdetails.html?id=${product.id}" class="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
            `
            productContainer.innerHTML+=productCard
        })

        

        
    } catch (error) {
        
        console.log(error);
        
    }
}
fetchProduct()