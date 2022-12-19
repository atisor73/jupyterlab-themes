import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for mandarin-light
 */
const plugin = {
    id: 'mandarin-light:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
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
//# sourceMappingURL=index.js.map