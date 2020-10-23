const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')


var month = new Date().getMonth()+1;
var year = new Date().getUTCFullYear();
var day = new Date().getDate()+1;

if (month < 10 && day < 10) {
 var all_time = year +"-"+"0"+ month +"-"+"0"+day;
} 
if (month < 10 && day >= 10) {
 var all_time = year +"-"+"0"+ month +"-"+""+day;
} 
if (month >= 10 && day >= 10) {
 var all_time = year +"-"+""+ month +"-"+""+day;
} 

if (month >= 10 && day < 10) {
 var all_time = year +"-"+""+ month +"-"+"0"+"-"+day;
}


let link = "https://ua.sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%BA%D0%B0%D0%BC'%D1%8F%D0%BD%D0%B5%D1%86%D1%8C-%D0%BF%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9/" + all_time


const parskpnu = async () => {
    try {
        let arr = []
        let i = 1
        let flag = false
        i = 1
        while(true){
            console.log("parseS: page", i);
            await axios.get(link)
                .then(res => res.data)
                .then(res => {
                    let html = res
                    $ = cheerio.load(html)
                    $(html).find('div.main.loaded').each((index, element) => {
                        
                        let item = {
                            day: $(element).find('p.day-link').text(),
                            date: $(element).find('p.date').text(),
                            month: $(element).find('p.month').text(),
                            min: $(element).find('div.min').text(),
                            max: $(element).find('div.max').text(),
                            img: $(element).find('img.weatherImg').attr("src"),
                            class: $(element).find('div.weatherIco').attr("class"),
                            title: $(element).find('div.weatherIco').attr("title"),
                            text: $(element).find('div.wDescription.clearfix').text(),
                            
                        }

                        arr.push(item)
                    })
                    if( i == 1){
                        flag = true
                    }
                })
             .catch(err => console.log(err))


            if(flag){
                fs.writeFile('parseS.json', JSON.stringify(arr), function(err){
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