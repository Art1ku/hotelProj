'use client'
import classes from "./Header.module.scss"
import Link from "next/link"
import { Input } from "@mui/material"
import HeaderLogin from './HeaderLogin'
 
export default function Header(){

    const navigationContent = [
        {
            title: 'About',
            link: '/about#about'
        },
        {
            title: 'Special offers',
            link: '/offers#offers'
        },
        {
            title: 'Rooms',
            link: '/#main'
        },
        {
            title: 'Services',
            link: '/services#service'
        },
        {
            title: 'Contacts',
            link: '/contacts#contact'
        },
    ]

    return(
        <>
            <div className={classes.wrapper}>
                <div className={classes.secWrapper}>
                    <div className={classes.insideWrapper}>
                        <div className={classes.fHalf}>
                            <Link href={"/"} className={classes.LogoLinkStyle}>
                                <img className={classes.logoLink} src={"/icons/header/logo.png"} alt="" />
                                <p className={classes.logoP}>AMETHYST</p>
                            </Link>
                            <Input className={classes.HotelInput}></Input>
                        </div>
                        <div className={classes.sHalf}>
                            <div className={classes.payWrapper}>
                                <Link href={"/wallet"}><p className={classes.whiteP}>Payment for the reservation</p></Link>
                            </div>
                            <div className={classes.phoneNumbers}>
                                <img className={classes.phoneSVG} src={"/icons/header/phone1.png"} alt="" />
                                <div className={classes.phoneWrappper}>
                                    <a href="tel:+996550357780"><p className={classes.whiteP}>+996 550 35 77 80</p></a>
                                    <a href="tel:+996550357780"><p className={classes.whiteP}>+996 550 35 77 80</p></a>
                                </div>
                            </div>
                            <div className={classes.profile}>
                                <HeaderLogin />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className={classes.nav}>
                    {navigationContent.map((item, i) => (
                        <Link className={classes.navigation} key={i} href={item.link}>
                            <div className={classes.navPart}><p className={classes.navPartP}>{item.title}</p></div>
                        </Link>
                    ))}
            </div>
        </>
    )
}