
function formFill(event){

    event.preventDefault();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var params ={}
    params['api-key'] = "cc380aa5af0e4329b8c922f3eae22e50"
    var searchTerm = $('#inputSearchTerm').val();
    params['q'] = searchTerm;
    var beginYear = $('#inputStartYear').val()
    if(beginYear){
        beginYear += '0101'
        params['begin_date'] = beginYear;
    }
    var endYear = $('#inputEndYear').val()
    if(endYear){
        endYear += '0101'
        params['end_date'] = endYear;
    }
    var number = $('#inputNumRecords').val();


    url += '?' + $.param(params);
    $.ajax({
        url: url,
        method: 'GET',
    })
    .done(function(result) {
        var articles = result.response.docs;
        console.log(articles);
        for(var i = 0; i < number; i++){
            artNum = i + 1
            $('#results').append('<div>' + artNum +'. '+ articles[i].snippet + '</div>')
        }

    })
    .fail(function(err) {
        throw err;
    });
    console.log(url);
}
