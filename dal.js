const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const uri = 'mongodb+srv://antoniotravisani16:Aa00151200@cluster1.ontlmng.mongodb.net/BBankdatabase?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://antoniotravisani16:Aa00151200@ac-bzdp20r-shard-00-00.ontlmng.mongodb.net:27017,ac-bzdp20r-shard-00-01.ontlmng.mongodb.net:27017,ac-bzdp20r-shard-00-02.ontlmng.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-ynky7b-shard-0&ssl=true';

let db = null;

// Function to connect to MongoDB
function connectToDB() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, client) {
            if (err) {
                reject(err);
            } else {
                console.log("Connected successfully to db server");
                db = client.db('BBankdatabase');
                resolve();
            }
        });
    });
}

// Ensure the connection is established before exporting the functions
connectToDB()
    .then(() => {
        // Functions to interact with the database
        function create(name, email, password) {
            return new Promise((resolve, reject) => {
                const collection = db.collection('users');
                const doc = { name, email, password, balance: 0 };
                collection.insertOne(doc, { w: 1 }, function (err, result) {
                    err ? reject(err) : resolve(doc);
                });
            });
        }

        function find(email) {
            return new Promise((resolve, reject) => {
                const customers = db
                    .collection('users')
                    .find({ email: email })
                    .toArray(function (err, docs) {
                        err ? reject(err) : resolve(docs);
                    });
            });
        }

        function findOne(email) {
            return new Promise((resolve, reject) => {
                const customers = db
                    .collection('users')
                    .findOne({ email: email })
                    .then((doc) => resolve(doc))
                    .catch((err) => reject(err));
            });
        }

        function update(email, amount) {
            return new Promise((resolve, reject) => {
                const customers = db
                    .collection('users')
                    .findOneAndUpdate(
                        { email: email },
                        { $inc: { balance: amount } },
                        { returnOriginal: false },
                        function (err, documents) {
                            err ? reject(err) : resolve(documents);
                        }
                    );
            });
        }

        function all() {
            return new Promise((resolve, reject) => {
                const customers = db
                    .collection('users')
                    .find({})
                    .toArray(function (err, docs) {
                        err ? reject(err) : resolve(docs);
                    });
            });
        }

        function balance(email) {
            return new Promise((resolve, reject) => {
                const customers = db
                    .collection('users')
                    .find({ email: email })
                    .toArray()
                    .then((docs) => {
                        console.log(docs);
                        resolve(docs);
                    })
                    .catch((err) => reject(err));
            });
        }

        module.exports = { create, findOne, find, update, all, balance };
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
