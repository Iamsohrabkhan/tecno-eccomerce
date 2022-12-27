import { BsGrid, BsList } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
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
    active,
    setActive,
  } = useGlobalContext();
  return (
    <>
      <main className="my-5 ">
        <div className=" flex justify-between items-center ml-5">
          <div className="search">
            <div className=" border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 w-2/4 ">
              <input
                placeholder="Search"
                type="text"
                aria-label="Search"
                className="lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4 "
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <BiSearchAlt2 />
            </div>
          </div>
          <div className="grid-view flex space-x-2 -ml-36">
            <BsGrid
              className={` ${
                grid ? "bg-black  text-white" : "bg-white  text-black "
              }  text-xl w-6 h-6 p-1 rounded-md cursor-pointer `}
              onClick={() => {
                setGrid(true);
              }}
            />

            <BsList
              className={` ${
                !grid ? "bg-black  text-white" : "bg-white  text-black "
              }  w-6 h-6 text-xl p-1 rounded-md cursor-pointer`}
              onClick={() => {
                setGrid(false);
              }}
            />
          </div>
          <div className="total-products ">
            {filterProduct.length} total Products
          </div>
          <div className="options p-1 mr-16">
            <select
              name=""
              id=""
              className="p-2 bg-gray-100 border-b-color-primary cursor-pointer"
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
                {category.map((curr, i) => {
                  return (
                    <li
                      key={curr}
                      onClick={() => {
                        setCategoryFilter(curr);
                        setActive(i);
                      }}
                      className={`cursor-pointer ${
                        active === i ? "text-black font-bold text-base" : ""
                      }`}
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
                className="py-2 px-3 rounded-md bg-gray-100 border-b-color-primary cursor-pointer"
              >
                {company.map((curr, i) => {
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
                className="range-xl w-[45%] accent-color-primary"
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
              className="mt-3 text-white bg-color-primary py-1 px-3 w-fit rounded cursor-pointer"
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
