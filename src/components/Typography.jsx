import { Children } from "react"

export const H1 = ({children, className=''}) => {
    return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-[Merriweather] font-medium tracking-wider ${className}`}>
        {children}
    </h1>
    )
}
export const H5 = ({children, className=''}) => {
    return (
        <h5 className={`text-xs font-medium ${className}`}>
            {children}
        </h5>
    )
}

export const Para = ({children, className=''}) => {
    return (
        <p 
        className={`text-[13px] font-light tracking-wide leading-4.5 ${className}`}>
            {children}
        </p>
    )
}

export const Btn = ({children, to='', className=''}) => {
    return (
        <button to = {to} 
        className={`text-base font-semibold px-6 py-2 rounded-sm border text-txtl border-gray-400 bg-black/40 hover:bg-gray-400 hover:text-dark ${className}`}>
            {children}
        </button>
    )
}

