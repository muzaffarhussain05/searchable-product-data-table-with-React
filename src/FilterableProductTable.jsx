import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";


function FilterableProductTable({ products }) {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }

  export default FilterableProductTable;