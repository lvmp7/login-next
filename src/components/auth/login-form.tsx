import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthActions from "../../modules/auth/actions/auth-actions";

export default function LoginForm() {
    return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Next Evolution</CardTitle>
            <CardDescription>Faça login para continuar</CardDescription>
          </CardHeader>
          <form action={AuthActions.login}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="Your email address" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" name="password" type="password" placeholder="Your password" />
                </div>
              </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit">Entrar</Button>
          </CardFooter>
          </form>
        </Card>
    )

}