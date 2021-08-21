import MDItoFAIcon from '../src/mdi-fa.js';

import { mdiAccount } from '@mdi/js';
import { icon, dom, library } from '@fortawesome/fontawesome-svg-core';

describe('fontawesome-svg-core integration', () => {
  test('should build an icon definition compatible with fontawesome-svg-core', () => {
    const converter = new MDItoFAIcon();
    const accountIcon = converter.convert(mdiAccount, 'account');

    // The abstract contains a SVG element definition for the constructed icon. We can use this to validate the resultant element
    const faAccountIconAbstract = icon(accountIcon).abstract;

    expect(faAccountIconAbstract[0].tag).toEqual('svg');
    expect(faAccountIconAbstract[0].attributes['data-icon']).toEqual('account');
    expect(faAccountIconAbstract[0].attributes['data-prefix']).toEqual('mdi');
    expect(faAccountIconAbstract[0].attributes.viewBox).toEqual('0 0 24 24');
    expect(faAccountIconAbstract[0].children[0].tag).toEqual('path');
    expect(faAccountIconAbstract[0].children[0].attributes.d).toEqual(mdiAccount);
  });

  test('should build an icon that can be used in the DOM as expected', async () => {
    const converter = new MDItoFAIcon();
    const accountIcon = converter.convert(mdiAccount, 'account');

    // Add this to the library to be a condidate for DOM substitution
    library.add(accountIcon);

    // Create a DOM element and browser properties to wrap our icon element
    const iconDOMWrapper = document.createElement('p');
    iconDOMWrapper.innerHTML = 'This is some text <i class="mdi fa-account">';
    document.body.appendChild(iconDOMWrapper);

    // Process our DOM wrapper
    await dom.i2svg({ node: iconDOMWrapper });

    // Ensure the document is modified in the way expected
    expect(iconDOMWrapper.innerHTML).toEqual(`This is some text <svg class="svg-inline--fa fa-account fa-w-16" aria-hidden="true" focusable="false" data-prefix="mdi" data-icon="account" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-fa-i2svg=""><path fill="currentColor" d="${mdiAccount}"></path></svg><!-- <i class="mdi fa-account"></i> Font Awesome fontawesome.com -->`);
  });
});
