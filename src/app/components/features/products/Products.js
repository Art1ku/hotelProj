'use client'
import ProductCard from "../productCard/ProductCard"
import Container from "../../ui/Container/Container"
import { useStore } from "zustand";
import { useEffect } from "react";
import { CardStore }from "../../../../stores/cardStore/cardStore"


export default function Products(){

    const { data, loading, error, fetchData } = useStore(CardStore)

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (loading){
        return <div>Loading...</div>
    }
    if (error){
        return <div>Error: {error}</div>
    } 

    // const resData = await fetch("https://kamil123456780.pythonanywhere.com/api/hotel_rooms/")
    // const data = await resData.json()

    console.log(data)

    return(
        <>
        <Container>
            <div className="grid gap-[40px] grid-cols-4 "> 
                <h1>{data.title}</h1>
                {/* {res.map((item) => (
                    <ProductCard
                        // key={item.id}
                        // img={item.logo}
                        title={item.title}
                        // category={item.category.title}
                        // price={item.price}
                    />
                ))} */}
            </div>
        </Container>
      
        </>
    )
}