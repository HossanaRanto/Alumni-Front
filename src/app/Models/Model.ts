export interface Authentication{
    Username:string,
    Password:string
}
export interface TokenModel{
    accessToken:string,
    refreshToken:string,
    user:any,
    error?:string,
    role:string
}
export interface User{
    id:number,
    username:string,
    password?:string,
    confirmpassword?:string,
    email:string,
    firstname:string,
    lastname:string,
    gender:boolean,
    birthdate:string,
    contact:string,
    address:Address,
}

export interface Address{
    country:string,
    city:string,
    postalcode:number
}

export interface UserSerializer{
    user:User,
    role:string,
    profilPicture:string,
    coverPicture:string
}

export interface Request{
    id:number,
    user:User,
    created_at:string,
}
export interface Message{
    message:string,
    isSender:boolean,
    dateSend:string
}
export interface UserExtended{
    user:User,
    role:string,
    profilPicture:string
}

export interface LastMessage{
    user:UserExtended,
    lastMessage:string
}
export interface Post{
    id:number,
    publisher:User,
    poste_at:string,
    content:string,
    imagePath:string
}
export interface PostView{
    post:Post,
    isLiked:boolean
}
export interface Commentary{
    commentator:User,
    content:string
}
export interface University{
    id:number,
    name:string,
    description:string,
    address:Address,
    contact:string,
    email:string,
    created_at:string,
    administrator:User,
    imageCover:string
}
export interface UniversityView{
    university:University,
    isEnrolled:boolean,
    isRequestSent:boolean
}
export interface RequestSerializer{
    user:UserSerializer,
    request:{
        id:number,
        created_at:string
    }
}
export interface Point{
    value:number
}
export interface MessageOffset{
    user_id:number,
    value:number,
    messages:Message[],
    hasRecord:boolean,
    messagenotSent:string
}
export interface UniversityPost{
    name:string,
    description:string,
    contact:string,
    email:string
}