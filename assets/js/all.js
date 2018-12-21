function downloadNDA( url ) {
    jQuery.getJSON(url, function(data) {
        jQuery('#output').text(JSON.stringify(data));
    });
}


jQuery(document).ready(function() {

    // add a test dictionary to the input field
    jQuery('#input').val('https://ndar.nih.gov/api/datadictionary/v2/datastructure/cct01/csv');

    jQuery('#input').on('change', function() {
        var url = jQuery('#input').val();
        downloadNDA(url);
    });
});
