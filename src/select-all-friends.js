// friends container
var container = document.querySelectorAll('.fbProfileBrowserResult')[1];

// set state of all checkboxes in defined element
function setCheckboxes(el, isChecked) {
  var checkboxes = el.querySelectorAll('input[type=checkbox]'), index;
  
  for (index = 0; index < checkboxes.length; index++) {
    if ( ! checkboxes[index].disabled) {
      checkboxes[index].checked = isChecked;
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
      setCheckboxes(el, true);
    }
  }, 100);
}(container, 0));
