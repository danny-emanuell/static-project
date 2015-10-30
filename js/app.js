var pics = [],
	baseUrl = "http://lorempixel.com/320/480/",
	keyWords = ['technics','food','sports'];

function addPics(keyWord){
	pics.push({
		url: baseUrl + keyWords[keyWord] + "/" + keyWord
	})
}

for(var i=0; i < keyWords.length; i++){
	addPics(i);
}

(function Render(){
for(var j=0; j < 3; j++ ){
	var template = '<img src="'+ pics[j].url +'">';
	var className = document.getElementsByClassName("parra_img");
	className[j].innerHTML = template;

	}
})();
