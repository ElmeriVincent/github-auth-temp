import React from 'react'
import { useSession } from "next-auth/react"
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      {session ? <LoggedIn session={session} /> : <LoggedOut session={session} />}
    </>
  )
}