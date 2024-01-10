import UserList from '@/components/user/userList'
import Link from 'next/link'
import { Suspense } from 'react'

export default function PortalPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-4xl font-bold'>Página do portal</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList/>
      </Suspense>
      <Link href='/api/logout'> Logout </Link>
    </main>
  )
}
