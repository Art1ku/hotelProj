import Header from "../../components/header/Header"
import MainSlider from "../../components/swiper/slider"
import Footer from "../../components/footer/Footer"
import classes from "../styles/About.module.scss"
import Container from "../../components/ui/Container/Container"

export default function About(){



    return(
        <>
            <Header />
            <MainSlider />
                <div id="about" className={classes.wrapper}>
                    <Container>
                        <div className={classes.nameWrapper}>
                            <h1 className={classes.Name}>About <br />
                            Сайт был сделан:</h1>
                        </div>
                        <div className={classes.insideWrapper}>
                            <div className={classes.developers}>
                                <p className={classes.highP}>Back developers</p>
                                <div className={classes.aboutP}>
                                    <p className={classes.lowP}>Айдай</p>
                                    <p className={classes.lowWP}>1. Великая ученица Слизерина <br /> 2. Великий коллекционер K-Pop  <br /> 3. Киборг убийца</p>
                                </div>
                                <div className={classes.aboutP}>
                                    <p className={classes.lowP}>Надежда</p>
                                    <p className={classes.lowWP}>1. Анимешник до плоти и костей <br /> 2. Начинающий маг в бэк разработки <br /> 3. Юморист от бога</p>
                                </div>
                                <div className={classes.aboutP}>
                                    <p className={classes.lowP}>Камиль</p>
                                    <p className={classes.lowWP}>1. Ритм-игры это моя жизнь <br /> 2. Мистик бэк <br /> 3. Привет Шарлотта</p>
                                </div>
                            </div>
                            <div className={classes.developers}>
                                <p className={classes.highP}>Front developers</p>
                                <div className={classes.aboutP}>
                                    <p className={classes.lowP}>Сайрекс</p>
                                    <p className={classes.lowWP}>1. Люблю кс <br /> 2. Джотаро Токийский <br /> 3. Код был сделан в 2:00</p>
                                </div>
                                <div className={classes.aboutP}>
                                    <p className={classes.lowP}>@satorwxz</p>
                                    <p className={classes.lowWP}>1. Мощный, есть же <br /> 2. АСУС <br /> 3. Что будем делать</p>
                                </div>
                            </div>
                            <div className={classes.developers}>
                                <p className={classes.highP}>Design developers</p>
                                <p className={classes.lowP}>I dk</p>
                            </div>
                        </div>
                    </Container>
                </div>
            <Footer />
        </>
    )
}