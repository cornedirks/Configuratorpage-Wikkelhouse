$(document).ready(function(){

    let containerId = $("#containerId");
    let segmentId = ["segment1"];
    let uuid = 1;
    $.each(segmentId, function(index, value){

        
        $(function() {
            // Select the element you want to make sortable
            var $sortableElement = $('#containerId');
          
            // Initialize the sortable function on the element
            $sortableElement.sortable({
                connectWith: ".segment",
                cursor: "grabbing",
                axis: "x",
            });

            // When the mouse pointer enters an element, add the 'segment-container-sortable' class to it
            $('#containerId').on('mouseenter', '.segment', function(event) {
                $(this).addClass('segment-container-sortable');
              });
          
            // When the mouse pointer leaves an element, remove the 'segment-container-sortable' class from it
            $('#containerId').on('mouseleave', '.segment', function(event) {
                $(this).removeClass('segment-container-sortable');
              });
          
            // When an item is sorted, add the 'segment-container-sortable' class to it
            $sortableElement.on('sortstart', function(event, ui) {
              $(ui.item).addClass('segment-container-sortable');
            });
            
            // When sorting stops, remove the 'segment-container-sortable' class from the sorted element
            $sortableElement.on('sortstop', function(event, ui) {
              $(ui.item).removeClass('segment-container-sortable');
            });
        });

        $(function() {
            // Select the element you want to make sortable
            var $sortableElement = $('#objectCardId');
          
            // Initialize the sortable function on the element
            $sortableElement.sortable({
              connectWith: ".segment",
              //opacity: 0.5,
              cursor: "grabbing",
            });
          
            // When the mouse pointer enters an element, add the 'object-sortable' class to it
            $('.object').on('mouseenter', function(event) {
                $(this).addClass('object-sortable');
              });
              
            // When the mouse pointer leaves an element, remove the 'object-sortable' class from it
            $('.object').on('mouseleave', function(event) {
                $(this).removeClass('object-sortable');
              });
          
            // When an item is sorted, add the 'object-sortable' class to it
            $sortableElement.on('sortstart', function(event, ui) {
              $(ui.item).addClass('object-sortable');
            });
          
            // When sorting stops, remove the 'object-sortable' class from the sorted element
            $sortableElement.on('sortstop', function(event, ui) {
              $(ui.item).removeClass('object-sortable');
            });
          });

          $(function() {
            $('#bed-object').draggable({
              helper: 'clone'
            });
            $('#segmentLeftVerandaId').droppable({
              drop: function(event, ui) {
                $(this).find('img').attr('src', 'images/Left-Veranda-Segment-Bed.png');
              }
            });
          });

          function createNewSegment() {
            uuid ++;
            newSegmentContainer = $('<div>', {class:'segment', id: `segment${uuid}`});
            containerId.append(newSegmentContainer);
            segmentContainer = $('#segment' + uuid);
            segmentContainer.append($('<img>', {src:'images/Empty-Segment.png'}));
            segmentContainer.insertBefore("#segmentRightVerandaId");
          }
          
          $("#add").click(createNewSegment);

        $(".segment").dblclick( function() {
            $("#containerId div.segment:last").remove();

            // dit specifiek op de laatste id, dus je hebt een array pop, de laatste weg.
            // verwijderen moet op een id kunnen.
        });

    });
});




