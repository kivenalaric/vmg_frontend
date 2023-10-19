import React from 'react'
import Signup from '@/components/forms/signup/signup';
import "./style.scss"

function page() {
    return (
        <div className='main flex min-h-screen flex-col items-center justify-center p-24'>
            <Signup />
        </div>
    )
}

export default page
