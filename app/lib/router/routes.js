Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where:'client',
  action:'action'
});
Router.route('/leaderboard', {
  name: 'leaderboard',
  controller: 'HomeController',
  where:'client',
  action:'leaderboard'
});