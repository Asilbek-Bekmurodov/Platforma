import Product from "./product";

const Products = ({ productsData }) => {
  return (
    <div className="container product-wrapper">
      {productsData.map((productData) => (
        <Product productData={productData} />
      ))}
    </div>
  );
};

export default Products;
