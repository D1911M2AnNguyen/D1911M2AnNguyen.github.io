//Ajax svg sprite inlining

var ajax = new XMLHttpRequest();
      ajax.open("GET", "img/icons/icon_sprite.svg", true);
      ajax.send();
      ajax.onload = function(e) {
        var div = document.createElement("div");
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
    };