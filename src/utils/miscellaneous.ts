/**
 * Update copyright
 * @param autoCopyright Attribute to add to the copyright text with the value = true 
*/

export const autoCopyright = (
) => {
  const elements = document.querySelectorAll("[autoCopyright='true']");

  elements.forEach((element) => {
      const currentYear = new Date().getFullYear();
      element.innerHTML = currentYear;
  });
};