'use client'
import SpecOfferCard from "../SpecOfferCard/SpecOfferCard"
import Container from "../../ui/Container/Container"
import { useStore } from "zustand";
import { useEffect } from "react";
import { CardStore }from "../../../stores/cardStore/cardStore"

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
                <div className="grid gap-[40px] grid-cols-4 mt-[75px]"> 
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