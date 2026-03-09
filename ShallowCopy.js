 
const user = {
id: 101,
 name: "Ravi",
preferences: {
       theme: "dark",
         language: "en"
        }
     };

/*🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
    console.log(user)
    console.log("Shallow Copy : ")
    const CopyUser={...user}
    CopyUser.name="Kiran"
    CopyUser.preferences.theme="light"
    console.log("After Updation ")
    console.log("Original Object : ")
    console.log(user)
    console.log("COPIED Object : ")
    console.log(CopyUser)