let elems = document.querySelectorAll('.navigation-drop-down');

document.querySelectorAll(".navigation-button").forEach(button => {
  button.addEventListener('click', function(event) {
    elems.forEach(link => {
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

    elems.forEach(link => {
    link.firstElementChild.classList.remove('navigation-link-open')
  })
})
