var app = angular.module('listaTarefas',
 [])
  .controller('TarefasController', function($scope){
    var id = 0;
    $scope.tarefas = [];

    function criaTarefa(){
      return {
        id: id++,
        descricao: "",
        feita: false
      };
    }

    $scope.tarefa = criaTarefa();

    $scope.adicionarTarefa = function(tarefa){
      $scope.tarefas.push(angular.copy(tarefa));
      $scope.tarefa = criaTarefa();
      $scope.formNovaTarefa.$setPristine();
    }
  });
