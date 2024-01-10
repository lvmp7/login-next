'use client'

import { User as PrismaUser } from "@prisma/client"
import User from "@/components/user/user"

export default async function UserList(){
    return fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((data) => {
        if(data.users === undefined ) {
            return ( <ul><li></li></ul> )
        } else {
            return (
                <ul>
                {    
                    data.users.map((prismaUser: PrismaUser) => (
                    <li key={prismaUser.id} className="gap-4 p-2">
                        <User name={prismaUser.name} email={prismaUser.email} />
                    </li>
                ))}
                </ul>
            )
        }
    })
}