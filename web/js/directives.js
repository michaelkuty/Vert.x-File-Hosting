'use strict';
/* Directives */
angular.module('filehosting.directives', []).
directive('match', function($parse) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      scope.$watch(function() {        
        return $parse(attrs.match)(scope) === ctrl.$modelValue;
      }, function(currentValue) {
        ctrl.$setValidity('mismatch', currentValue);
      });
     }
    };
  }).
directive('gridster', function($timeout) {
  return {
    restrict: 'AC',
    scope: { model: '=model' },
    template: '<ul><div filewidget ng-repeat="item in model" widget-model="item"></div></ul>',
    link: function($scope, $element, $attributes, $controller) {
      var gridster;
      var ul = $element.find('ul');
      var defaultOptions = {
        widget_margins: [5, 5],
        widget_base_dimensions: [70, 70],
        avoid_overlapped_widgets:false
      };
      var options = angular.extend(defaultOptions, $scope.$eval($attributes.options));

      $timeout(function() {
        gridster = ul.gridster(options).data('gridster');
        
        gridster.options.draggable.stop = function(event, ui) {
          //update model
          angular.forEach(ul.find('li'), function(item, index) {
            var li = angular.element(item);
            if (li.attr('class') === 'preview-holder') return;
            var widget = $scope.model[index];
            widget.row = li.attr('data-row');
            widget.col = li.attr('data-col');

          });
          $scope.$apply();
        };
      });
      
      var attachElementsToGridster = function(lis) {
        //attaches elements to gridster
        gridster.remove_all_widgets();
        angular.forEach(lis, function(value, key){
            var li = angular.element(value);
            gridster.add_widget(li);
            /*var $w = li.addClass('gs_w').appendTo(gridster.$el).hide();
            gridster.$widgets = gridster.$widgets.add($w);
            gridster.register_widget($w).add_faux_rows(1).set_dom_grid_height();
            $w.fadeIn();*/
        });

      };

      $scope.$watch('model', function() {
       $timeout(function() { 
          attachElementsToGridster(ul.find('li')); }); //attach to gridster
      });
    }
  };
}).
directive('filewidget', function() {
  return {
    restrict: 'AC',
    scope: { widgetModel: '=' },
    replace: true,
    template:
      '<li data-col="{{widgetModel.col}}" class="{{widgetModel.type}}" data-row="{{widgetModel.row}}" data-sizex="{{widgetModel.sizex}}" data-sizey="{{widgetModel.sizey}}">'+
        '{{widgetModel.text}}' + 
      '</li>',
    link: function($scope, $element, $attributes, $controller) {
    }
  }
});
