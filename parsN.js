const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')

let link = 'https://meridian.kpnu.edu.ua/?paged='


const parskpnu = async () => {
    try {
        let arr = []
        let i = 1
        let flag = false
        i = 1
        while(true){
            console.log("parseN: page", i);
            await axios.get(link + i)
                .then(res => res.data)
                .then(res => {
                    let html = res
                    $ = cheerio.load(html)
                    $(html).find('article.mt-post').each((index, element) => {
                        
                        let item = {
                            data: $(element).find('span.mt-date').text().trim(),
                            title: $(element).find('h3.mt-title').text(),
                            autor: $(element).find('a.url.fn.n').text(),
                            url: $(element).find('a').attr('href'),
                            img: $(element).find('img').attr('data-src')
                        }

                        arr.push(item)
                    })
                    if( i == 1){
                        flag = true
                    }
                })
             .catch(err => console.log(err))


            if(flag){
                fs.writeFile('parseN.json', JSON.stringify(arr), function(err){
                   if(err) throw err
                    console.log('Saved json file');
                })
                break
            }
            i++
        }

    } catch(e){
        console.log('err - ', e);
    }
};
parskpnu();
/*
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
let link = 'https://meridian.kpnu.edu.ua/?paged='

const parskpnu = async () => {
    try {
        let arr = []
        let i = 1
        let flag = false
        i = 95
        while(true){
            console.log("page", i);
            await axios.get(link + i)
                .then(res => res.data)
                .then(res => {
                    let html = res
                    $ = cheerio.load(html)
                    $(html).find('article.mt-post').each((index, element) => {
                        
                        let item = {
                            data: $(element).find('span.mt-date').text().trim(),
                            title: $(element).find('h3.mt-title').text(),
                            autor: $(element).find('a.url.fn.n').text(),
                            url: $(element).find('a').attr('href')

                        }

                        arr.push(item)
                    })
                    if( i == 100){
                        flag = true
                    }
                })
             .catch(err => console.log(err))


            if(flag){
                fs.writeFile('kpnu.json', JSON.stringify(arr), function(err){
                   if(err) throw err
                    console.log('Saved json file');
                })
                break
            }
            i++
        }

    } catch(e){
        console.log('err - ', e);
    }
};
parskpnu();
*/