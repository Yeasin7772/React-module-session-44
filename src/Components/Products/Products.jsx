import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";


const Products = () => {
    const {products} = useLoaderData()
   
    return (
        <div >
        <div className="grid grid-cols-3 gap-5 mt-5">
        {
            products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard> )
         }
        </div>
        </div>
    );
};

export default Products;