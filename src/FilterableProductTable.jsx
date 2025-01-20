import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar filterText={filterText}
        inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable products={products}
        inStockOnly={inStockOnly} filterText={filterText} />
    </div>
  );
}

export default FilterableProductTable;