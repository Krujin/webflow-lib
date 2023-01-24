export const verifyInput = () => {
    console.log('verified');
};

/*function watchForm(formId, submitId, wrapperId) {
    let submitButton = document.getElementById(submitId);
    let submitWrapper = document.getElementById(wrapperId);

    submitWrapper.addEventListener('mouseenter', function(event) {
      if (submitButton.hasAttribute('disabled')) {
        var tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = 'Merci de cocher le captcha afin de pouvoir continuer.';
        event.target.appendChild(tooltip);
      }
    });

    submitWrapper.addEventListener('mouseleave', function(event) {
      var tooltip = event.target.querySelector('.tooltip');
      if (tooltip) {
        event.target.removeChild(tooltip);
      }
    });
  };

  // On Webflow ready:
  var Webflow = Webflow || [];
  Webflow.push(function () {
    watchForm('Lhy1CKDX0msQh-TIogM', 'submitRequest', 'submit-btn-wrapper');
    watchForm('FGyNCIGvwYcYEIfkyKID', 'submitCallback', 'submitCallbackWrapper');
  });

  // reCAPTCHA callback Contact
  function recaptchaCallbackContact() {
    console.log('clicked');
    document.getElementById('submitRequest').removeAttribute('disabled');
  };

  // reCAPTCHA callback Callback
  function recaptchaCallbackCallback() {
    console.log('clicked');
    document.getElementById('submitCallback').removeAttribute('disabled');
  };

  function replaceChar(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
  }

  function addChar(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index);
  }

  function formatName(nameId) {
    let name = document.getElementById(nameId).value;
    const specialChars = ['-', '.', ',', ';', ':', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '<', '>', '/', '?', '[', ']', '{', '}', '_', '"', "'", ' '];

    for (let i = 0; i < name.length; i++) {
      if (i == 0) {
        name = replaceChar(name, i, name[i].toUpperCase());
      } else if (specialChars.indexOf(name[i - 1]) !== -1) {
        name = replaceChar(name, i - 1, ' ');
        name = replaceChar(name, i, name[i].toUpperCase());
      }
    }
    document.getElementById(nameId).value = name;
  };


  function formatPhone(phoneId) {
    let phone = document.getElementById(phoneId).value;
    let pair = 0;

    phone.replace(/\s+$/, '');
    if (phone.length == 10)
      for (let i = 1; i < phone.length; i++) {
        pair++;
        if (pair == 2) {
          phone = addChar(phone, i++, ' ');
          pair = 0;
        }
      }
    document.getElementById(phoneId).value = phone;
  };

  function addInputListener(inputId, inputType) {
    document.getElementById(inputId).addEventListener('change', () => {
      if (inputType === "name")
        formatName(inputId);
      else if (inputType === "phone")
        formatPhone(inputId);
    });
  };*/