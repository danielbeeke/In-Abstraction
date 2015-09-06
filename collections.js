Questions = new Mongo.Collection("questions");

Questions.allow({
    insert: function (userId, doc) {
        return userId;
    },
    update: function (userId, doc, fields, modifier) {
        return doc._uid === userId;
    },
    remove: function (userId, doc) {
        return doc._uid === userId;
    },
    fetch: ['_uid']
});

Questionnaires = new Mongo.Collection("questionnaires");

Questionnaires.allow({
    insert: function (userId, doc) {
        return userId;
    },
    update: function (userId, doc, fields, modifier) {
        return doc._uid === userId;
    },
    remove: function (userId, doc) {
        return doc._uid === userId;
    },
    fetch: ['_uid']
});

Axes = new Mongo.Collection("axes");

Axes.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    },
    fetch: ['_uid']
});
