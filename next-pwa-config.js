const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public'
    // Other PWA configuration options can be added here
  }
});
