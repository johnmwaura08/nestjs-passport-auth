import { Injectable } from '@nestjs/common';

export type User= {
    id: number;
    name: string;
    username: string;
    password: string
}
@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Marius",
            username: "marius",
            password: 'supasecure'
        }
    ]

    async findOne(username: string): Promise<User|undefined>{
        return this.users.find((x) => x.username == username)
    }
}
