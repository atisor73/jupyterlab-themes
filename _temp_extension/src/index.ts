import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @atisor73/jupyterlab-themes extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@atisor73/jupyterlab-themes:plugin',
  description: 'JupyterLab light theme extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension @atisor73/jupyterlab-themes is activated!');
  }
};

export default plugin;
