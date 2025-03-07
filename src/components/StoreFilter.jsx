import React from "react";

const StoreFilter = ({ filterStore, setFilterStore, products }) => {
  // Get unique store names from the products list
  const storeNames = Array.from(
    new Set(products.map((product) => product.storeName))
  );

  return (
    <div>
      <label>Filter by Store: </label>
      <select
        value={filterStore}
        onChange={(e) => setFilterStore(e.target.value)}
      >
        <option value="">All</option>
        {storeNames.map((store, index) => (
          <option key={index} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoreFilter;
