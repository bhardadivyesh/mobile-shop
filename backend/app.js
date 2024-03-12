const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()

const swaggerOptions ={
    swaggerDefinition : {
        info:{
            title : "bharada divyesh",
            version : "1.0.0"
        }
    },
    apis :['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
console.log(swaggerDocs);
app.use('/form-data',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

/**
 * @swagger
 * /form-data:
 *      post:
 *          description : get all form data
 *          responses :
 *              200:
 *                  description : Success
 * 
 */

app.post('/data',(req,res)=>{
    res.send([
        {
          id : 1,
          name : "divyesh"

        }
    ])
})

app.listen(5000, ()=>console.log("listening on 5000"))
