$('.lightbulb')
  .on('light:on', function (event) {
    $(this).removeClass('off').addClass('on')
  })
  .on('light:off', function (event) {
    $(this).removeClass('on').addClass('off')
  })

$('#master_switch').on('click', function () {
  const lightbulbs = $('.lightbulb')

  // trigger custom global event
  $('body').trigger('lights:toggle')

  // Check if any lightbulbs are on
  if (lightbulbs.is('.on')) {
    lightbulbs.trigger('light:off')
  } else {
    lightbulbs.trigger('light:on')
  }
})
