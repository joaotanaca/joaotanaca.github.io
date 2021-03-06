let timeoutId;
function loadLink(element = new Element()) {
  const link = element.getAttribute("href");
  timeoutId = setTimeout(function () {
    window.open(link);
  }, 4000);
  event.preventDefault();
}

function clearTimeOut() {
  clearTimeout(timeoutId);
  event.preventDefault();
}

function clickLink(element = new Element()) {
  window.open(element.getAttribute("href"));
}