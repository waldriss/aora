import { Models } from "react-native-appwrite";

export interface TUser extends Models.Document{
    accountId:string;
    avatar:string;
    email:string;
    username:string;
}

export interface TVideo extends Models.Document{
    prompt:string;
    thumbnail:string;
    title:string;
    video:string;
    creatorOfVideo:TUser

}