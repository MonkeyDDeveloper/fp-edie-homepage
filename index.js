const express = require('express');
const path = require('path');
const app = express();
const indexFile = path.join(__dirname, 'index.html');
const css = path.join(__dirname, 'css')
// const js = path.join(__dirname, 'javascript')
const assets = path.join(__dirname, 'assets');
const port = process.env.PORT || 3000;


app.use('/public', express.static(css))
// app.use('/public', express.static(js))
app.use('/public', express.static(assets))

app.get('/', (req, res) => {
    res.sendFile(indexFile)
})

app.listen(port, () => console.log(`Server running on port ${port}`))