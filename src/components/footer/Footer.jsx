
import classes from "./Footer.module.scss"
import Link from "next/link"

export default function Footer(){

    const navigationContent = [
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Special offers',
            link: '/offers'
        },
        {
            title: 'Rooms',
            link: '/rooms'
        },
        {
            title: 'Services',
            link: '/services'
        },
        {
            title: 'Contacts',
            link: '/contacts'
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