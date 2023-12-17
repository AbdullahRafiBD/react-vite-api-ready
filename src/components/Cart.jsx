import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = () => {
    return axios
      .get(
        "http://ecomapi.abdullahrafi.com/api/cart/" + searchParams.get("userid")
      )
      .then((response) => setProducts(response.data["products"]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div align="center">
      <h2>Shopping Cart</h2>
      {products.map((productObj) => {
        return (
          <div key={productObj.id}>
            <h3>{productObj.product.product_name}</h3>
            <Link to={"/detail?id=" + productObj.id}>
              <img src={productObj.product.product_image} />
            </Link>
            <h3>Price:{productObj.product.product_price}</h3>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <hr />
          </div>
        );
      })}
      <button className="btn btn-primary">Proceed</button>
    </div>
  );
};

export default Cart;
