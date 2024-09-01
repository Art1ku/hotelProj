

export default function Container(props){
   
    const {children} = props

    return(
        <>
            <div className="max-w-[90%] m-auto">
                {children}
            </div>
        </>
    )
}