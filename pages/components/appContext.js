import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const API = "https://api.pujakaitem.com/api/products/";

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState(6000000);
  const [sortingValue, setSortingValue] = useState("All");
  const [active, setActive] = useState(0)

  useEffect(() => {
    const getProducts = async (url) => {
            
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setIsLoading(false)
      } catch (error) {
        console.log(`oops! failed to get data ${error.message}`);
        setIsLoading(false)
      }
    };
    getProducts(API);
  }, []);



  // helper functions
  const priceFormat = (number) => {
    return new Intl.NumberFormat("ur-PK", {
      maximumSignificantDigits: 2,
      style: "currency",
      currency: "PKR",
    }).format(number);
  };
  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const getUniqueData = (input, field) => {
    let output = [];
    for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
    if (field === "price") {
      return [...new Set(output)];
    }
    return ["All", ...new Set(output)];
  };

  // filters
  const category = getUniqueData(products, "category");
  const company = getUniqueData(products, "company");
  // let colors = getUniqueData(products, "colors").flat();
  // colors = [...new Set(colors)];
  const price = getUniqueData(products, "price");
  const max = Math.max(...price);
  const min = Math.min(...price);

  // let  arrPrice= products.map((curr)=>{
  //     return curr.price
  //   })
  //   console.log(arrPrice);

  const sorting = () => {
    //  setSortingValue
  };
  const filterProduct = products
    .filter((val) => {
      return val.name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((curr) => {
      if (categoryFilter === "All") {
        return curr.category;
      } else {
        return curr.category.toLowerCase() === categoryFilter.toLowerCase();
      }
    })
    .filter((curr) => {
      if (companyFilter === "All") {
        return curr.company;
      } else {
        return curr.company.toLowerCase() === companyFilter.toLowerCase();
      }
    })
    .filter((curr) => {
      if (priceFilter >= curr.price) {
        return curr.price;
      }
    })
    .filter((curr,i,arr) => {
      if (sortingValue === "All") {
        return curr;
      }
       else if (sortingValue === "a-z") {
       return arr.sort((a,b)=>{
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        })
      }
       else if (sortingValue === "z-a") {
       return arr.sort((b,a)=>{
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        })
      }
       else if(sortingValue==="lowest"){
            return arr.sort((a,b)=>a.price-b.price)
      }
       else if(sortingValue==="highest"){
            return arr.sort((b,a)=>a.price-b.price)
      }
    });

  // clearFilter
  const clearFilter = () => {
    setSearch("");
    setCategoryFilter("All");
    setCompanyFilter("All");
    setSortingValue("All")
    setPriceFilter(6000000);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        priceFormat,
        isLoading,
        toCapitalize,
        search,
        setSearch,
        category,
        company,
        // colors,
        filterProduct,
        categoryFilter,
        setCategoryFilter,
        companyFilter,
        setCompanyFilter,
        min,
        max,
        priceFilter,
        setPriceFilter,
        clearFilter,
        sorting,
        sortingValue,
        setSortingValue,
        grid,
        setGrid,active, setActive
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
