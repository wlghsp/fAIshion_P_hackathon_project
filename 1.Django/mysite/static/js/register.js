
$("#id_field").change(function(){
    words = $("#id_field option:selected").val();
    console.log(words)
    if( words != ''){
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8000/search/',
            data: { searchwords : words},
            dataType: 'json',
            success: function(result){
                $('#results').html('<a href="'+result.bookurl[0]+'" target="_blank"><img style="width: 130px; height:130px; margin-left: 200px; margin-right: 60px;" src="'+result.image_url[0]+ '" /></a><a href="'+result.bookurl[1]+'" target="_blank"><img style="width: 130px; height:130px; margin-right: 60px;" src="'+result.image_url[1]+ '" /></a><a href="'+result.bookurl[2]+'" target="_blank"><img style="width: 130px; height:130px; margin-right: 60px;" src="'+result.image_url[2]+ '" /></a>');
            },
            error: function(e) {console.log('error:' + e.status);}
        });
    } else{ $("#results").html(""); }
});

// $("#id_field").change(function(){
//     words = $("#id_field option:selected").val();
//     console.log(words)
//     if( words != ''){
//         $.ajax({
//             type: 'GET',
//             url: 'http://127.0.0.1:8000/search/',
//             data: { searchwords : words},
//             dataType: 'json',
//             success: function(result){
//                 if ( result.length > 0){
//                     var str = ''
//                     for (var i=0; i<result.length; i++){
//                         str += '<span>'+ '<img src="'+result[i].image_url+'"/>' + '</span><br/>'
//                             +'<span>'+ '<p>'+ result[i].title + '</p>'+'</span><br/>';
//                     }
//                     $("#results").html(str);
//                 } else{ $("#results").html(""); }
//             },
//             error: function(e) {console.log('error:' + e.status);}
//         });
//     } else{ $("#results").html(""); }
// });
