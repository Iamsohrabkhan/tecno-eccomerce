import React, { useState, useEffect } from "react";
import {
  IoMdCart,
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
} from "react-icons/io";
// import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const pid = context.params.slug 
  console.log(pid);
try {
    const API = `https://api.pujakaitem.com/api/products?id=${pid}`;
    const res = await fetch(API)
    const data = await res.json()
    return {
      props: { data}, // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error.message);
    return {
      props: { error }, // will be passed to the page component as props
    }
  }
}

const ProductDetail = ({data}) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // const router = useRouter();
  // const pid = router.query.slug;
  // console.log(pid);


  

  const {
    id,
    name,
    image,
    description,
    company,
    price,
    category,
    colors,
    stock,
    reviews,
    stars,
  } = data;
  
  const arrStars = [1, 2, 3, 4, 5];

  return (
    
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="w-full" alt={image[0].id} src={image[0].url} />
        <img className="mt-6 w-full" alt={image[1].id} src={image[1].url} />
      </div>
      <div className="md:hidden">
        <img className="w-full" alt={image[0].id} src={image[0].url} />
        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt={image[3].id}
            className="md:w-48 md:h-48 w-full"
            src={image[3].url}
          />
          <img
            alt={image[2].id}
            className="md:w-48 md:h-48 w-full"
            src={image[2].url}
          />
          <img
            alt={image[3].id}
            className="md:w-48 md:h-48 w-full"
            src={image[3].url}
          />
          <img
            alt={image[2].id}
            className="md:w-48 md:h-48 w-full"
            src={image[2].url}
          />
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">{category}</p>
          <h1
            className="
                                lg:text-2xl
                                text-xl
                                font-semibold
                                lg:leading-6
                                leading-7
                                text-gray-800
                                mt-2
                            "
          >
            {name}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Available Colors</p>
          <div className="flex items-center justify-center">
            {colors && colors.map((curr) => {
              return (
                <div
                  className="            
                                     w-6
                                      h-6
                                    
                                      ml-1
                                      mr-1
                                      cursor-pointer
                                  "
                  style={{ backgroundColor: curr }}
                ></div>
              );
            })}
          </div>
        </div>

        <button
          className=" 
                        mt-3
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
                        text-base
                        flex
                        items-center
                        justify-center
                        leading-none
                        text-white
                        bg-gray-800
                        w-full
                        py-4
                            hover:bg-gray-700
                        "
        >
          Add to Cart
          <IoMdCart className="ml-2 text-white" />
        </button>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
            {description}
          </p>

          <p className="text-base leading-4 mt-4 text-gray-600">
            Stock: {stock}
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Reviews: {reviews}
          </p>
          <p className="text-base leading-4 mt-4 flex items-center">
            <div className="mr-1">Stars: </div>
            {arrStars.map((curr) => {
              return (
                <div className="flex items-center">
                  {curr <= stars ? (
                    <IoMdStar className="text-yellow-500 text-xl " />
                  ) : curr === Math.ceil(stars) ? (
                    <IoMdStarHalf className="text-yellow-500 text-xl" />
                  ) : (
                    <IoMdStarOutline className="text-yellow-500 text-xl" />
                  )}
                </div>
              );
            })}
          </p>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">
                Shipping and returns
              </p>
              <button
                className="
                                        cursor-pointer
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                                        rounded
                                    "
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
                                    cursor-pointer
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                                        rounded
                                    "
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
