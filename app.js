$('.gender').click(function () {

  $('.gender').removeClass('active')
  $(this).addClass('active')

})

$('.address').click(function () {

  $('.address').removeClass('active')
  $(this).addClass('active')

})

// フォームが送信された時
$('#myForm').submit(function () {
  // genderとactiveの両方のクラスを持つ要素のテキストを取得
  let gender = $('.gender.active').text()

  // addressとactiveの両方のクラスを持つ要素のテキストを取得
  let address = $('.address.active').text()

  $('<input>').attr({
    type: 'hidden',
    name: 'val1234',
    value: gender
  }).appendTo('#myForm');

  $('<input>').attr({
    type: 'hidden',
    name: 'val2345',
    value: address
  }).appendTo('#myForm');

})