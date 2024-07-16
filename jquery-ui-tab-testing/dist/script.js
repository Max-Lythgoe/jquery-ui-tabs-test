$(function() {
    $("#tabs").tabs({
        show: { effect: "fadeIn", duration: 300 },
        hide: { effect: "fadeOut", duration: 300 },
        activate: function(event, ui) {
            // Show the image with a different effect when a tab is activated
            ui.newPanel.find('.tab-image').show('scale', { direction: 'right' }, 500);
        },
        beforeActivate: function(event, ui) {
            // Hide the image with a different effect before a tab is activated
            ui.oldPanel.find('.tab-image').hide('puff', { direction: 'left' }, 500);
        }
    });
});