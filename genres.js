

// pop=======================================================
async function Pop(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Pop';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.115/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
       
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// pop=======================================================
async function Rock(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Rock';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.5/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================

// pop=======================================================
async function Alternative(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Alternative';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.33/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================

// pop=======================================================
async function Rap(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Rap/Hip-Hop';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.146/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// pop=======================================================
async function Soul(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Soul/R&B';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.194/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// pop=======================================================
async function Country(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Country';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.407/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================

// Jazz=======================================================
async function Jazz(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Jazz';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.299/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Electronic=======================================================
async function Electronic(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Electronic';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.71/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Latin=======================================================
async function Latin(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Electronic';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.510/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// World=======================================================
async function World(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='World';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.488/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================



// Reggae=======================================================
async function Reggae(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Reggae';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.383/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Classical=======================================================
async function Classical(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Classical';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.21/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Oldies=======================================================
async function Oldies(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Oldies';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.4/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// New Age=======================================================
async function New(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='New Age';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.453/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================

// Blues======================================================
async function Blues(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Blues';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.438/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Folk======================================================
async function Folk(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Folk';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.446/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Vocal======================================================
async function Vocal(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Vocal';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.69/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Soundtracks======================================================
async function Soundtracks(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Soundtracks';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.246/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Children======================================================
async function Children(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Children';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.470/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================



// Comedy======================================================
async function Comedy(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Comedy';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.156/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================


// Metal======================================================
async function Metal(){
    jcenter.style.visibility='visible';
    juli.classList.add("hiden");
    document.getElementById('check').checked=false;
    jnavBAr.classList.add('show');
    jtopText.innerHTML='Metal';
    jaudio.innerHTML='';
    
    await fetch(`https://api.napster.com/v2.2/genres/g.394/tracks/top?range=month`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function aa(res){

        for(var i=0;i<res.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.tracks[i].artistName}</span>
        <span class="title">${res.tracks[i].name}</span>
        <audio src="${res.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
    });
    jcenter.style.visibility='hidden';
};
//=======================================================