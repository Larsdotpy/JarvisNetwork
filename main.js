/*const screentext = document.getElementById("screentext");
screentext.innerHTML = "Press 1 to check balance \nPress 2 to add funds\nPress 3 to withdraw\nPress 4 to logout";
*/
var audio1 = document.getElementById("networkEng");
audio1.onended = function() {
  console.log('Playing background audio')
  var audio2 = document.getElementById("networkEng2");
  audio2.play();
};

var audio2 = document.getElementById("networkEng2");
audio2.onended= function(){
    console.log('playing background musique')
    var audio3 = document.getElementById("networkEng3");
    audio3.play();
};

var audio3 = document.getElementById("networkEng3");
audio3.onended= function(){
    console.log('playing background musique')
};

    setTimeout(function () {
        document.getElementById('loadingVideo').style.display = 'none'
    }, 20000)



    var i = 0,screentext;
    screentext = "Press 1 to check mainframe temperature \nPress 2 to scan for hackable devices\nPress 3 to activate targeted ddos\nPress 4 to logout";

    

        function typing() {
            if(i<screentext.length) {
                document.getElementById("screentext").innerHTML += screentext.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        setTimeout(function () {
            typing();
        }, 21500)


/*function star1() {
    arr.push("*");
    screentext.innerHTML = arr.join('');
    if(arr.length == 4){
        screentext.innerHTML = "Logging in..."
    }
    
}
*/


/* document.getElementById("btn1").addEventListener("click", star1); 

function star2() {
    arr.push("*");
    screentext.innerHTML = arr.join('');
}
*/
