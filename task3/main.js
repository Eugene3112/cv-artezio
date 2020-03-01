let coll = document.getElementsByClassName('standard');
let content = document.getElementsByClassName('content');
let arrow = document.getElementsByClassName('arrow');


function openContent(a){
        a.nextElementSibling.classList.toggle('active-b');
        a.children[1].classList.toggle('icon-arrow-down');
        a.children[1].classList.toggle('icon-arrow-up');
}


function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    //usage:
    readTextFile("data.json", function(text){
        var myData = JSON.parse(data);
        console.log(myData);
    });