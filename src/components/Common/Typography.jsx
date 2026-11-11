import React from 'react';
import { Link } from "react-router-dom"

export const H1 = ({ children, className = '' }) => (
    <h1
    className={`text-3xl md:text-4xl lg:text-5xl xl:text-[65px] font-medium leading-[1.1] text-light ${className}`}>
        {children}
    </h1>
);

export const H5 = ({ children, className = '' }) => (
    <h5
    className={` xl:text-[32px] font-medium leading-[1.1] text-light ${className}`}>
        {children}
    </h5>
);





export const NavLink = ({children, onclick, to, className = ''}) => {
    return (
        <Link 
        to={to}
        onClick={onclick}
        className='text-[15px] lg:text-[14px] xl:text-[16px] font-semibold tracking-wider lg:text-light md:text-dark hover:text-blue transition duration-200'
        >
        {children}
        </Link>
    )
};


export const Para = ({children, className = ''}) => (
    <p className={`text-[12px] lg:text-[13px]  font-medium tracking-wide leading-4 lg:leading-5 text-gray-300 ${className}`}>
        {children}
    </p>
);