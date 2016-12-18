const express = require('express');
const bodyParser = require('body-parser');
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const app = express();
const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'bike'
  },
});

app.use(bodyParser.json());

//returns id and bike from table modles in the bike database
app.get('/bikes', (req, res) => {
    knex('models').select('id', 'bike').then((models) => {
    return res.json({models})
    })

})

  // knex('models').insert({bike: body.the})
app.post('/bikes', (req, res) => {
    const body = req.body;
    console.log(body.the);
    knex.insert({bike: "zaz", description: "xc", maker_id: 4 }).into('models').then(id => {
        console.log(id);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
})

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                //console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
//fun unused tidbits
//app.use(express.static(process.env.CLIENT_PATH));
// console.log(`Server running in ${process.env.NODE_ENV} mode`);
