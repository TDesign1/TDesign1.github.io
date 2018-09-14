/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

$(function() {
    $('#scroll').click (function() {
      $('html, body').animate({scrollTop: $('.break').offset().top }, 'slow');
      return false;
    });
  });