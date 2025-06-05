import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

// incoming request and response
// get , post,put  delete



@Controller('hello')
export class HelloController {
    //inject hello service from hello.service.ts
    // depedncy injection
    constructor(private readonly helloService: HelloService) {

    }
    @Get('first-route')
    getHello(): string {
        return this.helloService.getHello();

    }




    @Get('/user/:name')
    getUser(@Param('name') name: string): string {
        return `Hello ${name}`
    }

    @Get('query')
    getHelloWithQuery(@Query('name') name: string): string {
        return this.helloService.getHelloWithName(name);

    }
}
