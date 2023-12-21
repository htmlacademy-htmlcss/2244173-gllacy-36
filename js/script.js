let elems = document.querySelectorAll('.navigation-drop-down');
let button = document.querySelectorAll(".navigation-button");

button.forEach(button => {
  button.addEventListener('click', function(event) {
    elems.forEach(link => {
      if (link.button !== button) {
        link.firstElementChild.classList.remove('navigation-link-open')
      }
    })

    button.classList.toggle('navigation-link-open');

    event.preventDefault();
    event.stopPropagation();
  })
});

document.addEventListener('click', function(event) {
  let isClickInside = event.target.classList.contains('navigation-link-active');
  if (isClickInside) {
    event.target.classList.contains('navigation-button') == true ||
    event.target.classList.contains('popover') == true ||
    event.target.classList.contains('navigation-text')
  } else {
    elems.forEach(link => {
        link.firstElementChild.classList.remove('navigation-link-open')
      })
  }
});


/// slider
