import { useEffect, useRef, useState } from "react";
const SearchForm = ({search,setSearch,handleSearch}) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const query = event.target.elements.search.value;
  //   onSearch(query);
  // }
 
  const inputRef = useRef(null);

  const onSearch = (e) => {
    e.preventDefault();
    handleSearch(search);
  }
 
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={onSearch} className="d-flex justify-content-center my-4">
      <input
        type="text"
        className="form-control w-50 me-2 p-2 rounded-1"
        placeholder="Search for a meal..."
        aria-label="Search"
        value={search}
        ref={inputRef}
        onInput={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
