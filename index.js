const express = require('express');

// need express cors to send data to webpage as API AND USE {app.use(cors())} FUNCTION
const cors = require("cors"); 

//  need express.js midleware EXPRESS BODY PARSER AND USE {app.use(bodyParser.json())} FUNCTION

const bodyParser = require('body-parser'); 




const app = express();

app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => res.send("ALHAMDULILLAH Md. Omar let's start learning node js -- yay"));

app.get ('/md-omar', (req, res) => {
    res.send({name: "Md. Omar Faruk", age: "25", learning: "node.js"});
})

const users = ["Md. Omar Faruk", "Md. Joshim", "Md. Hasan", "Md. Hossian", "Md. Mazharul",];

app.get ('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(req.query.mdomar);
    const name = users[userId];
    res.send({userId, name});
    
});

                // POST POST POST POST POST
app.post('/addUser', (req, res) => {
    console.log("data recieved", req.body);
    const user = req.body;
        user.Id = Math.random()*10;
        res.send(user);
})


app.listen(7000, () => console.log("ALHAMDULILLAH it's working fine"));