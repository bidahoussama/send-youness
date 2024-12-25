import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import "./ProductPage.css";

export const ProductPage = (ele) => {
  const { id, category_name, name, image_url, price } = ele;
  return (
    <div className="myContainer col-md-4 my-2">
      <NavLink className="text-decoration-none" to={`/singleProduct/${id}`}>
        <div className="position-relative">
          <h6 className="category-icon">{category_name}</h6>
        </div>
        <img
          className="img-fluid product_img rounded-4 shadow "
          src={image_url}
          alt="products img"
          height={150}
        />

        <div className="d-flex justify-content-between mt-2">
          <p className="text-dark fw-bold text-capitalize">{name}</p>
          <p className="text-dark">{<FormatPrice price={price} />}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductPage;
