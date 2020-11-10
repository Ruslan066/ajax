$.ajax({
  url: '<url-адрес>',
  type: 'post',
  data: '<отправляемые_данные>', // можно строкой, а можно, например, так: $('input[type="text"], input[type="radio"]:checked, input[type="checkbox"]:checked, select, textarea')
  dataType: 'json',
  beforeSend: function() {
    $('#sendajax').button('loading');
  },
  complete: function() {
    $('#sendajax').button('reset');
  },
  success: function(json) {
  },
  error: function(xhr, ajaxOptions, thrownError) {
    alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
  }
});