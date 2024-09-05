
import classes from "./Footer.module.scss"
import Link from "next/link"

export default function Footer(){

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
                <div className={classes.nav}>
                    {navigationContent.map((item, i) => (
                        <Link className={classes.navigation} key={i} href={item.link}>
                            <div className={classes.navPart}><p className={classes.navPartP}>{item.title}</p></div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}