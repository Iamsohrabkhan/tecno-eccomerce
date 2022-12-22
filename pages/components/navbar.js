import Link from "next/link";
import React from "react";
import {TfiShoppingCartFull} from 'react-icons/tfi'
const Navbar = () => {
  return (
    <div className="shadow-sm sticky top-0 left-0 right-0 z-10">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="products">Products</Link>
            </li>
            {/* <li tabIndex={0}>
              <a>
                More Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <Link href="contact">Contact</Link>
            </li>
            <li>
              <Link href="about">About us</Link>
            </li>
            <li>
              <a>
              <TfiShoppingCartFull className="text-2xl text-black"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
