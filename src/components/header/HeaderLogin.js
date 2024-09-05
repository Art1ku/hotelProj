'use client'
import classes from "./Header.module.scss"
import SignIn from "../features/signin/SignIn"
import SignUp from "../features/singup/SignUp"
import { useStore } from "zustand"
import { ProfileStore } from "../../stores/ProfileStore/ProfileStore"
import { useEffect } from "react"

export default function HeaderLogin(){

    const access = localStorage.getItem('access') !== 'undefined' ? JSON.parse(localStorage.getItem('access')) : null

    const {profile, fetchProfile} = useStore(ProfileStore)

    useEffect(() => {
        fetchProfile(access)
    }, [])

    return(
        <>
        <div className={classes.profileWrapper}>
            {!access ?
                <div className={classes.profileInsideWrapper}>
                    <SignIn />
                    <div className={classes.line}/>
                    <SignUp />
                </div> :
                <p>{profile?.phone_number}</p>
            }
        </div>
        </>
    )
}