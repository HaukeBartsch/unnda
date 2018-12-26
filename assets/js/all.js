function downloadNDA( url ) {
    jQuery.ajax({
        type: "GET",
        contentType: "application/json",
        url: url,
        data: {},
        headers: { 
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json'
        },
        success: function(data) {
            // data is now a string
            jQuery('#output').text(JSON.stringify(data));
            var erg = convert(data);
            jQuery('#output').val(erg);
        }
    }).fail(function() {
        alert( "error" );
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

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

jQuery(document).ready(function() {

    // add a test dictionary to the input field
    jQuery('#input').val('https://ndar.nih.gov/api/datadictionary/v2/datastructure/cct01/csv');

    jQuery('#input').on('change', function() {
        var url = jQuery('#input').val().trim();
        // check if we are asking for the csv version
        if (endsWith(url, "/csv")) {
            url = url.slice(0,-4);
            jQuery('#input').val(url); // remove the /csv ending
        }

        downloadNDA(url.trim());
    });
});
