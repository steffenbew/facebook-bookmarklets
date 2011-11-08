// friends container
var container = document.querySelectorAll('.fbProfileBrowserResult')[1];

// set state of all checkboxes in defined element
function clickCheckboxes(el) {
  var checkboxes = el.querySelectorAll('input[type=checkbox]'), index;
  
  for (index = 0; index < checkboxes.length; index++) {
    if ( ! checkboxes[index].disabled) {
      checkboxes[index].click();
    }
  }
}

// recursively scroll down container to load all profiles
(function scrollDown(el, prevScrollTop) {
  el.scrollTop += 500;
  
  // wait for new profiles to load
  setTimeout(function () {
    if (el.scrollTop > prevScrollTop) {
      scrollDown(el, el.scrollTop);
    } else {
      // set state of all checkboxes when all profiles are loaded
      clickCheckboxes(el);
    }
  }, 100);
}(container, 0));
