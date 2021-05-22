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
const path = require('path');
const client = require('./db');
client.connect().then(() => console.log("connected to db"));

//uploading to own server 
app.use(exp.static(path.join(__dirname, './dist/postgresqlwithng')))

// get handler
app.get('/getalldata', async (req, res) => {
    try {
        const allData = await client.query("SELECT * FROM orders1");
        res.send({ result: allData.rows })
    } catch (error) {
        console.error(error.message);
        res.send({ message: 'something went wrong', err: error })
    }

})

// post handler
app.post('/create', async (req, res) => {
    try {
        const { orderno, orderdate, name, address, phone, totalvalue } = req.body;
        await client.query("INSERT INTO orders1 (orderno,orderdate, name, address,phone,totalvalue) VALUES ($1,$2,$3,$4,$5,$6)",
            [orderno, orderdate, name, address, phone, totalvalue]);
        res.send({ message: "data inserted" })
    } catch (err) {
        console.error(err.message);
        res.send({ message: err })
    }
})

//get request with ID
app.get('/getorder/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await client.query("SELECT * FROM orders1 WHERE orderno = $1",[id])
        res.send(data.rows)
    } catch (err) {
        console.error(err.message);
        res.send({message:err})
    }
})

// Update data
app.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const { orderdate, name, address, phone, totalvalue } = req.body;
        await client.query("UPDATE orders1 SET (orderdate, name, address, phone, totalvalue) = ($1,$2,$3,$4,$5) WHERE orderno = $6",
        [orderdate, name, address, phone, totalvalue,id]);
        res.send({message:"successfully updated"})
    } catch (err) {
        console.error(err.message);
        res.send({message:err})
    }
})

// Delete data 
app.delete('/remove/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        await client.query("DELETE FROM orders1 WHERE orderno = $1",[id]);
        res.send({message:"data deleted"})
    } catch (err) {
        console.error(err.message);
        res.send({message:err})
    }
})