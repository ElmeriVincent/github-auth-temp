import React from 'react'
import Image from 'next/image';
import { signIn } from "next-auth/react"
import { FaGithub } from 'react-icons/fa';

export default function LoggedOut() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="p-6 max-w-sm mx-auto bg-[#1E1E1E] rounded-xl shadow-lg flex items-center space-x-4">
                <div>
                    <div className="text-xl font-medium text-white text-center">Authentication</div>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Choose your authentication method below</p>
                    <ul className="my-4 space-y-3">
                        <li>
                            <a onClick={() => signIn()} className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <FaGithub className='h-4' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Github</span>
                                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
