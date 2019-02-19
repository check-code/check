<head>
   
    <link rel="stylesheet" href="js/libraries/bootstrap.min.css">
     <link rel="stylesheet" href="css/userTemplate.css">
    <link rel="stylesheet" href="css/aicte_partials.css">

    <title>Document1</title>

    <link rel="stylesheet" type="text/css" href="js/libraries/angular-ui-grid/css/ui-grid.core.min.css">
    <script src="js/libraries/angular-ui-grid/ui-grid.core.min.js"></script> 

    <script src="js/libraries/angular-ui-grid/ui-grid.core.min.js"></script>

</head>
<div>
    <div ng-controller="appController">
    	<div class="container-fluid">

    		<div class="row">
    			<div class="col-md-2 leftTop">
    				<!-- nav top head -->
    				<div class="row navTop align-items-center">
    					<span class="col-md-4 logo"><img src="assets/logos/aicte.png"></span>
    					<span class="col-md-8 navTop-head">AICTE</span>
    				</div>
    			</div>

    			<div  class="col-md-10 rightTop align-self-center">
				 	<div class="row justify-content-end ">
				 		<span class="top-icon"><img src="assets/icons/notifiaction.png"></span>
				 		<span class="top-icon"><img src="assets/icons/message.png"></span>
				 		<div class=" top-icon dropdown">
				 			<img src="assets/icons/user.png">AICTE Name 
				 			<span class=""> &#x25BC;
				 				<div class="dropdown-content">
							      <a href="#">Profile</a>
							      <a style="cursor: pointer;" ng-click="logout()">Logout</a>
							 	</div>
				 			</span>
				 		</div>
				 	</div>
				</div>
			</div>

    		<div class="row">
    			<div class="col-md-2 leftNav">
    				<!-- navigation left dash board -->
    				<div class="sideBtn active_sidebtn" ng-click="page = 'dashboard_aicte'">
    					<img src="assets/icons/dashboard.png" class="icons">
    					<div class="side-link">Dashboard</div>
    				</div>

    				<div class="sideBtn" ng-click="page = 'grievances_aicte'">
    					<img src="assets/icons/grievance.png" class="icons">
    					<div class="side-link">Grievances</div>
    				</div>

    				<div class="sideBtn" ng-click="page = 'searchApplication_aicte'">
    					<img src="assets/icons/search.png" class="icons">
    					<div class="side-link">Search Application</div>
    				</div>

    				<div class="sideBtn" ng-click="page = 'manageOmbudsman_aicte'">
    					<img src="assets/icons/manage.png"" class="icons">
    					<div class="side-link">Manage Ombudsman</div>
    				</div>

    				<div class="sideBtn" ng-click="page = 'impInformation_aicte'">
    					<img src="assets/icons/information.png"" class="icons">
    					<div class="side-link">Important Information</div>
    				</div>

    				<div class="sideBtn" ng-click="page = 'reports_aicte'">
    					<img src="assets/icons/folder.png"" class="icons">
    					<div class="side-link">Reports</div>
    				</div>

    				<div class="sideBtn" ng-click="page = 'faq_aicte'">
    					<img src="assets/icons/faq.png"" class="icons">
    					<div class="side-link">FAQ</div>
    				</div>
    				<br>
    			</div>

    			<div class="col-md-10 rightArea">
				 	<div ng-switch on="page">
		                <div ng-switch-when="dashboard_aicte">
		                    <div ng-include src="'views/partials/dashboard_aicte.php'"></div>
		                </div>
		                <div ng-switch-when="grievances_aicte">
		                    <div ng-include src="'views/partials/grievances_aicte.php'"></div>
		                </div>
		                <div ng-switch-when="searchApplication_aicte">
		                    <div ng-include src="'views/partials/searchApplication_aicte.php'"></div>
		                </div>
                        <div ng-switch-when="manageOmbudsman_aicte">
                            <div ng-include src="'views/partials/manageOmbudsman_aicte.php'"></div>
                        </div>
		                <div ng-switch-when="impInformation_aicte">
		                    <div ng-include src="'views/partials/impInformation_aicte.php'"></div>
		                </div>
		                <div ng-switch-when="reports_aicte">
		                    <div ng-include src="'views/partials/reports_aicte.php'"></div>
		                </div>
		                 <div ng-switch-when="faq_aicte">
		                    <div ng-include src="'views/partials/faq_aicte.php'"></div>
		                </div>
		            </div>
				 	
				</div>
			</div>
	 	</div>

	 	<div class="footer">
		  <div class="row align-items-center" ng-include src="'views/templates/footerTemplate.html'"></div>  			
		</div>
	 </div>
 </div>	
<script src="js/script.js"></script>
