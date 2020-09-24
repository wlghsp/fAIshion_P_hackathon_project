
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
                if ( result.length > 0){
                    var str = ''
                    for (var i=0; i<result.length; i++){
                        str += '<span>'+ result[i].data + '</span><br/>';
                    }
                    $("#results").html(str);
                } else{ $("#results").html(""); }
            },
            error: function(e) {console.log('error:' + e.status);}
        });
    } else{ $("#results").html(""); }
});
