$(document).ready(function(){

    var containerId = $("#containerId");
    var segmentId = ["segment1"];
    $.each(segmentId, function(index, value){

        $("#containerId").sortable({
            opacity: 0.5,
            distance: 50,
            cursor: "grabbing",
            containment: "parent",
            axis: "x",
        });

        $("#add").click( function() {
            containerId.append($("<div class='segment'>" + value + "</div>"));
        });

        $("#remove").click( function() {
            $("div:last").remove();
        });

        $("#segmentId").sortable({
            connectWith: "#objectCardId",
            opacity: 0.5,
            cursor: "grabbing",
        });

        $("#objectContainerId").sortable({
            connectWith: "#segmentId",
            opacity: 0.5,
            cursor: "grabbing",
        });

    });
});




