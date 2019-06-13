/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        //TODO 4: append topRated ul
        let $topRated = 
        _.map(data.discography.topRated, function(recording) {
            return $('<li>').attr('id', 'topRecording')
            .append($('<h1>').text(recording.title).css('color', 'darkkhaki'))
            .append($('<p>').text(`Artist: ${recording.artist}`))
            .append($('<p>').text(`Release: ${recording.release}`))
            .append($('<p>').text(`Year: ${recording.year}`));
        });
        $('#list-top-rated').append($topRated);
        
        //TODO 5: create new section and ul for general recordings
        let $recordingSect = $('<section>').attr('id', 'section-recordings');
        $recordingSect.append($('<h2>').text('Recordings'))
        .appendTo($('#list-top-rated'));
        //create a styled <ul id="list-recordings" class="list-recordings"> and add it to <section id='section=recordings'>
        let $ulRecordings = $('<ul>').attr('id', 'list-recordings').attr('class', 'list-recordings');
        $ulRecordings.appendTo('#section-recordings');
        //create <li class="recording"> for every recording in the recordings Array
        let $liRecordings = _.map(data.discography.recordings, function(recording){
            return $('<li>').attr('class', 'recording')
            .append($('<div>').attr('class', recording.title).text(`Title: ${recording.title}`))
            .append($('<div>').attr('class', recording.artist).text(`Artist: ${recording.artist}`))
            .append($('<div>').attr('class', recording.release).text(`Release: ${recording.release}`))
            .append($('<div>').attr('class', recording.year).text(`Year: ${recording.year}`))
            .appendTo('#list-recordings');
        })
        
        //TODO 6: Add images to the top of topRated and Recordings
        let $topImgContainer = $('<div>')
        .append($('<img>').attr('id','image-container-top-rated').attr('src', data.discography.topRated[0].art))
        .prependTo('#list-top-rated');
        
        const $recImgContainer = $('<div>')
        .append($('<img>').attr('id', 'image-container-recording').attr('src', data.discography.recordings[0].art))
        .prependTo('#list-recordings');
        
        
        
        console.log($('#image-billy')[0]['src'][$('#image-billy')[0]['src'].length - 5])
        //Make the Billy image clickable, change picture when clicked
        const $billyContainer = $('#image-container-billy');
        $billyContainer.on('click', function(){
            let curIndex = $('#image-billy')[0]['src'][$('#image-billy')[0]['src'].length - 5]
            if (curIndex < 3){
                curIndex++;
            } else {
                curIndex = 0;
            }
            $billyContainer.empty();
            $billyContainer
            .append($('<img>')
            .attr('id', 'image-billy')
            .attr('src', `images/billy/billy-${curIndex}.jpg`)
            .css('min-width', '25%')
            .css('min-height', '25%'));
        })
        //CSS rules:
        $('#list-top-rated').css('background-color', 'steelblue')
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        $('#section-quotes').prependTo('#sections');
        $('#section-bio').css('background-color', 'grey').css('border-radious', '2px');

        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
