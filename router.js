Router.route(
    '/',
    {
        name: 'home'
    }
);

Router.route(
    '/manage',
    {
        name: 'manage'
    }
);

Router.route(
    '/manage/questions',
    {
        name: 'manage-questions'
    }
);

Router.route(
    '/manage/questions/add',
    {
        name: 'manage-questions-add',
        waitOn: function () {
            return Meteor.subscribe('Axes')
        },
        data: function () {
            return {
                Axes: Axes.find()
            }
        }
    }
);

Router.route(
    '/manage/questions/:_id',
    {
        name: 'manage-questions-item'
    }
);

Router.route(
    '/manage/questions/:_id/delete',
    {
        name: 'manage-questions-item-delete'
    }
);

Router.route(
    '/manage/axes',
    {
        name: 'manage-axes',
        waitOn: function () {
            return Meteor.subscribe('Axes')
        }
    }
);

Router.route(
    '/manage/axes/add',
    {
        name: 'manage-axes-add',
        waitOn: function () {
            return Meteor.subscribe('Axes')
        }
    }
);

Router.route(
    '/manage/axes/:_id',
    {
        name: 'manage-axes-item'
    }
);

Router.route(
    '/manage/axes/:_id/delete',
    {
        name: 'manage-axes-item-delete'
    }
);

Router.route(
    '/questionnaire',
    {
        name: 'questionnaire'
    }
);