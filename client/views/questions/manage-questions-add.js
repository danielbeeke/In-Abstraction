Template.manageQuestionsAdd.events({
    "submit #manage-questions-add": function (event, template) {
        event.preventDefault()

        var questionName = template.find('[name="name"]').value;
        var questionDescription = template.find('[name="description"]').value;

        var questionId = Question.insert({
            name: questionName,
            description: questionDescription
        });

        Router.go('manage-questions')
    }
});
