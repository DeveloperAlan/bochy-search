var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homePage'
  },

  homePage: function() {
    $('body').append("it works");
  }
});

App.router = new App.Router();