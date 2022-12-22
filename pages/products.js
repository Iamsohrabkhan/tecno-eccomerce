import { BsGrid, BsList } from "react-icons/bs";
import { useGlobalContext } from "./components/appContext";
import GridView from "./components/views/gridView";
import Listview from "./components/views/listView";

const products = () => {
  const {
    filterProduct,
    search,
    setSearch,
    category,
    toCapitalize,
    company,
    // colors,
    setCategoryFilter,
    setCompanyFilter,
    min,
    max,
    priceFilter,
    setPriceFilter,
    priceFormat,
    clearFilter,
    sorting,
    setSortingValue,
    sortingValue,
    grid,
    setGrid,
  } = useGlobalContext();
  return (
    <>
      <main className="my-5 ">
        <div className=" flex justify-between items-center ml-5">
          <div className="search">
            <input
              type="search"
              className="border-2 border-gray-500 py-0.5 px-1 focus:border-teal-500 focus:ring-teal-500 rounded-md w-4/5"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="grid-view flex space-x-2 -ml-36">
            
            <BsGrid className={` ${grid? "bg-black  text-white" :"bg-white  text-black "}  text-xl w-6 h-6 p-1 rounded-md cursor-pointer `} onClick={()=>{setGrid(true)}}/>
            
            <BsList className={` ${!grid? "bg-black  text-white" :"bg-white  text-black "}  w-6 h-6 text-xl p-1 rounded-md cursor-pointer`} onClick={()=>{setGrid(false)}}/>
          </div>
          <div className="total-products ">
            {filterProduct.length} total Products
          </div>
          <div className="options p-1 mr-16">
            <select
              name=""
              id=""
              className="p-2 bg-gray-100 border-b-pink-400 cursor-pointer"
              onClick={(e) => {
                setSortingValue(e.target.value);
              }}
            >
              <option value="All"> All</option>
              <option value="lowest"> Price(lowest)</option>
              <option value="highest"> Price(highest)</option>
              <option value="a-z">a-z</option>
              <option value="z-a"> z-a</option>
            </select>
          </div>
        </div>
        <section className="container mx-auto mt-5 flex">
          <div className="nav flex flex-col my-10 w-1/4">
            <div className="category">
              <h2 className="font-semibold">Category</h2>
              <ul className="">
                {category.map((curr) => {
                  return (
                    <li
                      key={curr}
                      className="cursor-pointer"
                      onClick={() => {
                        setCategoryFilter(curr);
                      }}
                    >
                      {toCapitalize(curr)}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Company */}
            <div className="company mt-3">
              <h2 className="font-semibold mb-1">Company</h2>
              <select
                name=""
                id=""
                className="py-2 px-3 rounded-md bg-gray-100 border-b-pink-400 cursor-pointer"
              >
                {company.map((curr) => {
                  return (
                    <option
                      key={curr}
                      value={curr}
                      onClick={() => {
                        setCompanyFilter(curr);
                      }}
                    >
                      {toCapitalize(curr)}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* colors */}
            {/* <div className=" colors mt-3">
              <h2 className="text-xl">Colors</h2>
              <div className=" flex  items-center  space-x-1">
                <div className="ml-2">All</div>
                {colors.map((curr) => {
                  return (
                    <div
                      key={curr}
                      className="w-4 h-4 rounded-full align-middle cursor-pointer"
                      style={{ backgroundColor: curr }}
                    ></div>
                  );
                })}
              </div>
            </div> */}
            {/* Price range */}
            <div className="price mt-3">
              <h2>Price - {priceFormat(priceFilter)}</h2>
              <input
                type="range"
                className="range-xl w-[45%] accent-pink-500"
                min={min}
                max={max}
                value={priceFilter}
                onChange={(e) => {
                  setPriceFilter(e.target.value);
                }}
              />
            </div>

            {/* clear filter */}
            <div
              className="mt-3 text-white bg-pink-500 py-1 px-3 w-fit rounded cursor-pointer"
              onClick={clearFilter}
            >
              Clear Filters
            </div>
          </div>

          {/* grid or list view */}
          <div className="w-[75%]">{grid ? <GridView /> : <Listview />}</div>
        </section>
      </main>
    </>
  );
};

export default products;
