function translator(){
   let url = 'https://www.fourtonfish.com/hellosalut/?';
   $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function ({hello}) {
    $('DIV#hello').html(hello);
  });
}

$('document').ready(function () {
  $('INPUT#btn_translate').click(translator());
  
  $('INPUT#language_code').focus(function () {
    $(this).keydown(function (e) {
      if (["Enter", "NampadEnter"].includes(e.code)) {
        translator();
      }
    });
  });
  
});

