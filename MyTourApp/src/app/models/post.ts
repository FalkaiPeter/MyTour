import { UserMinimalModel } from './user-minimal';

export interface PostModel{
  id:string,
  author:UserMinimalModel,
  date:string,
  like_count:number,
  comment_count:number,
  //map info!
}
