import { PrismaClient } from "@prisma/client"
import * as bcrypt from 'bcrypt'
import { redirect } from "next/navigation"
import AuthService from "../service.ts/auth-service"

const prisma = new PrismaClient()

async function createAccount(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const hashpassword = await bcrypt.hash(password,10)

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashpassword
        }
    })

    redirect('/portal/login')
}

async function login(formData: FormData) {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const user = await prisma.user.findFirst({
        where:{
            email,
        }
    })
    
    if(!user){
        //usar optimistics update por exemplo para atualizar a tela com user ou senha invalido
        redirect('/portal/login')
    }
    const isMatch = bcrypt.compare(password, user?.password)
    if(!isMatch){
        //usar optimistics update por exemplo para atualizar a tela com user ou senha invalido
        redirect('/portal')
    }
    //criar sessao do usuario com JWT

    await AuthService.createSessionToken({sub: user.id, name: user.name, email: user.email})

    redirect('/portal')
}


const AuthActions = {
    createAccount,
    login,
}

export default AuthActions
