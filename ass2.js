/*
2.Practical assessment
 return usernames only
 filter completed tasks
 find product by id
 total cart amount using reduce
 count users by role using reduce
*/

// return usernames only

const users=[
    {id:0,username:"sachin"},
    {id:1,username:"Amritesher"}
]

function userName()
{
    return users.map((user)=>{
        return user.username})
}

console.log(userName());

// filter completed tasks

const tasks=[{id:0,name:"task1",completed: true},
    {id:1,name:"task2",completed: false},
    {id:2,name:"task3",completed: true}
]

const completedtask= tasks.filter((task)=>{return task.completed})
console.log(completedtask);

//find product by id

const products=[
    {id:0,product:"phone"},
    {id:1, product:"latop"},
    {id:2, product:"charger"}
]

const product=products.find((p)=>{return p.id==2})
console.log(product)

// total cart amount using reduce

const cart=[
    {product:"laptop",price:50000},
    {product:"charger",price:50000}
]

const amount=cart.reduce((total,itm)=>{
  return total+itm.price;
},0)

console.log(amount)

//count users by role using reduce

{
    const users=[{id:0,role:"admin"},
        {id:1,role:"user"},
        {id:2,role:"admin"}
    ]

    let a=users.reduce((total,user)=>{
    return total+ (user.role==="admin"? 1:0);
},0)

    let b=users.reduce((total,user)=>{return total+(user.role==="user"?1:0)},0)

    console.log({admin: a,user: b});

}

//find product by id

{const products=[
    {id:0,product:"phone"},
    {id:1, product:"latop"},
    {id:2, product:"charger"}
]

const product=products.find((p)=>{return p.id==2})
console.log(product)
}

