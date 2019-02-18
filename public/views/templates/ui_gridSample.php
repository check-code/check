<head>
    <title>UI Grid Sample</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/angular-ui/bower-ui-grid/ui-grid.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.7/angular.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/angular-ui/bower-ui-grid/ui-grid.min.js"></script>
	
	<script src="./../../js/index.js"></script>
	<script src="./../../js/ui_gridSample.js"></script>
	
	<style type="text/css">
	.grid1 {
	  width: 960px;
	  height: 35px ;
	  border:1px solid #cc3333;
	}
	.border{ 
		border:1px solid steelblue;
	}
	</style>
</head>
<div ng-app='grievancesystem'>

    <div ng-controller="gridCtrl as $ctrl">
	 <button type="button" class="btn btn-success" ng-click="$ctrl.hideGrid = !$ctrl.hideGrid">
        {{ $ctrl.hideGrid && 'Show' || 'Hide' }} Grid
      </button>
      hdgjgz
      <div class="border">
      <div id="grid1" ng-hide="$ctrl.hideGrid" ui-grid="{ data: $ctrl.myData }" ui-grid-auto-resize class="grid1"></div>
      </div>
    </div>
</div>