import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

export interface UserProps{
    name: string,
    email: string,
}

export default function User(user: UserProps) {
        
    return (
        <div>
            <Card  className="justify-item-center p-0.5">
                <div className="flex gap-4">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}