
function SearchBar({filterText,onFilterTextChange,
  onInStockOnlyChange,inStockOnly}) {

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
          <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }

  export default SearchBar;