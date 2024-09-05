'use client'
import ProductCard from "../productCard/ProductCard"
import Container from "../../ui/Container/Container"
import { useStore } from "zustand";
import { useEffect , useState } from "react";
import { CardStore }from "../../../stores/cardStore/cardStore"
import classes from "./product.module.scss"


export default function Products(){

    const { data, fetchData } = useStore(CardStore)
    const [visibleItems, setVisibleItems] = useState(8)

    useEffect(() => {
        fetchData()
    }, [])

    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8)
    }

    return(
        <>
        <div id="main" className={classes.wrapper}>
            <Container>
               <div className={classes.nameWrapper}>
                    <h1 className={classes.Name}>Rooms </h1>
                    <p className={classes.stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                </div>
                <div className="grid gap-[40px] grid-cols-4 mt-[30px]"> 
                    {data?.hotel_rooms?.slice(0, visibleItems).map((item) => (
                        <ProductCard 
                            key={item?.id}
                            title={item?.title}
                            price={item?.price}
                            discount_price={item?.discount_price}
                            main_photo={item?.main_photo}
                        />
                    ))}
                </div> 
                {visibleItems < data?.hotel_rooms?.length && (
                    <div className={classes.buttonWrapper}>
                        <div className={classes.line}></div>
                        
                        <button onClick={loadMore} className={classes.loadMoreButton}>
                        Load More
                        </button>
                        <div className={classes.line}></div>
                    </div>
                    
                )}
            </Container>
            </div>
        </>
    )
}