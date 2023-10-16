const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const dbURI = 'mongodb+srv://sam:1234@cluster0.6wq7sr3.mongodb.net/test?retryWrites=true&w=majority';
 mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB successfully connected"))
 .catch(err => console.log(err));
// const { MongoClient } = require('mongodb');
// const client = new MongoClient('mongodb+srv://sam:1234@cluster0.6wq7sr3.mongodb.net/test?retryWrites=true&w=majority');
// await client.connect();


const chatSchema = new mongoose.Schema({
  message: String
});

const Chat = mongoose.model('Chat', chatSchema);

app.use(cors());
app.use(express.json());

app.get('/chat', async (req, res) => {
  const chats = await Chat.find();
  res.send(chats);
});
app.post('/chats', (req, res) => {
  let chat = new Chat({
    message: req.body.message
  });

  chat.save()
    .then((chat) => {
      res.status(200).json({'chat': 'Chat added successfully'});
    })
    .catch((err) => {
      res.status(400).send('adding new chat failed');
    });
});

//   const chat = { text: req.body.body, created_at: new Date() };
//   const collection = db.collection('chats');
//   collection.insertOne(chat, (err, result) => {
//     if (err) { 
//       console.log(err); 
//       res.send({ 'error': 'An error has occurred' }); 
//     } else {
//       res.send(result.ops[0]);
//     }
//   });
// });


app.listen(3000);
