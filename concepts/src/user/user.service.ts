import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
    // injecting services from other module
    // hello module must export helloservcie
    // user module msut import hello module
    constructor(private readonly helloService:HelloService){}

    getAllUsers(){
        return [
            {id:1, name:'John'},
            {id:2, name:'Jane'},
            {id:3, name:'Jack'},
        ]
    }


    getUserById(id:number){
        const user=this.getAllUsers().find(user=>user.id===id);
        return user;
    }

    getWelcomeMessage(userId:number){
        const user=this.getUserById(userId);

        if(!user){
            return 'User not found';
        }

        return this.helloService.getHelloWithName(user?.name)
    }
}
