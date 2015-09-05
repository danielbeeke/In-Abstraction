Meteor.publish('Axes', function(){
    return Axes.find({})
});