$(document).ready(function(){

    $("#prehtml").click(function()
    {
        $(this)[0].checked //add prehtml code
    })
    $("#bootstrap").click(function()
    {
        $(this)[0].val() //add bootstrap ver code
    })
    $("#jquery").click(function()
    {
        $(this)[0].checked //add jquery code
    })

})



var part2 = function()
{
    //take all answers, generate prewritten code for boxes
    $("#part1").hide();
    $("#part2").show();
}

var prewritten = "&lt;!Doctype html&gt;\n&lt;html&gt;\n&lt;head&gt;\n\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;"