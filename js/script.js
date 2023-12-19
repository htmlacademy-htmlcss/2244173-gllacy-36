document.querySelectorAll(".navigation-button").forEach(button => {
  button.addEventListener('click', function(event) {
    document.querySelectorAll('.navigation-drop-down').forEach(link => {
      if (link.querySelector('.navigation-button') !== button) {
        link.firstElementChild.classList.remove('navigation-link-open')
      }
    })

    button.classList.toggle('navigation-link-open')

    event.preventDefault();
  })
})

document.body.addEventListener('click', function(event) {
  if (
    event.target.classList.contains('navigation-button') == true ||
    event.target.classList.contains('popover') == true
    ) return

  document.querySelectorAll('.navigation-drop-down').forEach(link => {
    link.classList.remove('navigation-link-open')
  })

})
