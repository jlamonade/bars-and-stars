const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('*', (req, res) => {
  res.send("hello world")
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
