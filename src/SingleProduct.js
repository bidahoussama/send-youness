import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import { Bars } from "react-loader-spinner";
import MyImage_url from "./components/MyImage";
import FormatPrice from "./helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import StarRating from "./components/StarRating";
import AddToCart from "./components/AddToCart";

const API = "http://ecommerce-project201.atwebpages.com/products.php";

export default function SingleProduct() {
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();
  console.log(singleProduct);

  const { id } = useParams();
  console.log(id);

  // destructure
  const {
    // id: alias,
    name,
    image_url,
    price,
    description,
    category_name,
    stock,
    stars,
    reviews,
  } = singleProduct ||{};

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Bars height="50" width="80" color="black" ariaLabel="loading" />
      </div>
    );
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="container">
        <div className="row">
          {/* Single Product Image_url */}
          <div className="col-md-6">
            <img width={600} height={500} src={image_url} alt={name}/>
          </div>
          {/* Single Product Data */}
          <div className="col-md-6">
            <h2>{name}</h2>
            <StarRating stars={stars} reviews={reviews} />
            <p className="mt-3">
              MRP :
              <del>
                <FormatPrice price={price + 50000} />
              </del>
            </p>
            <p>
              Deal of the Day :
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="d-flex justify-content-around align-items-center text-center">
              <div>
                <TbTruckDelivery className="h3" />
                <p>Free Delivery</p>
              </div>
              <div>
                <TbReplace className="h3" />
                <p>30 Days Replacemenet</p>
              </div>
              <div>
                <GiTakeMyMoney className="h3" />
                <p>1 year Warrenty</p>
              </div>
              <div>
                <MdSecurity className="h3 fw-bold" />
                <p>Secure Payment</p>
              </div>
            </div>
            <div>
              <p>
                Available :
                <span className="fw-bold">
                  {stock > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </p>
              <p>
                Category :
                <span className="fw-bold text-capitalize">{category_name}</span>
              </p>
            </div>
            <div className="border border-1 border-dark"></div>
            {stock > 0 && <AddToCart product = {singleProduct}/>}
          </div>
        </div>
      </div>
    </>
  );
}
