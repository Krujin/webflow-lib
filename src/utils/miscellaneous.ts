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
  let arrowRight: HTMLElement = document.querySelector('#' + sliderId + ' > .w-slider-arrow-right');
  let arrowLeft: HTMLElement = document.querySelector('#' + sliderId + ' > .w-slider-arrow-left');
  let counter = 0;

  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].style.pointerEvents = "none";
  }

  for (let i = 1; i <= hideNb; i++) {
    let position = sliderDots.length - i;
    if (sliderDots[position]) {
      sliderDots[position].style.display = "none";
    }
  }

  arrowRight.addEventListener('click', () => {
    counter++;
    handleArrowVisibility();
  });

  arrowLeft.addEventListener('click', () => {
    counter--;
    handleArrowVisibility();
  });

  function handleArrowVisibility() {
    if (counter >= (sliderDots.length - hideNb - 1)) {
      arrowRight.style.display = "none";
    } else {
      arrowRight.style.display = "flex";
    }
  };
};