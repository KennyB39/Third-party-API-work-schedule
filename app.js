var currentDate = moment().fomat('dddd')+""+moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hrs = moment() . hours();
var userInput = $(".userInput");
var hrSpan = $(".hrSpan");
var saveBtn = $(".saveBtn");


var intervaL = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                          + momentNow.format('dddd')
                           .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

