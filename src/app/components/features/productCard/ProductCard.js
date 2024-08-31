

export default function ProductCard(props){

    const {img, title, category, price} = props

    return(
        <>
            <div className="flex flex-col gap-[10px]">
                <img src={img} alt={title} className="w-full h-[150px] rounded-[12px] object-cover"/>
                <div className="flex flex-col gap-[4px]">
                    <p className="text-[12px] font-bold">{title}</p>
                    <p className="text-[12px] text-gray-500">{category}</p>
                    <p className="text-[12px] text-yellow-600">{price} jp</p>
                </div>
            </div>
        </>
    )
}