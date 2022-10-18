const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")

app.use(cors())
const categories = require("./data/category.json")
const news = require("./data/news.json")

app.get('/', (req, res) => {
    res.send("Hello from server site")
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/news-categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const categoryData = categories.find(category => category.id === id);
    res.send(categoryData)

})

app.get('/news', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log("Server running with ", port)
})