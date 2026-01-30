// Create HTTP server
    // import express module
    import exp from "express"
    import { usersApp } from "./API/users.js"
    import {productApp} from "./API/product.js"
    //Create Server
    const app = exp()
    //Assign port number
    app.listen(4000,()=>console.log('Httpp server listening port 4000..'))

    //body passing middleware
    app.use(exp.json())
    app.use("/user-api", usersApp);
    app.use("/product-api",productApp);


    
