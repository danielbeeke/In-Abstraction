Template.manageAxes.helpers({
    tableSettings: function () {
        return {
            collection: Axes,
            rowsPerPage: 10,
            showFilter: true,
            fields: ['name']
        }
    }
});