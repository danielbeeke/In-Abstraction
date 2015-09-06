Template.manageAxes.helpers({
    tableSettings: function () {
        return {
            collection: Axes,
            class: 'table',
            rowsPerPage: 50,
            showFilter: true,
            fields: [{
                key: 'name',
                label: 'Name'
            },{
                key: 'description',
                label: 'Description'
            }, {
                label: 'Actions',
                fn: function (value, object) {
                    var editLink = '<a href="/manage/axes/' + object._id + '">Edit</a>';
                    var deleteLink = '<a href="/manage/axes/' + object._id + '/delete">Delete</a>';
                    return new Spacebars.SafeString(editLink + ' ' + deleteLink);
                }
            }]
        }
    }
});