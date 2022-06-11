const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/conntect.js')
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
//middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound)
app.use(errorHandlerMiddleware);

//routes
//app.get('/api/v1/tasks) => get all tasks
//app.post('/api/v1/tasks) => create a task
//app.get('/api/v1/tasks/:id) => get a task
//app.patch('/api/v1/tasks/:id) => update a task
//app.delete('/api/v1/tasks/:id) => delete a task


const port = process.env.PORT||3000;
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        // listen for requests on port 3000
        app.listen(port, console.log(`Listening on port ${port}...`));
    } catch (error){
        console.log(error)
    }
}
start()