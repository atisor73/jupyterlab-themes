import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for base16-mexico-light
 */
const plugin = {
    id: 'base16-mexico-light:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
        const style = '@arbennett/base16-mexico-light/index.css';
        manager.register({
            name: 'base16-mexico-light',
            isLight: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
export default plugin;
//# sourceMappingURL=index.js.map