import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import AuthActions from "../../modules/auth/actions/auth-actions";

export default function SingUpForm() {
    return (
      <Card className="w-[350px]">
        <form action={AuthActions.createAccount}>
          <CardHeader>
            <CardTitle>Next Evolution</CardTitle>
            <CardDescription>Preencha os campos abaixo para criar sua conta</CardDescription>
          </CardHeader>
          <CardContent>        
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="Your email address" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" name="password" type="password" placeholder="Your password" required />
              </div>
            </div>
         </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Criar conta</Button>
          <Link href='/portal/login' className={buttonVariants({variant: 'link'})}>Já tenho conta</Link>
        </CardFooter>
        </form>
      </Card>
    )
}