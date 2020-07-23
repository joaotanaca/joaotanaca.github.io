function menuOpenMessage(element = new Element()) {
  const targetId = element.getAttribute("target");
  let display_message = document.querySelector("#display-message");
  document.querySelector(`#${targetId}`).className += " active";
  display_message.className += ` ${targetId}`;

  !display_message.className.includes("active") &&
    display_message.classList.add("active");
}

function removeMessage(element = new Element()) {
  const elementId = element.getAttribute("target");

  let message_apresentation = document.querySelector(`#${elementId}`);

  let display_message = document.querySelector("#display-message");

  let idTrue = false;

  const ids = ["about-me", "book", "xp"];

  message_apresentation.className = message_apresentation.className.replace(
    "active",
    ""
  );
  display_message.className = display_message.className.replace(
    `${elementId}`,
    ""
  );

  ids.forEach((id) => {
    if (!idTrue) idTrue = display_message.className.includes(id) && true;
  });

  if (!idTrue && display_message.className.includes("active"))
    display_message.className = display_message.className.replace("active", "");
  return;
}
