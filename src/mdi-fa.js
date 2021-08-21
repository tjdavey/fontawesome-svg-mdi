const DEFAULT_PREFIX = 'mdi';
const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;

class MDItoFAIcon {
  constructor (options = {}) {
    this.mdiPrefix = options.prefix || DEFAULT_PREFIX;
    this.mdiWidth = options.width || DEFAULT_WIDTH;
    this.mdiHeight = options.height || DEFAULT_HEIGHT;
  }

  convert (mdiIcon, faIconName, options = {}) {
    return {
      prefix: this.mdiPrefix,
      iconName: faIconName,
      icon: [
        options.width || this.mdiWidth,
        options.height || this.mdiHeight,
        options.ligatures || [],
        options.unicode || '',
        mdiIcon,
      ],
    };
  }
}

export default MDItoFAIcon;
