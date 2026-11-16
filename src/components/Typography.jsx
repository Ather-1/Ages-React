import { Children } from "react"

export const H1 = ({children, className=''}) => {
    return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-[Merriweather] font-medium tracking-wider ${className}`}>
        {children}
    </h1>
    )
}

export const H2 = ({children, className=''}) => {
    return (
        <h2 className={`text-3xl md:text-5xl lg:text-[62px] leading-[1.14] font-normal text-dark ${className}`}>
            {children}
        </h2>
    )
}




export const H5 = ({children, className=''}) => {
    return (
        <h5 className={`font-[Merriweather] text-3xl md:text-3xl lg:text-4xl font-medium text-amber-300 ${className}`}>
            {children}
        </h5>
    )
}

export const H6 = ({children, className=''}) => {
    return (
        <h6 className={`text-xs font-medium ${className}`}>
            {children}
        </h6>
    )
}

export const Para = ({children, className=''}) => {
    return (
        <p 
        className={`text-xs md:text-[13px] font-semibold tracking-wide leading-4.5 ${className}`}>
            {children}
        </p>
    )
}

export const Btn = ({children, onClick='', className=''}) => {
    return (
        <button onClick = {onClick} 
        className={`text-base font-semibold px-6 py-2 rounded-sm border text-txtl border-gray-400 bg-black/40 hover:bg-gray-400 hover:text-dark cursor-pointer ${className}`}>
            {children}
        </button>
    )
}


export const List = ({list}) => {
    return (
        
        <div className="flex items-center gap-2 text-xs">
            <span className="text-amber-700">&#10004;</span>
            <li className="font-semibold tracking-wide">
                {list}
            </li>
        </div>
    )
}



export const SectionTag = ({tag}) => {
    return (
        <div className="flex items-center gap-1 bg-gray-400/50 px-3 rounded-full">
            <span className="text-amber-700 ">&bull;</span>
            <span className="text-[9px] font-bold text-txtd tracking-wider ">
                {tag}
            </span>
        </div>
    )
}
