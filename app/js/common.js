$(function() {

  $(document).on('click', '.toggle-mnu', function() {
    $(".toggle-mnu").toggleClass("on");
    $(".sidebar").toggleClass('open');
    return false;
  });

});
