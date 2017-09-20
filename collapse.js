(function init(){
    var elems = document.querySelectorAll("tr.taskboard-row.taskboard-content-row[id^='taskboard-row-'] div.minimize");
    for (var i in elems) {
        elems[i].click();
    }
})();