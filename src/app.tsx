import { runApp, IAppConfig } from 'ice';
import 'uno.css';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
};

runApp(appConfig);
