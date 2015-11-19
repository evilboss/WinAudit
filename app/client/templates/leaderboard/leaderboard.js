/*****************************************************************************/
/* Leaderboard: Event Handlers */
/*****************************************************************************/
Template.Leaderboard.events({

});

/*****************************************************************************/
/* Leaderboard: Helpers */
/*****************************************************************************/
Template.Leaderboard.helpers({
    players: function(){
        return Players.find().fetch();
    }
});

/*****************************************************************************/
/* Leaderboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Leaderboard.created = function () {
};

Template.Leaderboard.rendered = function () {
};

Template.Leaderboard.destroyed = function () {
};
Template.player.helpers({

});

Template.player.events({

});