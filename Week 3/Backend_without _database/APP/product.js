// /// create products api in the same file

// // description of productObj :
//     {
//         productId;
//         Name;
//         Price ;
//         brand
//     }


// GET /products
// GET /products/id
// GET /products/name
// POST
// PUT /products/id




import exp from "express"

export const productApp = exp.Router()


    // create a product array
    let products=[]

    // read the products data
    productApp.get("/products",(req,res)=>
        res.json({message:"products",products})
    )

    // read product by id
    productApp.get("/products-id/:id",(req,res)=>{
        //read id from url parameter
        let productId = Number(req.params.id)

        //read product by id
        let product = products.find(productObj => productObj.id === productId)

        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        else{
            res.status(200).json({message:"product",payload:product})
        }
    })

    // read product by name
    productApp.get("/products-name/:name", (req, res) => {

        //read name from url parameter
    let productName = req.params.name.toLowerCase();
        //read product by name
    let product = products.find(productObj =>
        productObj.name && productObj.name.toLowerCase() === productName
    );
    // check if the name is present or not
    if (!product) {
        return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product", payload: product });
});



    //entering the product details uusing post
    productApp.post('/products',(req,res)=>{
        let newProduct = req.body // read the req body 
        products.push(newProduct) //push the newProduct
         res.status(201).json({message:"newProduct",newProduct})
        
    }
    )
    
    //Update the product details
    productApp.put('/products/id',(req,res)=>{
        //send res
        //get modified product details from req
        let productModified = req.body
        let productId = productModified.id
        //find the product with id exists is array
        let verifyProduct = products.findIndex((prodObj) => prodObj.id === productId)
        if(verifyProduct === -1){
            //if product is not found,send res as "product not found"
            res.status(401).json({message:"product not found"})
        }
        //find res as "product modified"
        else{
        products.splice(verifyProduct,1,req.body)
        res.status(201).json({message:"product modified",productModified})
        }
    })

    // delete request handling route(delete user)
        productApp.delete('/products/:id',(req,res)=>{
        // read id from url parameter
        let productId = Number(req.params.id) //{id : '100'}

        // read product by this id
        let product = products.findIndex(productObj => productObj.id === productId)


        if(product === -1)
             //if product is not found,send res as "product not found"
                return res.status(404).json({message:"user not found"})
            else{
                //deleted prodoct will be displayed
                let deletedProduct = products.splice(products,1)
            res.status(200).json({message:"User Deleted",deletedProduct})
            }
        })


