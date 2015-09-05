Template.manageAxesAdd.events({
    "submit #manage-axes-add": function (event, template) {
        event.preventDefault()

        var axesName = template.find('[name="name"]').value;
        var axesDescription = template.find('[name="description"]').value;

        var axesId = Axes.insert({
            name: axesName,
            description: axesDescription
        });

        Router.go('manage-axes')
    }
})
