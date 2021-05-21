//importing express module
const exp = require('express')
//creating server app
const app = exp();

//assigning port number to server
port = 3000;
app.listen(port, () => { console.log(`server started ${port}`) })

//body parsing
app.use(exp.json());

//importing path module
const path = require('path')

//uploading to own server 
app.use(exp.static(path.join(__dirname, './dist/postgresqlwithng')))

// get handler
app.get('/getalldata',(req,res)=>{
    res.send({ message: 'first req handled'})
    // logic to get data from postgreSQL
})

// post handler
app.post('/create',(req,res)=>{
    console.log(req.body);
    res.send({ message: 'data inserted success' })
    // logic to save data in postgreSQL
})