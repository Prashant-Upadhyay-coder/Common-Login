var $validatorform;

function validateSingleForm(form) {
    $.validator.addMethod(
        "commonvalidation",
        function (value, element, param) {
            return value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/);
        },
        "Please enter valid input"
    );
    $.validator.addMethod(
        "onlynumber",
        function (value, element, param) {
            return value.match(/^(0|[1-9]\d*)$/);
        },
        "Please enter only degit"
    );
    $.validator.addMethod(
        "specialcharactor",
        function (value, element, param) {
            return value.match(/^[0-9A-Za-z\_\ \.\@]*$/);
        },
        "Special character is not allowed"
    );
    //ip addresss

    $.validator.addMethod('IP4Checker', function (value) {
        return value.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
    }, 'Invalid IP address');

    //changes
    // Add IP  address validation method
    $.validator.addMethod('IP4Checker', function (value) {
        return value.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
    }, 'Invalid IP address');

    // Add MAC address validation method
    $.validator.addMethod('MACAddressChecker', function (value) {
        const macRegex = /^([0-9A-Za-z]{2}[:-]){5}([0-9A-Za-z]{2})$/;
        return macRegex.test(value);
    }, 'Invalid MAC address');

    $.validator.addMethod(
        "gmailOrIn",
        function (value, element) {
            // Check if the input contains a Gmail address or an .in address
            return (
                this.optional(element) ||
                /^[a-zA-Z0-9._%+-]+@(gmail\.com|.*\.in)$/i.test(value)
            );
        },
        "Please enter a valid Gmail address ending with '.com' or an '.in' domain."
    );

    //debugger;  
    $validatorform = jQuery(form).validate({
        rules: {
            //Admin
            VA_VAPT_ADMIN_001_D01_FM01_F01: {
                required: true,
                IP4Checker: true,
            },
            VA_VAPT_ADMIN_001_D01_FM01_F02: {
                required: true,
                IP4Checker: true,
            },
            //Target
            VA_VAPT_OPT_TGT_D01_FM01_F01: {
                required: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F02: {
                required: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F03: {
                required: true,
                targetValueValidation: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F04: {
                required: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F05: {
                required: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F06: {
                required: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F07: {
                required: true,
            },
            VA_VAPT_OPT_TGT_D01_FM01_F08: {
                required: true,
            },
            //Scan
            VA_VAPT_OPT_SCN_D01_FM01_F01: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F02: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F03: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F04: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F05: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F08: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F09: {
                required: true,
            },
            VA_VAPT_OPT_SCN_D01_FM01_F10: {
                required: true,
            },
        },
        messages: {
            VA_VAPT_ADMIN_001_D01_FM01_F01: {
                required: "Enter Primary Server IP",

            },
            VA_VAPT_ADMIN_001_D01_FM01_F02: {
                required: "Enter Secondary Server IP",
            },
            //Target
            VA_VAPT_OPT_TGT_D01_FM01_F01: {
                required: "Please Select Device",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F02: {
                required: "Please Select Type",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F03: {
                required: "Please enter a valid Target Value",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F04: {
                required: "Please Enter MAC",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F05: {
                required: "Please Enter Domain Name",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F06: {
                required: "Please Enter Virtual Name",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F07: {
                required: "Please select Device Mode",
            },
            VA_VAPT_OPT_TGT_D01_FM01_F08: {
                required: "Please select Device Type",
            },
            //Scan
            VA_VAPT_OPT_SCN_D01_FM01_F01: {
                required: "Please select OWASP",
            },
            VA_VAPT_OPT_SCN_D01_FM01_F02: {
                required: "Please select Tool Type",
            },
            VA_VAPT_OPT_SCN_D01_FM01_F03: {
                required: "Please Select Template",
            },
            VA_VAPT_OPT_SCN_D01_FM01_F04: {
                required: "Please select VAPT Device",
            },
            VA_VAPT_OPT_SCN_D01_FM01_F05: {
                required: "Please select AnyOne",
            },
            VA_VAPT_OPT_SCN_D01_FM01_F08: {
                required: "Please select Start Time",

            },
            VA_VAPT_OPT_SCN_D01_FM01_F09: {
                required: "Please select End Time",

            },
            VA_VAPT_OPT_SCN_D01_FM01_F10: {
                required: "Please select Not Run After",
            },
        },
        highlight: function (element) {
            jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            $(document).find('label.error').css('display', 'block');
        },
        errorPlacement: function (error, element) {
            var pos = document.getElementById('radioMessage');
            //var pos1 = document.getElementsByClassName('checkMessage');
            if (element.attr("name") == "priority") {
                error.appendTo(document.getElementById('prioritymessage'));
            } else if (element.attr("name") == "option") {
                error.appendTo(document.getElementById('errorMessage'));
            } else if (element.attr("name") == "send_to") {
                error.appendTo(document.getElementById('sendtomessage'));
            } else if (element.is(":radio")) {
                error.appendTo(pos);
            } else {
                error.insertAfter(element);
            }
        },
        // onfocusout: function (element) {                       
        //     jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        //     $(document).find('label.error').css('display', 'block');
        //},
    });
    // Add custom method for Target Value validation
    $.validator.addMethod(
        "targetValueValidation",
        function (value, element) {
            var targetType = $('#VAPT_OPT_TGT_D01_FM01_F02').val();
            var exampleFormat = ''; // Initialize example format message

            // Add example format message based on selected Target Type
            switch (targetType) {
                case 'IP':
                    exampleFormat = 'Example: 192.168.1.1';
                    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value);
                case 'IP+PORT':
                    exampleFormat = 'Example: 192.168.1.1:8080';
                    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+$/.test(value);
                case 'IPRANGE+PORT':
                    exampleFormat = 'Example: 192.168.1.1-192.168.1.100:8080';
                    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}-\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+$/.test(value);
                case 'URL':
                    exampleFormat = 'Example: http://example.com';
                    return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
                case 'URL+PORT':
                    exampleFormat = 'Example: http://example.com:8080';
                    return /^(ftp|http|https):\/\/[^ "]+:\d+$/.test(value);
                case 'HOSTNAME':
                    exampleFormat = 'Example: example.com';
                    return /^[a-zA-Z0-9.-]+$/.test(value);
                case 'DOMAIN':
                    exampleFormat = 'Example: example.com';
                    return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
                case 'DATABASE TYPE':
                    exampleFormat = 'Example: Database Type';
                    return true; // No specific validation needed for Database Type
                default:
                    return false;
            }

            // Display example format message
            $('#exampleFormat').text(exampleFormat);
        },
        "Invalid Target Value for the selected Target Type"
    );
}
