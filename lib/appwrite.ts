import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
export const config={
    endpoint:"https://cloud.appwrite.io/v1",
    platform:'com.walidriss.testApp',
    projectId:'6658cfab002285f0c792',
    databaseId:'6658dc82000eabb3cbbd',
    userCollectionId:'6658dca2003e2b739587',
    videoCollectionId:'6658dcb9002ea0b0487b',
    storageId:'6658de35001c6429ff3d'

}



// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.databaseId)
    .setPlatform(config.platform) // Your project ID
     // Your application ID or bundle ID.
;



const account = new Account(client);
const avatars=new Avatars(client);
const databases=new Databases(client);
export const createUser=async({email,password,username}:{email:string,password:string,username:string})=>{
 try {
    console.log(config.platform);
    const newAccount=await account.create(ID.unique(),email,password,username)
    
    if(!newAccount) throw Error;

    const avatarUrl=avatars.getInitials(username)
    await signIn(email,password);
    const newUser=await databases.createDocument(
        config.databaseId,config.userCollectionId,ID.unique(),{accountId:newAccount.$id,email,username,avatar:avatarUrl}
    )
    return newUser
 } catch (error:any) {
    console.log(error);
    throw new Error(error)
    
 }

}

export async function signIn(email:string,password:string){
    try {
        const session=await account.createEmailPasswordSession(email,password)
        return session;
    } catch (error:any) {
       
        throw new Error(error)

        
    }
}

