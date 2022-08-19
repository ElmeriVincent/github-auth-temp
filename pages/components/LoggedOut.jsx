import React from 'react'

import { signIn } from "next-auth/react"
import { FaGithub } from 'react-icons/fa';

export default function LoggedOut() {
    return (
        <div className="mt-96 mx-4">
            <h1 className="text-center text-4xl font-bold text-[#494949]">Authentication Template Using NextAuth!</h1>
            <p className="mt-2 text-center text-xl font-semibold text-[#494949]">Just Click The Github Logo And Do As Instructed</p>
            <div className='mt-10 flex items-center justify-center'>
                <div className="p-4 max-w-sm mx-auto bg-[#6a97db] rounded-xl shadow-lg flex items-center">
                    <div>
                        <a onClick={() => signIn()} className="flex items-center p-2 rounded-lg  group hover:shadow bg-gray-700 hover:bg-gray-600 text-white cursor-pointer">
                            <FaGithub className='text-6xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
