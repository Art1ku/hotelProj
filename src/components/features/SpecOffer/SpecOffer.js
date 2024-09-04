'use client'
import SpecOfferCard from "../SpecOfferCard/SpecOfferCard"
import Container from "../../ui/Container/Container"
import { useStore } from "zustand";
import { useEffect } from "react";
import { CardStore }from "../../../stores/cardStore/cardStore"
import classes from "../SpecOfferCard/prodCard.module.scss"

export default function SpecOffer(){

    const { data, fetchData } = useStore(CardStore)

    useEffect(() => {
        fetchData()
    }, [])

    // useEffect(() => {
    //     console.log(data, 'data') 
    // }   , [data])   

    return(
        <>
            <Container>
                <div className={classes.nameWrapper}>
                    <h1 className={classes.Name}>Events </h1>
                    <p className={classes.stars}>&#9733; &#9733; &#9733; &#9733; &#9733; </p>
                </div>
                <div className=" flex gap-[40px] mt-[30px]"> 
                    {data?.events?.map((item) => (
                        <SpecOfferCard
                            key={item?.id}
                            title={item?.title}
                            des={item?.description}
                        />
                    ))}
                </div>             
           </Container>
        </>
    )
}