Template.manageAxesItemDelete.events({
    "submit #manage-axes-item-delete": function (event, template) {
        event.preventDefault()

        Axes.remove({
            _id: this._id,
        });

        Router.go('manage-axes')
    }
})
