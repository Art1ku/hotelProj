import Header from "../../components/header/Header"
import MainSlider from "../../components/swiper/slider"
import classes from "../styles/Contacts.module.scss"
import Container from "../../components/ui/Container/Container"

export default function Contacts(){



    return(
        <>
            <Header />
            <MainSlider />
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.nameWrapper}>
                        <h1 className={classes.Name}>Contacts </h1>
                        <p className={classes.stars}>&#9733; &#9733; &#9733; &#9733; </p>
                    </div>
                    
                    <div className={classes.InsideWrapper}>
                        <div className={classes.addresName}>
                            <p className={classes.AddresP}>Addres:</p>
                            <p className={classes.CorrectAddres}>Bishkek city, 7 micro reg., 26/2</p>
                        </div>
                        <iframe className={classes.Map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.2224483588249!2d74.61839624301037!3d42.83007199748102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7000c5a29e3%3A0x61a5d35d76e6095d!2sCodify%20Academy!5e0!3m2!1sru!2skg!4v1725104783456!5m2!1sru!2skg" width="100%" height="518px"  loading="lazy"></iframe>
                        <div className={classes.gmailsPWrapper}>
                            <div className={classes.gmailPWrapper}> 
                                <p className={classes.textP}>Booking Department:</p>
                                <a href="tel:+996550357780" className={classes.textP}>+996550357780</a>
                                <a href="mailto:amethysthotels@gmail.com" className={classes.gamilP}>amethysthotels@gmail.com</a>
                            </div>
                            <div className={classes.gmailPWrapper}>
                                <p className={classes.textP}>Questions:</p>
                                <a href="mailto:amethysthotels@gmail.com" className={classes.gamilP}>amethysthotels@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.2224483588249!2d74.61839624301037!3d42.83007199748102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7000c5a29e3%3A0x61a5d35d76e6095d!2sCodify%20Academy!5e0!3m2!1sru!2skg!4v1725104783456!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}