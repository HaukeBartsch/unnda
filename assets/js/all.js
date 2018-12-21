jQuery(documents).ready(function() {

    // add a test dictionary to the input field
    jQuery('#input').text('https://ndar.nih.gov/api/datadictionary/v2/datastructure/cct01/csv');

    jQuery('#input').on('change', function() {

        console.log("page loaded...");
    });
});
