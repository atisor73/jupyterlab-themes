import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for base16-mexico-light
 */
const plugin = {
    id: 'rouge-dark:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
        const style = '@atisor73/rouge-dark/index.css';
        manager.register({
            name: 'rouge-dark',
            isLight: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
export default plugin;
//# sourceMappingURL=index.js.map