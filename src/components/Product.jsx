import Card from "./Card";{/*we imprt the card that we make in card.jsx */}

function Product({ title, price }) {
  return (
    <Card>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </Card>
  );
}

export default Product;

