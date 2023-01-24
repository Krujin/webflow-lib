/**
 * Fires an Analytics event for the selected element
 * @param element The trigger element
 * @param googleId Google analytics ID (GT-XXXXXXXXX, G-XXXXXXXXX, or AW-XXXXXXXXX)
 * @param formId The ID of the form targeted by the conversion
*/

export const triggerConversion = (
    element, googleId, formId
) => {
    element.addEventListener('click', () => {
        function gtag_report_conversion(url) {

            gtag('event', 'conversion', {
                'send_to': `${googleId}/${formId}`
            });
            return false;
        }
    });
};