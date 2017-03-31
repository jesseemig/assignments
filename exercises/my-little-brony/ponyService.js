angular.module("routingApp")

    .service("PonyService", [function () {

        this.newPony = [];

        this.upload = {};

        this.addUpload = function (newPony, upload) {
            this.newPony.push(upload);
        };

        this.removePony = function (index) {
            this.newPony.splice(index, 1);
        };

    }]);


