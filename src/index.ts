import { helloYou } from './hello';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Valouz';
  helloYou(name);
});