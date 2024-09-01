'use client'
import ProductCard from "../productCard/ProductCard"
import Container from "../../ui/Container/Container"
import { useStore } from "zustand";
import { useEffect } from "react";
import { CardStore }from "../../../stores/cardStore/cardStore"


export default function Products(){

    const { data, loading, error, fetchData } = useStore(CardStore)

    useEffect(() => {
        fetchData()
    }, [])

    // useEffect(() => {
    //     console.log(data, 'data') 
    // }   , [data])   

    if (loading){
        return <div>Loading...</div>
    }
    if (error){
        return <div>Error: {error}</div>
    } 

    return(
        <>
            <Container>
                <div className="grid gap-[40px] grid-cols-4 "> 
                    <div className="bg-[white]">
                        {data?.banners?.map((item) => (
                            <p key={item.id}>{item?.title}</p>
                        ))}
                    </div>
                    <div className="bg-[white]">
                        {data?.events?.map((item) => (
                            <p key={item.id}>{item?.title}</p>
                        ))}
                    </div>
                    <div className="bg-[white]">
                        {data?.hotel_rooms?.map((item) => (
                            <p key={item.id}>{item?.title}</p>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}