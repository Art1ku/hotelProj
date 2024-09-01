import classes from "./prodCard.module.scss"

export default function ProductCard(props){

    const {main_photo, title, price} = props

    return(
        <>
            <div className={classes.wrapper}>
                <div className="flex flex-col gap-[8px]">
                    <img src={main_photo} alt={title} className={classes.image}/>
                    <div className="flex flex-col gap-[4px] ml-[10px]">
                        <p className="text-[20px] font-bold text-white">{title}</p>
                        <p className={classes.priceP}>{price} jp</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// w-full h-[150px] rounded-[12px] object-cover