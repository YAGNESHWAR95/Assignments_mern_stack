Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:

🎯 Task
1. Create a shallow copy of user
2. Change:
i. name in the copied object
ii. preferences.theme in the copied object
iii .Log both original and copied objects
iv. Observe what changes and what doesn’t


const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

let userCopy = {...user};

user.name = "hari";


user.preferences.theme = "yellow";
console.log(user)
console.log(userCopy)



Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:

🎯 Task:
1. Create a deep copy of order
2. Modify in copied object:
i. customer.address.city
ii. items[0].price


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

let orderCopy = structuredClone(order)
order.orderId ="123";

order.customer.name = "ravi"
console.log(order);
console.log(orderCopy)
