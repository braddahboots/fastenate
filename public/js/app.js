'use strict';

(function() {

  //set html pointer to a variable
  var grid = $('.grid');
  var row;
  var col;

  //create a module that will set the framework for foundation
  // var modules = (function() {

  //   //creates the rows
  //   function _row() {
  //     return $('<div>', {
  //       class: 'row'
  //     });
  //   }

  //   //creates the columns
  //   function _col() {
  //     return $('<div>', {
  //       class: 'large-6 medium-6 small-12 columns'
  //     });
  //   }

  //   return {
  //     row: _row(),
  //     col: _col()
  //   };
  // })();

  //pulls from api and appends to grid
  function content (data) {
    for(var i = 0; i < data.data.children.length; i++) {
      var reddit = data.data.children[i];
        if(i % 2 === 0) {
          row = $('<div>', {class: 'row'}); //grid.append(modules.row);
          grid.append(row);
      }
      col = $('<div>', {class: 'large-6 medium-6 small-12 columns'}); //row.append(modules.col);
      row.append(col);

      var post = $('<div>', {class: "post"});
      col.append(post);

      //pull image from json file
      var url = $('<img>', {src: reddit.data.url, class: 'picture'});
      post.append(url);

      //pull title from json file
      var title = $('<h1>',{class: 'title', html: reddit.data.title});
      post.append(title);

      var infoSection = $('<div>', {class: "infoSection"});
      post.append(infoSection);

      //pull the author from json file
      var author = $('<h5>', {class: 'author', html: 'by ' + reddit.data.author});
      infoSection.append(author);

      //pull the total amount of up votes from json file
      var votes = $('<div>', {class: 'votes', html: reddit.data.ups + ' Up-Votes!'});
      infoSection.append(votes);

      //filler text placement for each individual grid
      var filler = $('<p>', {class: 'filler', html: 'I Like Turtles...and Cake'});
      post.append(filler);

    }

  }

  $.ajax({
    url : '/api/my_boards.json',
    method : 'GET',
    success: function(data) {
      // for(var i = 0; i < data.data.children.length; i++) {
      //   var titles = data.data.children[i];
      //   var post = $('<li>', {
      //     class: 'title',
      //     html: titles.data.title
      //   });

      //   var picture = '<div><img src="' + titles.data.url + '"></div>';
      // $('.panel').append(post, picture);
      content(data);
    },
    error: function(err) {
      console.log(err);
    }
  });

})();