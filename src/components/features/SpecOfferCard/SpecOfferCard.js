
import classes from "./prodCard.module.scss"


export default function SpecOfferCard(props){

    const {title, description} = props

    return(
        <>
            <div className={classes.wrapper}>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-bold text-white">{title}</p>
                    <p className={classes.priceP}>{description}</p>
                </div>
            </div>
        </>
    )
}