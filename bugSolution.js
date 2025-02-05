const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});

const someAsyncOperation = () => {
  //Simulate an error
  return new Promise((resolve, reject) => {
    //Simulate error condition
    const errorCondition = true; //change to false to avoid error
    if(errorCondition){
        reject(new Error('Something went wrong!'));
    } else {
        resolve('Success!');
    }
  })
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});