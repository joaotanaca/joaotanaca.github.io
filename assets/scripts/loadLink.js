let timeoutId;
function loadLink(element = new Element()) {
  const link = element.getAttribute("href");
  timeoutId = setTimeout(function () {
    window.open(link);
  }, 4000);
  event.preventDefault();
}

function clearTimeOut() {
  console.log(timeoutId);
  clearTimeout(timeoutId);
  event.preventDefault();
}
