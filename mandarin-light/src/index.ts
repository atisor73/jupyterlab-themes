import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for mandarin-light
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'mandarin-light:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@atisor73/mandarin-light/index.css';

    manager.register({
      name: 'mandarin-light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
