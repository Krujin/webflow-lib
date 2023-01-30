/**
 * Automatically updates year elements
 * @param autoCopyright Attribute to add to the copyright text with the value = true 
*/

export const autoCopyright = (
) => {
  const elements = document.querySelectorAll("[autoCopyright='true']");

  console.log(elements, elements.length);
  elements.forEach((element) => {
      const currentYear = new Date().getFullYear();
      element.innerHTML = String(currentYear);
  });
};