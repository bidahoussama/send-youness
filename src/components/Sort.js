import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";

export default function Sort() {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <>
      <div className="container mt-md-0 mt-2">
        <div className="mb-3 d-flex justify-content-between align-item-center">
          {/* Grid and List Buttons */}
          <div>
            <button
              onClick={setGridView}
              className={
                grid_view
                  ? "btn active btn-outline-dark "
                  : "btn btn-outline-dark "
              }
            >
              <BsFillGridFill />
            </button>
            <button
              onClick={setListView}
              className={
                !grid_view
                  ? "btn active btn-outline-dark ms-2"
                  : "btn btn-outline-dark ms-2"
              }
            >
              <FaList />
            </button>
          </div>
          {/* Products */}
          <div className=" d-md-block d-none">
            <p className="fw-bold">
              {`${filter_products.length}`} Products available
            </p>
          </div>
          {/* DropDown */}
          <div>
            <select
              onClick={sorting}
              className="form-select fw-bold"
              id="Sort"
              aria-label="Default select example"
            >
              <option value="highest" select="true">
                Price ( highest )
              </option>
              <option value="lowest">Price ( lowest )</option>
              <option value="a-z">Name (a - z)</option>
              <option value="z-a">Name (z - a)</option>
            </select>
          </div>
        </div>
        <div className="d-md-none d-block">
          <p className="fw-bold text-center">
            {`${filter_products.length}`} Products available
          </p>
        </div>
      </div>
    </>
  );
}
