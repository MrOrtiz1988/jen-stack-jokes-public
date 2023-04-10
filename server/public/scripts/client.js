console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke);
    getJokes();
}



function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function(jokes){
        console.log(jokes);
        $('#outputDiv').empty();
        for(let joke of jokes){
            $('#outputDiv').append(`
            <div>
            <h3>${joke.whoseJoke}</h3>
            <p>${joke.jokeQuestion} ${joke.punchLine}</p>
            </div>
            `)
        }
    })
}