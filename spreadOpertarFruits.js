 /*Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                           ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.
💡            ✅ Expected Output
                              { name: "Ravi", city: "Hyderabad" }
                              { name: "Ravi", city: "Hyderabad", age: 25 }
                        
                        👉 Original object should remain unchange*/
    let fruits=["apple","banana"]
    let moreFruits=[...fruits]
    moreFruits.push("orange")
    console.log(fruits)
    console.log(moreFruits)
