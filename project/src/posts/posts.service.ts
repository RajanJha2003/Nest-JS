import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {

    private posts:Post[]=[
        {
            id:1,
            title:"First Post",
            content:"This is the first post",
            authorName:"John Doe",
            createdAt:new Date(),
            updatedAt:new Date()
        },
        {
            id:2,
            title:"Second Post",
            content:"This is the second post",
            authorName:"Jane Doe",
            createdAt:new Date(),
            updatedAt:new Date()
        },
        {
            id:3,
            title:"Third Post",
            content:"This is the third post",
            authorName:"John Doe",
            createdAt:new Date(),
            updatedAt:new Date()
        }
    ]

    findAll():Post[]{
        return this.posts
    }

    findOne(id:number):Post{
        const singlePost=this.posts.find(post=>post.id===id);
        if(!singlePost){
            throw new NotFoundException("Post not found")
        }
        
        return singlePost;
    }
}
