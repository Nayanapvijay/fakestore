const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productContainer1 = document.getElementById('product-details')
//console.log(productId,"id");

async function productDetails(){
    try {
        
        const response= await fetch(`https://fakestoreapi.com/products/${productId}`)
        
        if(!response.ok){
            throw new Error("Something went wrong!!")
        }

        const details = await response.json()
        displayproductDetails(details)
        
    } catch (error) {
        console.log(error);
        
    }
}
function displayproductDetails(details){
    const detailsproduct = `
    <div class="col-md-6 product-image-container">
                        <img src=${details.image} alt="product">
                    </div>
                    <div class="col-md-6">
                        <h2>${details.title}</h2>
                        <p>${details.category}</p>
                        <p>${details.description}</p>

                        <h3>$${details.price}</h3>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
    `
    productContainer1.innerHTML=detailsproduct
}
productDetails()
