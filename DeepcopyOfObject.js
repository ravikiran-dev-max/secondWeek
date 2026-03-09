 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
 console.log("Original Object : ",order)
 const CopyOriginal=structuredClone(order)
 CopyOriginal.customer.address.city="RangaReDDy"
 CopyOriginal.items[0].price=65000
 console.log("Origanl Object After Updation:",order)
 console.log("Copied Object After Updation:",CopyOriginal)