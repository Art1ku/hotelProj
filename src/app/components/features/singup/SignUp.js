'use client'
import { useEffect, useState } from "react"
import { Button, Input } from "antd"
import CustomModal from "../../ui/modal"

export default function SignUp(){

    const [isOpen, setisOpen] = useState(false)

    const [authData, setAuthData] = useState({
        username: {
            value: '',
            error: false,
        },
        phone_number: {
            value: '',
            error: false,
            pattern: /^\+996\d{3}\d{2}-\d{2}-\d{2}$/,
        },
        password: {
            value: '',
            error: false,
            pattern: /\w{4,}/,
        },
    })

    const postData = {
        username: '',
        phone_number: '',
        password: '',
    }


    const handleChange = (type, newValue) => {
        setAuthData((prev) => ({
            ...prev, [type]:{ ...prev[type], value: newValue, error: false }
        }))
    }

    const handleOpen= () => {
        setisOpen(true)
    }

    const handleClose= () => {
        setisOpen(false)
    }

    const handleCheckAuthdata = () => {
        const authKeys = Object.keys(authData)
        const authValues = Object.values(authData)

        const errorArr = []

        authKeys.forEach((item) => {
            
            if(authData[item].value){ // проверка на значение
                if(authData[item].pattern){ // проверка RegExp
                    if(authData[item].pattern.test(authData[item].value)){ // проверка на совпадение с RegExp
                        postData[item] = authData[item].value
                    }else{
                        errorArr.push(true)
                        setAuthData((prev) => ({
                            ...prev,
                            [item]:{...prev[item], error: true}
                        }))
                    }
                }else{
                    postData[item] = authData[item].value
                }
            }else{
                errorArr.push(true)
                setAuthData((prev) => ({
                    ...prev,
                    [item]:{...prev[item], error: true}
                }))
            }
        })

        return !errorArr.some((item) => item)
    }

    const handleAuth = () => {
        if(handleCheckAuthdata()){
                fetch('https://kamil123456780.pythonanywhere.com/api/register/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData),
                })
        }
        handleClose()
    }

    // useEffect(() => {
    //     console.log(authData)
    // }, [authData])

    return(
        <>
            <Button onClick={() => handleOpen()}>Sign up</Button>   
            <CustomModal title={'Sign In'} isOpen={isOpen} onCancel={handleClose} onOk={handleAuth}>
                <div className="flex flex-col gap-[12px] mt-[36px]">
                    <Input status={authData.username.error ? 'error':''} placeholder="Username" onChange={(e) => {handleChange('username', e.target.value)}}/>
                    <Input status={authData.phone_number.error ? 'error':''} placeholder="Number" onChange={(e) => {handleChange('phone_number', e.target.value)}}/>
                    <Input status={authData.password.error ? 'error':''} placeholder="Password" onChange={(e) => {handleChange('password', e.target.value)}}/>
                </div>
            </CustomModal>
        </>
    )
}