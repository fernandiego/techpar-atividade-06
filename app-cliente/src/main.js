const angular = require("angular")
const bob = angular.module("atividade04", [require("angular-route")]);
bob.controller("controllerlistapessoa", require("./controllerlistapessoa"))
bob.controller("controllersalvapessoa", require("./controllersalvapessoa"))
bob.service("pessoaservice", require("./servicos"))


bob.config($routeProvider => {

    $routeProvider.when("/form", {
        controller: "controllersalvapessoa",
        templateUrl: "./form.html",
        controllerAs: "pc"
    });
    $routeProvider.when("/listapessoa", {
        controller: "controllerlistapessoa",
        templateUrl: "./listapessoa.html",
        controllerAs: "pc"
    });
    $routeProvider.when("/", {
        redirectTo: "/listapessoa"
    });
})
angular.bootstrap(document.getElementById("app"), ['atividade04'])