window.onload = getTime();
var today = moment();

$('#currentDay').text(today.format('dddd, MMMM Do YYYY, h:mm a'));

function getTime() {
  var hour = moment().hour();

  if (hour > 9) {
    $('#9am').addClass('past');
  } else if (hour == 9) {
    $('#9am').addClass('present');
  } else {
    $('#9am').addClass('future');
  }
  if (hour > 10) {
    $('#10am').addClass('past');
  } else if (hour == 10) {
    $('#10am').addClass('present');
  } else {
    $('#10am').addClass('future');
  }
  if (hour > 11) {
    $('#11am').addClass('past');
  } else if (hour == 11) {
    $('#11am').addClass('present');
  } else {
    $('#11am').addClass('future');
  }
  if (hour > 12) {
    $('#12pm').addClass('past');
  } else if (hour == 12) {
    $('#12pm').addClass('present');
  } else {
    $('#12pm').addClass('future');
  }
  if (hour > 13) {
    $('#1pm').addClass('past');
  } else if (hour == 13) {
    $('#1pm').addClass('present');
  } else {
    $('#1pm').addClass('future');
  }
  if (hour > 14) {
    $('#2pm').addClass('past');
  } else if (hour == 14) {
    $('#2pm').addClass('present');
  } else {
    $('#2pm').addClass('future');
  }
  if (hour > 15) {
    $('#3pm').addClass('past');
  } else if (hour == 15) {
    $('#3pm').addClass('present');
  } else {
    $('#3pm').addClass('future');
  }
  if (hour > 16) {
    $('#4pm').addClass('past');
  } else if (hour == 16) {
    $('#4pm').addClass('present');
  } else {
    $('#4pm').addClass('future');
  }
  if (hour > 17) {
    $('#5pm').addClass('past');
  } else if (hour == 17) {
    $('#5pm').addClass('present');
  } else {
    $('#5pm').addClass('future');
  }
};

var saveButton = $('.saveBtn');

saveButton.on('click', function(event) {
  event.preventDefault();

  var time = $(this).parent().attr('id');
  var textInput = $(this).siblings('.description').val();

  localStorage.setItem(time, JSON.stringify(textInput));
})

function savedEvent() {
  var time = $('.time-block');
  
  time.each(function() {
    var timeId = $(this).attr('id');
    var textInput = JSON.parse(localStorage.getItem(timeId));

    $(this).children('.description').val(textInput);
  })
};

savedEvent();