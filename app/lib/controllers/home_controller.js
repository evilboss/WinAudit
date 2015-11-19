HomeController = RouteController.extend({
  layoutTemplate: 'appLayout',

  waitOn: function() {
    this.subscribe('allPlayers');
  },

  data: {
    Players: Players.find()
  },
  action: function() {
    this.render('Home');
  },
  leaderboard:function(){
    this.render('Leaderboard');
  }

});
