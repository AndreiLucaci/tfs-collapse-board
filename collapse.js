(function minimize(){
    function triggerClick(elems) {
        $.each (elems, function(i, v){
            var $this = $(v);
            $this.click();
        });
    }

    // taskboard
    var taskboard = $(".taskboard");
    if (taskboard.length) {
        var taskboardElems = $("tr.taskboard-row.taskboard-content-row[id^='taskboard-row-']:not([style]) div.minimize, tr.taskboard-row.taskboard-content-row[id^='taskboard-row-'][style=''] div.minimize");
        triggerClick(taskboardElems);
    }

    // agile board
    var agileboard = $(".agile-board");
    if (agileboard.length){
        var minimizeIcons = $("i.icon.hide");
        triggerClick(minimizeIcons);

        var minimizeBoardItems = $(".member-header.ui-droppable").not(".swimlane-collapsed");
        triggerClick(minimizeBoardItems);
    }
})();