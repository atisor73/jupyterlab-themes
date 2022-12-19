import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for frantic-contrast
 */
const plugin = {
    id: 'frantic-contrast:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
        const style = '@atisor73/frantic-contrast/index.css';
        manager.register({
            name: 'frantic-contrast',
            isLight: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
export default plugin;
//# sourceMappingURL=index.js.map