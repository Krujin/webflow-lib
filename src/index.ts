import * as verify from '$utils/verify';
import * as ga from '$utils/triggerEvent';
import * as reCAPTCHA from '$utils/reCaptcha';
import * as misc from '$utils/miscellaneous';

window.ga = ga;
window.verify = verify;
window.reCAPTCHA = reCAPTCHA;
window.misc = misc;