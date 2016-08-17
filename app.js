var app = angular.module('ListaTarefas',
 [])
  .controller('TarefasController',
   function($scope){
    $scope.id = 0;
    $scope.tarefas = [];
    $scope.novaTarefa = {
      feita: false
    };

    $scope.atualizaCheckbox = function(tarefa){
      var label = document.querySelector("#label_tarefa_" + tarefa.id);
      if(tarefa.feita){
        label.style.textDecoration = "line-through";
      }
      else{
        label.style.textDecoration = "none";
      }
    }


    $scope.adicionarTarefa = function(tarefa){
      tarefa.id = $scope.id;
      $scope.id = $scope.id + 1;
      nova = {};
      nova.id = tarefa.id;
      nova.descricao = tarefa.descricao;
      nova.feita = tarefa.feita;
      $scope.tarefas.push(nova);
      $scope.novaTarefa = {
        feita: false,
        descricao: ''
      };
      $scope.formNovaTarefa.$setPristine();
    }
  });
