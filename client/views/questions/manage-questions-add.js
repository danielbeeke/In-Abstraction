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
    },
    "click .add-a-new-answer": function (event, template) {
        event.preventDefault()
        var Answers = Session.get('manageQuestionsAdd.answers');

        if (!Answers) {
            Answers = []
        }

        Answers.push({
            name: 'New answer'
        });

        Session.set('manageQuestionsAdd.answers', Answers);

    }
});

Template.manageQuestionsAdd.helpers({
    Answers: function () {
        var Answers = Session.get('manageQuestionsAdd.answers');

        return Answers
    }
})