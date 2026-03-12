//Create MINi-express app(Separate Route)
import exp from 'express'
export const userapp=exp.Router()

//Test Data
let users=[]

//REST API -Represantation State Transfer
//Route to handle GET req of Client(http://localhost:3002/users)

userapp.get('/users',(req,res)=>{
    //send response to Client
    res.json({message:"All users",payload:users})
})


//Route to handle POST req of Client

userapp.post('/users',(req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.json({message:"User created "})

})
   
//Route to handle PUT req of Client
userapp.put('/users',(req,res)=>{
    //get modified user from client

    let modifiedUser=req.body
    //get index of existing user in user array
   let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
   if(index===-1)
   {
    return res.json({message:"User Not found"})
   }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send request
    res.json({message:"User Updated"})
  })


//Route to handle DELETE req of Client

userapp.delete('/users/:id',(req,res)=>{
    //get id of user from url parameter
    let idofUrl=Number(req.params.id)
    //find index of user
    let index=users.findIndex(userObj=>userObj.id===idofUrl)
    if(index===-1)
    {
        return res.json({message:"User Not found"})
    }
    //Delete user by index
    users.splice(index,1)
    res.json({message:"User Removed"})
    //send res
}
)


userapp.get("/u/:id",(req,res)=>{
    let paraid=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===paraid)
    if(user===undefined)
    {
      return res.json({message:"User not Found"})
    }
    res.json({message:"found",payload:user})
})
