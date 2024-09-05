import Header from "../../components/header/Header"
import MainSlider from "../../components/swiper/slider"
import Footer from "../../components/footer/Footer"
import classes from "../styles/Services.module.scss"
import Container from "../../components/ui/Container/Container"

export default function Services(){



    return(
        <>
            <Header />
            <MainSlider />
            <div id="service" className={classes.wrapper}>
                <Container>
                    <div className={classes.nameWrapper}>
                        <h1 className={classes.Name}>Services </h1>
                    </div>
                    <div className="m-auto mt-80 text-center">
                        <p className="text-6xl text-white">In work...</p>
                    </div>
                    
                </Container>

            </div>

            <Footer />
        </>
    )
}