/*
1. Practical assessment
Using array of users:
 print all names
 print only active users
 find user by id
 count users by role
 print all admin emails
*/

// const usersName=["Sachin","Murli", "Amriteshwar","Munna","Amar"];
// usersName.forEach((name)=>{console.log(name)});    aaa

// andkd

const users=[
    {name:"Sachin",active:true,id:0,role:"admin",email:"Sachin@gmail.com"},
    {name:"Murli",active:true,id:1,role:"user",email:"Murli@gmail.com"},
    {name:"Amriteshwar",active:true,id:2,role:"user",email:"Amriteshwar@gmail.com"},
    {name:"Munna",active:false,id:3,role:"user",email:"Munna@gmail.com"},
    {name:"Amar",active:false,id:4,role:"admin",email:"Amar@gmail.com"},
]

// print all names
users.forEach((user)=>{console.log(user.name)});

//print only active users
users.forEach((user)=>{
    if(user.active===true)
    {
        console.log(user.name, " ", user.email, " ",user.id," ", user.role);
    }
})

//find user by id
const finduserById=(id)=>{
    users.forEach((user)=>{
    if(id===user.id)
    {
        console.log(user);
    }
    })
}

finduserById(1);

//count users by role
{
let admn=0,user=0;

users.forEach((u)=>{
     if(u.role==="admin")
     {
        admn++;

     }
     else{
        user++;
     }
})
console.log({admin:admn,user:user})

}

//print all admin emails

users.forEach((user)=>{

    if(user.role==="admin")
    {
        console.log(user.email);
    }
})




