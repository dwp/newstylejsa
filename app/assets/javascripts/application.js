/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Accessible Modal
$(document).ready(function() {
  var findModal = function(elem) {

    var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

    var firstTabbable = tabbable.first();
    var lastTabbable = tabbable.last();
    // set focus on first tabbable element
    // NOTE:  If this doesn't exist, then the user is able to tab through all of the page
    //        page elements that sit behind the modal dialog...
    //        Work around being that the 'Continue' button is on focus, with tabbing
    //        through not being permissiable
    firstTabbable.focus();

    // send last tabbable back to first
    lastTabbable.on('keydown', function (e) {
       if ((e.which === 9 && !e.shiftKey)) {
           e.preventDefault();
           firstTabbable.focus();
       }
    });

    // send last shift tabbable back to last
    firstTabbable.on('keydown', function (e) {
        if ((e.which === 9 && e.shiftKey)) {
            e.preventDefault();
            lastTabbable.focus();
        }
    });

    // allow esc to close Modal
    elem.on('keyup', function(e){
      if (e.keyCode === 27 ) {
        elem.hide();
        $('.govuk-modal-overlay').hide();
        $('html').removeClass("noscroll");
      };
    });
  };

  // show modal and overlay and lock scroll
  // $('.show-modal').click(function(e){
  //   e.preventDefault();
  //
  //   $('.govuk-modal').show();
  //   $('.govuk-modal-overlay').show();
  //   $('html').addClass("noscroll");
  //   findModal($('.govuk-modal'));
  // });

  if(document.querySelector(".govuk-modal")){
    setTimeout(function(){
      $('.govuk-modal').show();
      $('.govuk-modal-overlay').show();
      $('html').addClass("noscroll");
      findModal($('.govuk-modal'));
    }, 5000); // timed delay in nano-seconds (set to 5 seconds)
  }

  //hide modal and overlay
  $('.close-modal').click(function(e){
    e.preventDefault();

    $('.govuk-modal').hide();
    $('.govuk-modal-overlay').hide();
    $('html').removeClass("noscroll");
  });

});
// Set month names
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var monthNamesShort = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

// Show current date
date = new Date();
y = date.getFullYear();
m = date.getMonth();
d = date.getDate();

if(document.querySelector(".date")) {
  document.querySelector(".date").innerHTML = d + " " + monthNames[m] + " " + y;
}

if(document.querySelector(".short-date")) {
  document.querySelector(".short-date").innerHTML = d + " " + monthNamesShort[m] + " " + y;
}

// Show backdate date
backdateDate = new Date();
var numberOfDaysToAdd = -60;
backdateDate.setDate(backdateDate.getDate() + numberOfDaysToAdd);
ny = backdateDate.getFullYear();
nm = backdateDate.getMonth();
nd = backdateDate.getDate();

if(document.querySelector(".backdate-date")) {
  document.querySelector(".backdate-date").innerHTML = nd + " " + nm + " " + ny;
}

// convert month numbers to names
var months = document.querySelector(".months");

if(document.querySelectorAll (".months")) {
    function numberToMonths() {
        months.innerHTML = months.innerHTML.replace('01', 'January');
        months.innerHTML = months.innerHTML.replace('02', 'February');
        months.innerHTML = months.innerHTML.replace('03', 'March');
        months.innerHTML = months.innerHTML.replace('04', 'April');
        months.innerHTML = months.innerHTML.replace('05', 'May');
        months.innerHTML = months.innerHTML.replace('06', 'June');
        months.innerHTML = months.innerHTML.replace('07', 'July');
        months.innerHTML = months.innerHTML.replace('08', 'August');
        months.innerHTML = months.innerHTML.replace('09', 'September');
        months.innerHTML = months.innerHTML.replace('10', 'October');
        months.innerHTML = months.innerHTML.replace('11', 'November');
        months.innerHTML = months.innerHTML.replace('12', 'December');
    }
    numberToMonths();
}
