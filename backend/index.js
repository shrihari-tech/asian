const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const user = require('./Routes/User');
const task = require('./Routes/Task');
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.listen(port, () => {   
    console.log(`Server is running on port ${port}`);
});

app.use('/user', user);
app.use('/task', task);
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// mongoose.connect('mongodb://localhost:27017/asian',)
mongoose.connect('mongodb+srv://shriharibh:shrihari@cluster0.mowrkkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',)
.then(() => {
    console.log("MongoDB connected successfully!");
})
.catch((err) => {
    console.log("MongoDB connection failed!", err);
});