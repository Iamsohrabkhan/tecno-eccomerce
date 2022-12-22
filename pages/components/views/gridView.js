import React from "react";
import { useGlobalContext } from "../appContext";
import Loader from "../loader";

const GridView = () => {
  const { products, priceFormat, isLoading, toCapitalize, search,filterProduct} =
    useGlobalContext();




  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-3 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {isLoading ? (
            <Loader />
          ) : (
            filterProduct.map((product,i) => (
              <a key={i} className="group cursor-pointer">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-3 xl:aspect-h-2">
                  <img
                    src={product.image}
                    alt={product.id}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {toCapitalize(product.name)}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {priceFormat(product.price)}
                </p>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default GridView;
