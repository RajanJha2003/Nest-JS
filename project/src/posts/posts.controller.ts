import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService:PostsService){}

    @Get()
    findAll(@Query('search') search?:string):Post[]{
        const extractAllPosts=this.postsService.findAll()

        if(search){
            return extractAllPosts.filter(post=>post.title.toLowerCase().includes(search))
        }

        return extractAllPosts;
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number):Post{
        return this.postsService.findOne(id)

    }
}
