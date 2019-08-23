$(document).ready(function() {
	/*$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();
		console.log(value);

		var html = '<div class="item">\
                <div class="remove">X</div>' + value + '</div>';
        console.log(html);

        //$('#places-container').append(html);
        //$(html).appendTo('#places-container');

        $('#places-container').prepend(html);
        //$(html).prependTo('#places-container');
        });
        */
       $("#add-container").on('click', 'button', function(){
                let value = $('#add-container input').val();
                let html = '<div class="item">\
                <div class="remove">X</div>\
                ' + value + ' </div>'
                $('#places-container').append(html); //botton of the list
                //$('#places-container').prepend(html) //top of the list
                //$("#places-container").children().last().after(html); //put new element after that
       })
       $("#places-container").on('click', '.remove', function(){
               $(this).parent().remove();
       })
});