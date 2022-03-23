


var jinputValue=document.getElementById('inputValue');
const jaudio=document.getElementById('audio');
const jenterBTN=document.getElementById('enterBTN');





jenterBTN.addEventListener('click',function(){
     console.log(jinputValue.value) ;
    fetch(`https://shazam.p.rapidapi.com/search?term=${jinputValue.value}&locale=en-US&offset=0&limit=5`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "eb3cff4953msh6bf25d5812fb257p186050jsn0d65cd9976fa"
	}
})
.then(response =>response.json()
     
).then(function fff(data){
    console.log(data.tracks.hits[0].track.images.background);
jaudio.innerHTML=
`<div class="box">
<img src="${data.tracks.hits[0].track.images.background}">
<span class="subtitle">${data.tracks.hits[0].track.subtitle}</span>
<span class="title">${data.tracks.hits[0].track.title}</span>
<audio src="${data.tracks.hits[0].track.hub.actions[1].uri}"controls></audio>
</div>
`
+
`<div class="box">
<img src="${data.tracks.hits[1].track.images.background}">
<span class="subtitle">${data.tracks.hits[1].track.subtitle}</span>
<span class="title">${data.tracks.hits[1].track.title}</span>
<audio src="${data.tracks.hits[1].track.hub.actions[1].uri}"controls></audio>
</div>
`
+
`<div class="box">
<img src="${data.tracks.hits[2].track.images.background}">
<span class="subtitle">${data.tracks.hits[2].track.subtitle}</span>
<span class="title">${data.tracks.hits[2].track.title}</span>
<audio src="${data.tracks.hits[2].track.hub.actions[1].uri}"controls></audio>
</div>
`
+
`<div class="box">
<img src="${data.tracks.hits[3].track.images.background}">
<span class="subtitle">${data.tracks.hits[3].track.subtitle}</span>
<span class="title">${data.tracks.hits[3].track.title}</span>
<audio src="${data.tracks.hits[3].track.hub.actions[1].uri}"controls></audio>
</div>
`
});



});











