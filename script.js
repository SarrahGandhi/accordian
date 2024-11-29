// Get all the accordion headers using getElementsByClassName
const headers = document.getElementsByClassName("accordion-header");

// Loop through each header using a traditional for loop
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    // Get the current accordion item (the parent of the header)
    const accordionItems = document.getElementsByClassName("accordion-item");

    // Loop through all accordion items and remove the 'active' class from all except the current one
    for (let j = 0; j < accordionItems.length; j++) {
      if (accordionItems[j].contains(this)) {
        // Toggle the 'active' class only for the clicked accordion item
        accordionItems[j].classList.toggle("active");
      } else {
        // Remove the 'active' class from other accordion items
        accordionItems[j].classList.remove("active");
      }
    }
  });
}
