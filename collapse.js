(function minimize(){
    var elems = document.querySelectorAll("tr.taskboard-row.taskboard-content-row[id^='taskboard-row-'][style=''] div.minimize");
    for (var i in elems) {
        elems[i].click();
    }
})();