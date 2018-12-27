function downloadNDA( url ) {
    jQuery.ajax({
        type: "GET",
        url: url,
        data: {},
        crossDomain: true,
        headers: { 
            //'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/x-www-form-urlencoded',  
            //'Accept': 'application/json',
            //'Access-Control-Allow-Origin': '*'
        },
        success: function(data) {
            // data is now a string
            jQuery('#output').val(JSON.stringify(data));
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

    // in data we have now the list of dataElements
    var t = data['title'].toLowerCase().replace(' ', '_').trim();

    // header line
    var header = headerMapping.map(function(a) { return a[1]; });
    
    // ignore the first couple of entries
    var ignore = [ "gender", "src_subject_id", "interview_date", "interview_age", "subjectkey" ];
    var tail = "";
    for (var i = 0; i < data['dataElements'].length; i++) {
	var el = data['dataElements'][i];
	if (ignore.indexOf(el['name']) > -1)
	    continue;
	// now create the first 

	
    }
    
    var str = header + "\n" + tail;

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
