import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('freestyle');
  this.route('examples', function() {
    this.route('registration');
    this.route('contact-info');
    this.route('configurator');
  });
});

export default Router;