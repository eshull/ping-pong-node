import { ping } from './ping';
import './styles.css';
// import '../dist/index.html';

$(document).ready(function() {
  $('#ping-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = ping(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
