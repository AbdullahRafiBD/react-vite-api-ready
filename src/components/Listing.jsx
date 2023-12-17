import axios from "axios";
import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = () => {
    return axios
      .get(
        "http://ecomapi.abdullahrafi.com/api/listing/" + searchParams.get("url")
      )
      .then((response) => setProducts(response.data["products"]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div align="center">
      {products.map((productObj) => {
        return (
          <div key={productObj.id}>
            <h3>{productObj.product_name}</h3>
            <Link to={"/detail?id=" + productObj.id}>
              <img src={productObj.product_image} />
            </Link>
            <h3>Price:{productObj.product_price}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
