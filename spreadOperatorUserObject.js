
let user = {
 name: "Ravi",
city: "Hyderabad"
};
                        
                        
                        
 /*    Tasks
                        
   -> Create a new object updatedUser
                              
   -> Copy all properties from user
                              
  -> Add a new property age: 25
                              
   -> Print both objects*/
   let updatedUser={...user}
   updatedUser.age=20
   console.log(user)
   console.log(updatedUser)
                        