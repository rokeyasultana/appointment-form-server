const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wytyd6s.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(uri);
async function run (){
try{
    
    const appointmentCollection = client.db('appointment-form').collection('appointments');


    //post appointment
    app.post('/appointment', async (req, res) => {
      appointments = req.body;
      const result = await appointmentCollection.insertOne(appointments)
      res.send(result);
   }); 

   
}

finally{

}


}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Appointment form')
})

app.listen(port, () => {
  console.log(`Appointment form  listening on port ${port}`)
})
