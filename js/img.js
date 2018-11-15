
addLoadEvent(prepareGallery());
addLoadEvent(preparePlaceHolder());

function addLoadEvent(func) {
    var ondonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }

}

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceHolder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','./img/pic6.jpg');
    placeholder.setAttribute('class','img-display');
    var p = document.createElement('p');
    p.setAttribute('id','descript');
    var descrption = document.createTextNode('Choose an image');
    p.appendChild(descrption);
    var div = document.createElement('div');
    div.appendChild(placeholder);
    insertAfter(p,placeholder);
    var imagegallery = document.getElementById("imagegallery-display");
    imagegallery.appendChild(div);
    console.log('haha');
}

function prepareGallery() {
    if(!document.getElementById) return false;

    if(!document.getElementsByTagName) return false;
    var imagegallery = document.getElementById('imagegallery');
    var link = imagegallery.getElementsByTagName('a');

    for (var i=0; i < link.length;i++){
        link[i].onclick = function () {
            return showPic(this) ? false:true;
        }
    }
}


function showPic(whichpic) {
    var title = whichpic.getAttribute('title');
    var href = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',href);
    // if(placeholder.nodeName != 'IMG') return false;
    var description = document.getElementById(descript);
    if(description){
        var text = whichpic.getAttribute('title')?whichpic.getAttribute('title'):'';
        var info = description.firstChild.nodeValue();
        if(description.firstChild.nodeType = 3){
            info = text;
        }
    }
    return true;
}
