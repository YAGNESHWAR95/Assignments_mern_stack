// // /// create products api in the same file

// // // description of productObj :
// //     {
// //         productId;
// //         Name;
// //         Price ;
// //         brand
// //     }


// // GET /products
// // GET /products/id
// // GET /products/name
// // POST
// // PUT /products/id



// import exp from "express"
//     //Create Server
//     const app = exp()
//     //Assign port number
//     app.listen(3000,()=>console.log('Httpp server listening port 3000..'))

//     //body passing middleware
//     app.use(exp.json())

//     // create a product array
//     let products=[]

//     // read the products data
//     app.get("/products",(req,res)=>
//         res.json({message:"products",products})
//     )

//     app.get("/products-id/:id",(req,res)=>{

    
//     })

//     //entering the product details uusing post
//     app.post('/products',(req,res)=>{
//         let newProduct = req.body // read the req body 
//         products.push(newProduct)
//          res.status(201).json({message:"newProduct",newProduct})
        
//     }
//     )

//     app.put('/products/id',(req,res)=>{
//         let productModified = req.body
//         let productId = productModified.id
//         let verifyProduct = products.findIndex((prodObj) => prodObj.id === productId)
//         if(verifyProduct === -1){
//             res.status(401).json({message:"product not found"})
//         }
//         else{
//         products.splice(verifyProduct,1,req.body)
//         res.status(201).json({message:"product modified",productModified})
//         }
//     })



