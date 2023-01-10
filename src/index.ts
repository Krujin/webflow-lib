import { helloYou } from '$utils/hello';

window.Webflow ||= [];
window.Webflow.push(() => {
  helloYou("Val");
});