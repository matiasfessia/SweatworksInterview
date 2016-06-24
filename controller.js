angular.module('test', [])
  .controller('testController', ['$scope', function($scope) {
    $scope.numbers = [];
    $scope.filter  = 'all';
    $scope.side    = 'left';

    $scope.showNumbers = function () {
      if (typeof $scope.min !== 'undefined' && typeof $scope.max !== 'undefined' && $scope.min <= $scope.max)  {
        // the min and max values are good to start to adding numbers to the list
        $scope.numbers = [];
        for (var i = $scope.min; i <= $scope.max; i++ ) {
          switch($scope.filter) {
            case 'all':
              $scope.numbers.push(i);
              break;
            case 'even':
              if (i%2 === 0) {
                $scope.numbers.push(i);
              }
            break;
            case 'odd':
              if (i%2 !== 0) {
                $scope.numbers.push(i);
              }
            break;
          };
        }
      } else {
        $scope.numbers = [];
      }
    };

    // when the filters change, the watcher trigger the function to show the numbers
    $scope.$watch(
      'filter',
      function (newValue, oldValue) {
        $scope.showNumbers();
      }
    );
  }])
;
