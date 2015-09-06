Template.manageAxesItem.events({
    "submit #manage-axes-item": function (event, template) {
        event.preventDefault()

        var axesName = template.find('[name="name"]').value;
        var axesDescription = template.find('[name="description"]').value;

        Axes.update({
            _id: this._id,
        }, {
            $set: {
                name: axesName,
                description: axesDescription
            }
        });

        Router.go('manage-axes')
    }
})
