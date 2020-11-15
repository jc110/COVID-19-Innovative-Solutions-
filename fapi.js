function loadLiveData(){
var settings = {
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How much vitamin c is in 2 apples?",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "33179136b2mshc66e07cecd059ddp130dbbjsn54a479c20abd",
    "Cookie": "__cfduid=dbdf96bffad84f5b603e059b184f8aaf11605155613"
  },
};


	$.ajax(settings).done(function (response) {
		var responseObj = JSON.parse(response);
		
var mytable = document.getElementById("My Table");
var newrow = mytable.insertRow(1);
var newrow = mytable.insertRow(2);
var newrow = mytable.insertRow(3);

answerraw.innerHTML=response.answer;
imageraw.innerHTML=response.image;
typeraw.innerHTML=response.type;


});}