var express = require("express");
var todoRouter = express.Router();
var Todo = require("../models/todo");

todoRouter.route("/")
    .get(function (req, res) {

        /*
        * Instead of finding EVERYTHING, we will instead filter the results to only return the todo items that belong
        * to the currently logged-in user (req.user, which was provided by the express-jwt package).
        * */
        Todo.find({user: req.user._id}, function (err, todos) {
            if (err) res.status(500).send(err);
            res.send(todos);
        });
    })
    .post(function (req, res) {
        var todo = new Todo(req.body);

        // We need to add the user property to every todo item before it gets saved to the DB
        todo.user = req.user._id;
        todo.save(function (err, newTodo) {
            if (err) res.status(500).send(err);
            res.status(201).send(newTodo);
        });
    });

todoRouter.route("/:todoId")
    .get(function (req, res) {

        /*
        * We change `findById` to `findOne` so that we can query the DB by more than JUST the id, but instead
        * by BOTH the id of the todo AND for those which belong only to the currently logged-in user.
        * */
        Todo.findOne({user: req.user._id, _id: req.params.todoId}, function (err, todo) {
            if (err) res.status(500).send(err);
            if (!todo) res.status(404).send("No todo item found.");
            else res.send(todo);
        });
    })
    .put(function (req, res) {

        // Also change `findByIdAndUpdate` to `findOneAndUpdate` so we can query by id and by user
        Todo.findOneAndUpdate({user: req.user._id, _id: req.params.todoId}, req.body, {new: true}, function (err, todo) {
            if (err) res.status(500).send(err);
            res.send(todo);
        });
    })
    .delete(function (req, res) {

        // And change `findByIdAndRemove` to `findOneAndRemove`
        Todo.findOneAndRemove({user: req.user._id, _id: req.params.todoId}, function (err, todo) {
            if (err) res.status(500).send(err);
            res.send(todo);
        });
    });

module.exports = todoRouter;