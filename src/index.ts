import helloName from '$utils/hello';

window.Webflow ||= [];
window.Webflow.push(() => {
  helloName("Val");
});