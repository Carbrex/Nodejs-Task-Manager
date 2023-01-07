const express = require("express");
const app = express();



// routes
// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task
app.get('/hello', (req,res)=>{
    res.send('Task Manager App');
})


const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})

