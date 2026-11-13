

export const H1 = ({children, className=''}) => {
    return (
    <h1 className={`text-4xl/11 md:text-5xl lg:text-6xl font-semibold tracking-wider ${className}`}>
        {children}
    </h1>
    )
}

export const Para = ({children, className=''}) => {
    return (
        <p 
        className={`text-sm font-medium tracking-wide leading-4.5 ${className}`}>
            {children}
        </p>
    )
}

export const Btn = ({children, to='', className=''}) => {
    return (
        <button to = {to} 
        className={`text-base font-semibold px-6 py-2 rounded-sm border text-gray-300 border-gray-400 bg-black/40 hover:bg-gray-400 hover:text-dark ${className}`}>
            {children}
        </button>
    )
}

export const Tag = ({children}) => {
    return (
        <small 
        className="px-4 py-1 text-xs lg:px-5 text-gray-300 font-medium tracking-wider
                    border border-gray-500 rounded-3xl bg-black/65">
            {children}
        </small>
    )
}