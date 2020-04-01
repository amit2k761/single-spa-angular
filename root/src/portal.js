import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor';
import { loadApp } from './helper';

async function init() {
  const globalEventDistributor = new GlobalEventDistributor();
  const loadingPromises = [];

  // app1: The URL "/app1/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
  loadingPromises.push(
    loadApp(
      'navbar',
      '/navbar',
      'navbar/main.js',
      '/app1/store.js',
      globalEventDistributor
    )
  );

  await Promise.all(loadingPromises);

  singleSpa.start();
}

init();
