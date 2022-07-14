let axios= require('axios');
const fs = require('fs');
//To read user input in console
const prompt = require("prompt-sync")({ sigint: true });
const name = prompt("search/leaderboard");
//Cases to view maximum occurences and to search the keyword that writes the random joke(fetched using API) to a file
if(name=="search"){
    const jokekey = prompt("Search joke keyword");
    get(jokekey)
}
else if(name=="leaderboard")
{
   leaderboard()
}
//To retrieve data from API call using axios and appending to a file
async function get(jokekey){const data = await axios.get('https://icanhazdadjoke.com/search?term='+jokekey , { headers: {
    'Accept': 'application/json',
    'Host':'icanhazdadjoke.com',
    "User-Agent": "axios 0.21.1"
}}).then(function(res){
    res => res.data;
   console.log("Writing to file")
   fs.appendFileSync('./a.txt', res.data.results[Math.floor(Math.random() * (res.data.results.length+1))].joke+"\r");

})
.catch(error => {  
   console.log("No jokes for that search query were found.")
});
}
//To display the maximum occured statements as leaderboard
function leaderboard(){
var file_path = 'test.txt';
//Some statements in the website are alreaady concatenated with seperator, so to overcome this, modifying the file in such a way all statements are present in new lien without any gaps
fs.readFile('./a.txt',(err, data)=> {
    if (err) {
        throw err;
    }
    var lines=data.toString().replace(/([\r\n]){2,}/g, '\n');
    fs.writeFile('./test.txt', lines, err => {//new
    if (err) {
      console.error(err)
      return
    }
    return
  });
});

//Maximum occurence of statement ans it's count is calculated
fs.readFile(file_path, (error, data) => {

    if (error) throw error;
    else {
        if (data) {
           var a= data.toString().split('\n')
           var lineCountList = {};
           a.forEach(function(line){
            if(line !== " "){
              if(!lineCountList.hasOwnProperty(line)){
                lineCountList[line] = {line: line, count:0};
              }
              lineCountList[line].count++;
            }
          })
           var maxCountLine = {count:0};
for(var propName in lineCountList){
  var currentLine = lineCountList[propName];
  if(maxCountLine.count<currentLine.count){
    maxCountLine = currentLine;
  }
}
console.log( maxCountLine)

        }
        
    }
});
}




