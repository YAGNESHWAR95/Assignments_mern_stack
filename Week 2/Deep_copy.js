// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// -----------------------------------------------

// 🧪 Given Data:

// 🎯 Task:
// 1. Create a deep copy of order
// 2. Modify in copied object:
// i. customer.address.city
// ii. items[0].price


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
