/**
 * Automatically updates year elements
 * @param autoCopyright Attribute to add to the copyright text with the value = true 
*/

export const autoCopyright = (
) => {
  const elements = document.querySelectorAll("[autoCopyright='true']");

  if (elements.length === 0) {
    throw new Error("autoCopyright: no elements found.");
  } else {
    elements.forEach((element) => {
      const currentYear = new Date().getFullYear();
      element.innerHTML = String(currentYear);
    });
  }
};