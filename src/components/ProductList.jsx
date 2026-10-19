
import Product from "./Product";

function ProductList() {
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 600 }
  ];

  return (
    <div>
      <h2>Our Products</h2>

      {/*creating a new array used to render lists of elements*/}
      {products.map((product) => (
        <Product
          key={product.id}/*primary key gibi*/
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
    /*the sort of the proccess is ProductList sent the titel and price to product.jsx and product.jsxsend it to card.jsx */
  );
}

export default ProductList;
