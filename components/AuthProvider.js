'use client'

import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({}) => {
    return (
        <div>
            <SessionProvider session = {session}>
                {children}
            </SessionProvider>
        </div>
    )
}