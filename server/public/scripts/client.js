console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke);
    getJokes();
}

function addJoke(event){
    event.preventDefault();
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    }

    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke
    }).then(function(response){
        console.log(response);
        getJokes();
    })
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