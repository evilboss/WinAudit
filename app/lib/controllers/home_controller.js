HomeController = RouteController.extend({
  layoutTemplate: 'appLayout',

  subscriptions: function() {

  },

  data: {
  },
  action: function() {
    this.render('Home');
  },
  leaderboard:function(){
    this.render('Leaderboard');
  }

});
