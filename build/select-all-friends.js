javascript:(function(){%0Avar%20container%3Ddocument.querySelectorAll('.fbProfileBrowserResult')%5B1%5D%3Bfunction%20clickCheckboxes(el)%7Bvar%20checkboxes%3Del.querySelectorAll('input%5Btype%3Dcheckbox%5D')%2Cindex%3Bfor(index%3D0%3Bindex%3Ccheckboxes.length%3Bindex%2B%2B)%7Bif(!checkboxes%5Bindex%5D.disabled)%7Bcheckboxes%5Bindex%5D.click()%3B%7D%7D%7D%0A(function%20scrollDown(el%2CprevScrollTop)%7Bel.scrollTop%2B%3D500%3BsetTimeout(function()%7Bif(el.scrollTop%3EprevScrollTop)%7BscrollDown(el%2Cel.scrollTop)%3B%7Delse%7BclickCheckboxes(el)%3B%7D%7D%2C100)%3B%7D(container%2C0))%3B}());