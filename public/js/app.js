'use strict';

(function() {

  //set html pointer to a variable
  var post = $('post');


  //create a module that will set the framework for foundation
  var modules = (function() {

    //creates the rows
    function _row() {
      return $('<div>', {
        class: 'row'
      });
    }

    //creates the columns
    function _col() {
      return $('<div>', {
        class: 'large-6 medium-6 small-12 columns'
      });
    }

    return {
      row: _row,
      col: _col
    };
  });

  //pulls from api and appends to post
  var content = (function() {

  });





  $.ajax({
    url : '/api/my_boards.json',
    method : 'GET',
    success: function(data) {
      for(var i = 0; i < data.data.children.length; i++) {
        var titles = data.data.children[i];
        var post = $('<li>', {
          class: 'title',
          html: titles.data.title
        });

        var picture = '<div><img src="' + titles.data.url + '"></div>';
        $('.box').append(post, picture);
      }
    },
    error: function(err) {
      console.log(err);
    }
  });

})();