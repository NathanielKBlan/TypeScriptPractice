export class LikeButton{
  constructor(private pressed: boolean, private likes: number){
  }

  isLiked(){
    if(this.pressed){
      this.likes++;
      console.log("This post has been liked. Number of likes is " + this.likes);
    }else{
      console.log("This post has only " + this.likes + " likes.");
    }
  }

  get isPressed(){
    return this.pressed;
  }

  get likesNum(){
    return this.likes;
  }
}
