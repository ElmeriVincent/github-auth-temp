import React from 'react'
import Image from 'next/image';
import { signOut } from "next-auth/react"

export default function LoggedIn({ session }) {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <div>
                <h1 className='text-[#494949] font-bold text-2xl text-center mb-2'>Authenticated!</h1>
            </div>
            <div className="p-6 max-w-sm mx-auto bg-[#494949] rounded-xl shadow-lg flex items-center space-x-4">
                <div>
                    <div className='flex items-center justify-center mb-2'>
                        <Image className='rounded-full' src={session.user.image} alt="User Image" width={128} height={128} />
                    </div>
                    <div className='text-center'>
                        <h1 className="text-lg text-white">{session.user.name}</h1>
                        <p className="text-white">{session.user.email}</p>
                        <button
                            className="mt-2 px-4 py-1 text-sm text-white font-semibold rounded-full border border-white] hover:text-black hover:bg-white hover:border-transparent"
                            onClick={() => signOut()}>Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}