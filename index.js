var blurWrappers = document.querySelectorAll('.blur');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\w+/g, "<span class='word'>$&</span>");
var puzzle = document.querySelector('.input');
var unclicked = true;
var finished = false;
var state = 0;
var currString = "";
var cassText = document.querySelector('.prompt');
cassText.innerHTML = cassText.innerHTML.replace(/\S/g, "<span class='letter'>$&</span>");


var animation = anime.timeline({loop: true, 
    loopComplete: function(anim){
        console.log("loop completed");
        if (finished) {
            anim.pause();
            for(el of blurWrappers){
                el.style.filter = 'blur(0)';
            }
        }
    }})
.add({
    targets: '.set1',
    duration: 2000,
    update: function(anim){
        for(el of blurWrappers){
            el.style.filter = 'blur(' + (0.75 + 1.5* anim.progress / 100) + 'px)';
        }
    }
}).add({
    targets: '.set1',
    duration: 3000,
    update: function(anim){
        if(anim.progress > 0){
            for(el of blurWrappers){
                el.style.filter = 'blur(' + (0.75 + 1.5* (100 - anim.progress) / 100) + 'px)';
            }
        }
    }
});

var cassAnim = anime.timeline({loop: true, 
    loopComplete:function(anim){
        if (finished) {
            anim.pause();
            cassText.style.opacity = 1;
        }
    }
})
  .add({
    targets: '.letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 50 * (i+1)
  }).add({
    targets: '.prompt',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 3000
  });


function append(s){
    if(!currString.includes(s)){
        currString = currString.concat(s).concat(' ');
        puzzle.innerHTML = format();
        verifyPhrase();
    }
}
function format(){
    return currString.replace(/\w+/g, "<span onclick=\"remove(\'$&\')\">$&</span>");
}
function remove(s){
    
    currString = currString.replace(s.concat(' '),'');
    // currString = currString.replace("<span onclick=\"remove(\'\')\"></span>",'');
    puzzle.innerHTML = format(); 
    verifyPhrase();
}

function verifyPhrase(){
    switch(state){
        case 0:
            console.log(currString);
            if(currString == "Cassidy is that you "){
                puzzle.innerHTML = "Cassidy, is that you?";
                finished = true;
            }
            if(currString == "is that you Cassidy "){
                puzzle.innerHTML = "is that you, Cassidy?";
                finished = true;
            }
            break;
    }

}

function toggleAnim(){
    if(unclicked){
        anime({
            targets: '.afraid',
            opacity: 0,
            duration: 400,
        }).finished.then( function (){
            li.innerHTML = li.textContent.replace("Afraid", "<a>About</a>");
            anime({
                targets: '.afraid',
                opacity: 1,
                duration: 400
            });}
        );
        unclicked = false;
        if(animation.progress < 50){
        animation.reverse();}
        finished = true;
        console.log("pause");
    }
}

var li = document.querySelector('.Jason');
// li.onclick = append("Jason");
