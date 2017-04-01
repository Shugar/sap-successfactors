import $ from "jquery";

function hideModal (el) {
  $(el).on('click', () => {
    $('body').css('overflow', 'auto')
    $('.registration')
      .css('display', 'none')
      .show()
      .removeClass('registration--active')
      .delay(300)
      .fadeOut(0)

    if (el === '.registration-form__cancel') {
      $('.registration-form__input').map((index, item) => {
        $(item).val('')
      })
    }
  })
}

function hideModalByEsc () {
  window.onkeydown = (event) => {
    $('body').css('overflow', 'auto')
    if (event.keyCode == 27) return $('.registration')
      .css('display', 'none')
      .show()
      .removeClass('registration--active')
      .delay(300)
      .fadeOut(0)
  }
}

$(document).ready(() => {
  $('.main-button').on('click', () => {
    $('body').css('overflow', 'hidden')
    $('.registration')
      .css('display', 'flex')
      .hide()
      .fadeIn(0)
      .addClass('registration--active')
  })

  hideModal('.registration-overlay')
  hideModal('.registration-form__cancel')
  hideModalByEsc()
});
