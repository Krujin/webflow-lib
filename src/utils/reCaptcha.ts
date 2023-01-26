/**
 * Calls reCAPTCHA v3 on input change 
 * @param publicKey reCAPTCHA v3 public key
 * @param triggerId The id of a required input which will trigger token generation
 * @param inputId The id of the input which will contain the token
*/

export const generateToken = (
  publicKey: string, triggerId: string, inputId: string
) => {
  const trigger = document.getElementById(triggerId);

  trigger.addEventListener('change', function(eventObj) {
    grecaptcha.ready(function () {
      grecaptcha.execute(publicKey, { action: 'submit' }).then(function (token) {
        document.getElementById(inputId).value = token;
      });
    });
  });
};

// function recaptchaCallbackContact() {
//   console.log('clicked');
//   document.getElementById('submitRequest').removeAttribute('disabled');
// };