'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export const AuthStatus = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()} className="text-gray-600 hover:text-gray-800">Sign out</button>
      </div>
    )
  }
  return <Link href="/api/auth/signin" className="text-gray-600 hover:text-gray-800">Sign in</Link>
}
