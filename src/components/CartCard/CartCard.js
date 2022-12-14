import "./CartCard.css";

const CartCard = ({ product, cart, setCart }) => {
  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  console.log(product);
  return (
    <article id="cardCard">
      <img
        id="cartCardImage"
        src={product.product.thumbnailImageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "/imgError.jpeg";
        }}
      />
      <div id="cardDetails">
        <div id="cardInfo">
          <p id="name">{product.product.name}</p>
          <p id="size">{product.size}</p>
        </div>
        <div id="removePrice">
          <button
            onClick={() => {
              handleRemoveItem(product.id);
            }}
          >
            remove
          </button>
          <p id="price">{product.product.price}</p>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
