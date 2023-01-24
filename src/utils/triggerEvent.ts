/**
 * Fires an Analytics event for the selected element
 * @param elementId The trigger elementId
 * @param googleId Google analytics ID (GT-XXXXXXXXX, G-XXXXXXXXX, or AW-XXXXXXXXX)
 * @param formId The ID of the form targeted by the conversion
*/

export const triggerConversion = (
    elementId, googleId, formId
) => {
    document.getElementById(elementId).addEventListener('click', () => {
        console.log('event-sent');
        gtag('event', 'conversion', {
            'send_to': `${googleId}/${formId}`
        });
        return false;
    });
};