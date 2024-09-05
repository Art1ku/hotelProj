
import classes from "./prodCard.module.scss"


export default function SpecOfferCard(props){

    const { title, des } = props



    return(
        <>
            <div className={classes.wrapper}>
                <div className="flex flex-col gap-[8px] p-[20px]">
                    <p className="text-[27px] font-bold text-white">{title}</p>
                    <p className={classes.priceP}>{des}</p>
                </div>
            </div>
        </>
    )
}