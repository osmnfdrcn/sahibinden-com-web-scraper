const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const PORT = 5000

app.get('/', async (req, res) => {
    const { offset, query } = req.query
    const url = `https://www.sahibinden.com/ikinci-el-ve-sifir-alisveris?pagingOffset=${offset}&query_text=${query}`
    const results = []

    try {
        const response = await axios(url)
        const html = response.data
        const $ = cheerio.load(html)

        $('.searchResultsItem', html).each(function () {
            const image = $(this).find('.searchResultsLargeThumbnail a img').attr('src')
            const price = $(this).find('.searchResultsPriceValue div span').text()
            const title = $(this).find('a').attr('title')
            const url = $(this).find('a').attr('href')
            results.push({
                title,
                price,
                url,
                image
            })
        })

        res.status(200).json({ results })
    } catch (error) {
        console.log(error)
    }

})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


