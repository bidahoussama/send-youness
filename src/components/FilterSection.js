import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { GiCheckMark } from "react-icons/gi";
import FormatPrice from "../helpers/FormatPrice";

export default function FilterSection() {
  const {
    filters: { text, price, maxPrice, minPrice },
    all_products,
    updateFilter,
    clearFilters
  } = useFilterContext();

  // Get Unique Data of Each field
  const getUniqueData = (data, property) => {
    let newValue = data.map((currentElement) => {
      return currentElement[property];
    });


    return (newValue = ["all", ...new Set(newValue)]);
  };

  // Category Data
  const categoryData = getUniqueData(all_products, "category_name");

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search Products"
            name="text"
            value={text}
            onChange={updateFilter}
            className="form-control"
          />
        </form>
      </div>
      {/* Category Section */}
      <div className="mt-3">
        <h4>Category</h4>
        <div className="d-flex flex-column">
          {categoryData.map((currentElement, index) => (
            <button
              key={index}
              className="btn text-start border-0 text-capitalize fw-bold "
              type="button"
              name="category_name"
              value={currentElement}
              onClick={updateFilter}
            >
              {currentElement}
            </button>
          ))}
        </div>
      </div>
      {/* Company Section */}

      {/* Colors Section */}

      {/* Price Range Section */}
      <div className="mt-3">
        <h4>Price</h4>

        <label htmlFor="customRange1" className="form-label">
          <FormatPrice price={price} />
        </label>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          name="price"
          value={price}
          onChange={updateFilter}
          className="form-range"
          id="customRange1"
        />
      </div>
      {/* Clear Filter Button */}
      <div className="mt-3">
        <button onClick={clearFilters} className="btn btn-outline-danger">
          Clear Filter
        </button>
      </div>
    </>
  );
}
