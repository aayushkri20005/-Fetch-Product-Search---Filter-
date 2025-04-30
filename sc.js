(async()=>{

    const productcontainerele=document.getElementById("productContainer");
    const url="https://fakestoreapi.com/products"
    const searchInputele=document.getElementById("searchInput");

const fetchproduct=async()=>{
    try {
        const res= await fetch(url);
        return await res.json();
    } catch (error) {
        return error;
    }
}

const products=await fetchproduct();
const genarateproducts=(product)=>{
return ` <div class="productcard">
        <div class="imagecontainer">
          <img
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="productcontent">
          <h2>
            ${product.title}
          </h2>
          <p>
           ${product.description.split(" ").slice(0,20).join(" ")}
          </p>
          <button>${product.price} $</button>
        </div>
      </div>`
}
const renderproducts=(products)=>{
    productcontainerele.innerHTML="";
    products.forEach(product=>{
        productcontainerele.innerHTML+=genarateproducts(product);
    })
}
const filterhandler=(event)=>{
const searchtext
}
searchInputele.addEventListener("keyup",filterhandler)
renderproducts(products);
})();
