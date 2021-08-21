import MDItoFAIcon from '../src/mdi-fa.js';

import { mdiAccount } from '@mdi/js';

describe('constructor', () => {
  test('should construct converter with default options', () => {
    const converter = new MDItoFAIcon();
    expect(converter.mdiPrefix).toEqual('mdi');
    expect(converter.mdiWidth).toEqual(24);
    expect(converter.mdiHeight).toEqual(24);
  });

  test('should construct with a custom prefix', () => {
    const converter = new MDItoFAIcon({ prefix: 'custom' });
    expect(converter.mdiPrefix).toEqual('custom');
    expect(converter.mdiWidth).toEqual(24);
    expect(converter.mdiHeight).toEqual(24);
  });

  test('should construct with a custom width', () => {
    const converter = new MDItoFAIcon({ width: 32 });
    expect(converter.mdiPrefix).toEqual('mdi');
    expect(converter.mdiWidth).toEqual(32);
    expect(converter.mdiHeight).toEqual(24);
  });

  test('should construct with a custom height', () => {
    const converter = new MDItoFAIcon({ height: 32 });
    expect(converter.mdiPrefix).toEqual('mdi');
    expect(converter.mdiWidth).toEqual(24);
    expect(converter.mdiHeight).toEqual(32);
  });
});

describe('convert', () => {
  test('should convert with default settings', () => {
    const converter = new MDItoFAIcon();

    const faIcon = converter.convert(mdiAccount, 'account');
    expect(faIcon).toEqual({
      prefix: 'mdi',
      iconName: 'account',
      icon: [
        24,
        24,
        [],
        '',
        'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
      ],
    });
  });

  test('should convert with options', () => {
    const converter = new MDItoFAIcon({
      prefix: 'abc',
    });

    const faIcon = converter.convert(mdiAccount, 'account', {
      height: 32,
      width: 32,
      ligatures: [],
      unicode: 'E000',
    });
    expect(faIcon).toEqual({
      prefix: 'abc',
      iconName: 'account',
      icon: [
        32,
        32,
        [],
        'E000',
        'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
      ],
    });
  });
});
