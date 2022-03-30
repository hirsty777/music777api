var jinputValue=document.getElementById('inputValue');
const jaudio=document.getElementById('audio');
const jenterBTN=document.getElementById('enterBTN');
const jtopText=document.getElementById("topText");

jaudio.innerHTML='';

const juli=document.querySelector('.uli');
var ishidden=true;
var x=0;

// window.onload=fetchTopSongsOfDay();

// async function fetchTopSongsOfDay(){
//     await fetch(`https://api.napster.com/v2.2/tracks/top?range=day`,{
        
//         method:'GET',
//         headers:{
//             'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
//         }
//     }).then(res=>res.json())
//     .then(function aa(res){

//         for(var i=0;i<res.tracks.length;i++){
//         jaudio.innerHTML+=`
//         <div class="box">
//         <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
//         <span class="subtitle">${res.tracks[i].artistName}</span>
//         <span class="title">${res.tracks[i].name}</span>
//         <audio src="${res.tracks[i].previewURL}"controls></audio>   
//         </div>
//         `
//         }
//         console.log(res);
//     });
// };







//togle hamburger menu=========================
const jnavBAr=document.querySelector('.navBar');
const jcheck=document.getElementById('check');
jcheck.addEventListener('click',function(){
       jnavBAr.classList.toggle('show');
       
});


function  TopTracks(){
    if(ishidden){
        juli.classList.remove("hiden");
        ishidden=false;
    }else{
        juli.classList.add("hiden");
        ishidden=true;
    };
};   
    
   
    // jaudio.innerHTML='';
    // await fetch(`https://api.napster.com/v2.2/tracks/top?range=week`,{
        
    //     method:'GET',
    //     headers:{
    //         'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
    //     }
    // }).then(res=>res.json())
    // .then(function aa(res){

    //     for(var i=0;i<res.tracks.length;i++){
    //     jaudio.innerHTML+=`
    //     <div class="box">
    //     <img src="https://api.napster.com/imageserver/v2/artists/${res.tracks[i].artistId}/images/356x237.jpg">
    //     <span class="subtitle">${res.tracks[i].artistName}</span>
    //     <span class="title">${res.tracks[i].name}</span>
    //     <audio src="${res.tracks[i].previewURL}"controls></audio>   
    //     </div>
    //     `
    //     }
    //     console.log(res);
    // })
      
    
const jtest=document.getElementById('test');


//fetch top songs
//fetch top songs of the day
async function TopOfTheDay(){
    jtopText.innerHTML='Top Of The Day';
    juli.classList.add("hiden");
    ishidden=true;
    
    jaudio.innerHTML='';
    await fetch(`https://api.napster.com/v2.2/tracks/top?range=day`,{
        
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
        console.log(res);
    });
  
};
//fetch top songs of the Week
async function TopOfTheWeek(){
    jtopText.innerHTML='Top Of The Week';
    juli.classList.add("hiden");
    ishidden=true;

    jaudio.innerHTML='';
    await fetch(`https://api.napster.com/v2.2/tracks/top?range=week`,{
        
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
        console.log(res);
    });
  
};

//fetch top songs of the Month
async function TopOfTheMonth(){
    jtopText.innerHTML='Top Of The Month';
    juli.classList.add("hiden");
    ishidden=true;

    jaudio.innerHTML='';
    await fetch(`https://api.napster.com/v2.2/tracks/top?range=month`,{
        
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
        console.log(res);
    });
  
};

//fetch top songs of the Year
async function TopOfTheYear(){
    jtopText.innerHTML='Top Of The Year';
    juli.classList.add("hiden");
    ishidden=true;

    jaudio.innerHTML='';
    await fetch(`https://api.napster.com/v2.2/tracks/top?range=year`,{
        
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
      //  console.log(res);
    });
  
};





//fetch search result and deploy ===================================
jenterBTN.addEventListener('click',async function(){
    jaudio.innerHTML='';
    jtopText.innerHTML=jinputValue.value;

    await fetch(`https://api.napster.com/v2.2/search?query=${jinputValue.value}&per_type_limit=5`,{
        
        method:'GET',
        headers:{
            'apikey':'N2EwNWJiZWUtOGVkMi00YmJjLTgwOWMtY2FiMWQ3MDI1ZjYx'
        }
    }).then(res=>res.json())
    .then(function zz(res){

        for(var i=0;i<res.search.data.tracks.length;i++){
        jaudio.innerHTML+=`
        <div class="box">
        <img src="https://api.napster.com/imageserver/v2/artists/${res.search.data.tracks[i].artistId}/images/356x237.jpg">
        <span class="subtitle">${res.search.data.tracks[i].artistName}</span>
        <span class="title">${res.search.data.tracks[i].name}</span>
        <audio src="${res.search.data.tracks[i].previewURL}"controls></audio>   
        </div>
        `
        }
        //console.log(res.search.data);
    })
    
});
