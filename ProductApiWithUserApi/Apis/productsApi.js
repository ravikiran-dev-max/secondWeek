import exp from 'express'
export const productApp=exp.Router()

//Test Data
let products=[]

//REST API -Represantation State Transfer
//Route to handle GET req of Client(http://localhost:3002/products)

productApp.get('/products',(req,res)=>{
    //send response to Client
    res.json({message:"All users",product:products})
})


//Route to handle POST req of Client

productApp.post('/products',(req,res)=>{
    const newprodect=req.body
    products.push(newprodect)
    res.json({message:"User created "})

})
   
//Route to handle PUT req of Client

productApp.put('/products',(req,res)=>{
    //get modified user from client
    let modifiedProduct=req.body
    //get index of existing user in user array
   let index=products.findIndex(userObj=>userObj.id===modifiedProduct.productId)
   if(index===-1)
   {
    return res.json({message:"User Not found"})
   }
    //update user with index
    users.splice(index,1,modifiedProduct)
    //send request
    res.json({message:"User Updated"})
  })


//Route to handle DELETE req of Client

productApp.delete('/products/:id',(req,res)=>{
    //get id of user from url parameter
    let idofUrl=Number(req.params.id)
    //find index of user
    let index=products.findIndex(userObj=>userObj.id===idofUrl)
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

//Route to Filter the products By brand
productApp.get('/products/:brand',(req,res)=>{
    let filterBrands=products.filter((br)=>br.Brand===req.params.brand)
    if(filterBrands)
    {
        return res.json({message:"Products by brand",product:products})
    }
    res.json({message:"Proctucts By Brand",product:filterBrands})
})