

export default function Container(props){
   
    const {children} = props

    return(
        <>
            <div className="max-w-[1430px] m-auto">
                {children}
            </div>
        </>
    )
}