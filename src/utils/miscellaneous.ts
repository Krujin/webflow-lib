/**
 * Automatically updates year elements
 * @param autoCopyright Attribute to add to the copyright text with the value = true 
*/

export const autoCopyright = (
) => {
  const elements = document.querySelectorAll("[autoCopyright='true']");

  if (elements.length === 0) {
    console.log("autoCopyright: no elements found.");
  } else {
    elements.forEach((element) => {
      const currentYear = new Date().getFullYear();
      element.innerHTML = String(currentYear);
    });
  }
};

/**
 * Remove specific slider dots
 * @param sliderId The id of the targeted slider
 * @param hideNb The number of dots to hide
*/

export const removeSliderDots = (
  sliderId: string, hideNb: number
) => {
  let sliderDots: NodeListOf<HTMLElement> = document.querySelectorAll('#' + sliderId + ' > .w-slider-nav > .w-slider-dot');
  let arrowRight = document.querySelector('#' + sliderId + ' > .w-slider-arrow-right');
  let arrowLeft = document.querySelector('#' + sliderId + ' > .w-slider-arrow-left');
  let counter = 0;

  console.log(sliderDots);

  for (let i = 1; i < hideNb; i++) {
    let position = sliderDots.length - i;
    console.log(sliderDots.length);
    if (sliderDots[position]) {
      console.log('called');
      sliderDots[position].style.display = "none";
    }
  }

  arrowRight.addEventListener('click', () => {
    counter++;
    if (counter >= (sliderDots.length - hideNb - 1)) {
      arrowRight.style.display = "none";
    } else {
      arrowRight.style.display = "flex";
    }
  });

  arrowLeft.addEventListener('click', () => {
    counter--;
  });
};