import verifyInput from '$utils/inputVerifier';

window.Webflow ||= [];
window.Webflow.push(() => {
  verifyInput();
});