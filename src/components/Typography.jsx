import { Children } from "react"

export const H1 = ({children, className='', Varient='Primary'}) => {
    const Varients = {
        Primary : 'font-[Merriweather] text-4xl lg:text-5xl xl:text-[54px] font-light tracking-wider',
        Secondry : 'font-[Merriweather] text-4xl lg:text-5xl xl:text-[102px] font-light text-txtl tracking-wider'
    }

    return (
    <h1 className={`${Varients[Varient]} ${className}`}>
        {children}
    </h1>
    )
}

export const H2 = ({children, className=''}) => {
    return (
        <h2 className={`font-[Merriweather] text-3xl md:text-4xl lg:text-[42px] leading-[1.2] tracking-wide font-medium text-txtd ${className}`}>
            {children}
        </h2>
    )
}
export const H3 = ({children, className=''}) => {
    return (
        <h3 className={` text-sm md:text-2xl lg:text-4xl font-medium text-txtl ${className}`}>
            {children}
        </h3>
    )
}

export const H4 = ({children, className=''}) => {
    return (
        <h4 className={`text-sm md:text-md tracking-wide font-medium text-txtd ${className}`}>
            {children}
        </h4>
    )
}

export const H5 = ({children, className=''}) => {
    return (
        <h5 className={`font-[Merriweather] text-3xl md:text-4xl lg:text-5xl font-light text-amber-300 ${className}`}>
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


export const FooterHeading = ({children, className=''}) => (
    <h6 className="text-sm font-medium tracking-wider text-txtl">
        {children}
    </h6>
)


export const Para = ({children, className=''}) => {
    return (
        <p 
        className={`text-xs md:text-[13px] font-semibold tracking-wide leading-4.5 ${className}`}>
            {children}
        </p>
    )
}



export const List = ({list, className=''}) => {
    return (
        
        <div className="flex items-center gap-2 text-[11px]">
            <span className="text-amber-700">&#10004;</span>
            <li className={`font-semibold tracking-wide ${className}`}>
                {list}
            </li>
        </div>
    )
}



export const SectionTag = ({tag, Icon=''}) => (
    <span className="text-[10px] font-bold tracking-wider leading-none inline-flex items-center justify-center gap-0.5 px-2 pr-2.5 py-[0.2px] rounded-full border border-gray-600 bg-gray-500/60 text-txtd">
        {Icon && <Icon className="text-xl" />}
        {tag}
    </span>

)



export const Btn = ({children, onClick='', className='', variant = 'Primary', Icon = ''}) => {
    const variants = {
        Primary : 'text-xs md:text-sm font-semibold text-txtd tracking-wide pl-4 pr-3 py-1.5 md:py-2  rounded-sm border border-gray-500 bg-transparent flex items-center gap-1 hover:bg-dark hover:text-txtl transition-all duration-300',
        NavArrow : 'text-sm font-bold text-gray-400 border px-2.5 py-1 rounded-sm hover:bg-gray-400/40 hover:text-txtd '
    }
    return (
        <button onClick = {onClick} 
        className={`cursor-pointer ${variants[variant]} ${className}`}>
            {children}
            {Icon && <Icon className="text-xl" />}
        </button>
    )
}