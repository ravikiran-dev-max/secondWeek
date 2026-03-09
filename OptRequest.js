console.log("OTP ")
count=0
setTimeout(()=>{
    console.log("OTP is 1818")
},1000)
let intervelId=setInterval(()=>{
  count=count+1
  console.log(count)   
  if(count===5)
  {
    console.log("Resend OTP")
    clearInterval(intervelId)
  }
},1000)
console.log("OTP sent SuccessfullY")
