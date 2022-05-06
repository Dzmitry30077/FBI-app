import App from './src/components/App';

(async () => {
  const app = await App();

  // eslint-disable-next-line no-undef
  const root = document.getElementById('root');

  root.append(app);
})();
