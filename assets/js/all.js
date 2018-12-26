function downloadNDA( url ) {
    jQuery.get(url, function(data) {
        // data is now a string
        
        jQuery('#output').text(JSON.stringify(data));
        var erg = convert(data);
        jQuery('#output').val(erg);
    });
}

function convert( data ) {
    var headerMapping = [ 
                [ "Variable / Field Name", "ElementName" ],
                [ "Form Name", "" ],
                [ "Section Header", "" ],
                [ "Field Type", "" ],
                [ "Field Label", "ElementDescription" ],
                [ "Choices, Calculations, OR Slider Labels",  "" ],
                [ "Field Note",  "" ],
                [ "Text Validation Type OR Show Slider Number",  "" ],
                [ "Text Validation Min",  "" ],
                [ "Text Validation Max",  "" ],
                [ "Identifier?",  "" ],
                [ "Branching Logic (Show field only if...)",  "" ],
                [ "Required Field?",  "" ],
                [ "Custom Alignment",  "" ],
                [ "Question Number (surveys only)",  "" ],
                [ "Matrix Group Name",  "" ],
                [ "Matrix Ranking?",  "" ],
                [ "Field Annotation", "" ]
    ];




}

jQuery(document).ready(function() {

    // add a test dictionary to the input field
    jQuery('#input').val('https://ndar.nih.gov/api/datadictionary/v2/datastructure/cct01/csv');

    jQuery('#input').on('change', function() {
        var url = jQuery('#input').val();
        downloadNDA(url.trim());
    });
});
