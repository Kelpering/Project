$(document).ready(function(){



})
var final = "<!Doctype html>\n<html>\n<head>"
var prewritten = "\n\n</head>\n<body>\n\n</body>\n</html>"

var part2 = function()
{
    //take all answers, generate prewritten code for boxes
    $("#part1").hide();
    if($("#jquery").is(":checked"))
    {
        final += "\n<script src=\"jquery-3.6.3.min.js\"></script>";
    }
    if($("#angularJS").is(":checked"))
    {
        final += "\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"></script>";
    }
    if($("#W3JS").is(":checked"))
    {
        final += "\n<script src=\"https://www.w3schools.com/lib/w3.js\"></script>";
    }
    if($("#W3CSS").is(":checked"))
    {
        final += "\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">";
    }
    switch (Number($("#bootstrap").val())) {
        case 3:
            final += "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js\">\n</script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>"
        break;

        case 4:
        final += "\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css\">\n<script src=\"https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.slim.min.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js\"></script>"
            
        break;

        case 5:
        final += "\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\"></script>"
            
        break;
    }
    final += prewritten;
    $("#html").val(final);
    $("#part2").show();
}


/* <!Doctype html>
<html>
<head>

*/
/* jquery and bootstrap */
/*

</head>

<body>

</body>
</html>*/
