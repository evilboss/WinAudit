Meteor.startup(function() {
    //Start of changes
    var connectionSettings = {
        host     : 'localhost',
        user     : 'gilbertor',
        password : 'gilbertor@101',
        database : 'cdbm'
    };
    var db = Mysql.connect(connectionSettings);
    //"posts" -> a table name inside your database.
    Players = db.meteorCollection("players", "playersCollection");
    //End of changes, that's it!
//publish the collection as you used to do with Mongo.Collection
});