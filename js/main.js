$(document).ready(function(){

    let containerId = $("#containerId");
    let segmentId = ["segment1"];
    let uuid = 1;
    $.each(segmentId, function(index, value){

        $("#containerId").sortable({
            opacity: 0.5,
            distance: 50,
            cursor: "grabbing",
            containment: "parent",
            axis: "x",
        });

        $("#add").click( function() {
            uuid ++; // dit moeten we bijhouden, precies weten welke blokjes er zijn.
        
            newSegmentContainer = $('<div>', {class:'segment img', id: "segment" + uuid})
            containerId.append(newSegmentContainer);
            segmentContainer = $('#segment' + uuid);
            segmentContainer.append($('<img>', {src:'images/Empty-Segment.png'}));
        });

        $("#remove").click( function() {
            $("#containerId div:last").remove();

            // dit specifiek op de laatste id, dus je hebt een array pop, de laatste weg.
            // verwijderen moet op een id kunnen.
        });

        $(".segment-container").sortable({
            connectWith: "#objectCardId",
            opacity: 0.5,
            cursor: "grabbing",
            // is hier een class die je kan toevoegen wanneer je aan het draggen bent?
        });

        $("#objectContainerId").sortable({
            connectWith: ".segment",
            opacity: 0.5,
            cursor: "grabbing",
        });

    });
});




