<head>
   
    <link rel="stylesheet" href="js/libraries/bootstrap.min.css">
     <link rel="stylesheet" href="css/userTemplate.css">
    <link rel="stylesheet" href="css/student_partials.css">

     <link rel="stylesheet" type="text/css" href="js/libraries/angular-ui-grid/css/ui-grid.core.min.css">
    <script src="js/libraries/angular-ui-grid/ui-grid.core.min.js"></script>    <script src="js/libraries/angular-ui-grid/ui-grid.auto-resize.js"></script>
    <script src="js/libraries/angular-ui-grid/ui-grid.cellnav.min.js"></script>
    <script src="js/libraries/angular-ui-grid/ui-grid.pagination.min.js"></script>
    <script src="js/libraries/angular-ui-grid/ui-grid.core.min.js"></script>

    <title>Document1</title>

</head>
<div>
    <div ng-controller="studentController">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-2 leftTop">
                    <!-- nav top head -->
                    <div class="row navTop align-items-center">
                        <span class="col-md-3 logo"><img src="assets/logos/cvrce.png"></span>
                        <span class="col-md-9 navTop-head">C.V.Raman College of Engineering</span>
                    </div>
                </div>

                <div  class="col-md-10 rightTop align-self-center">
                    <div class="row justify-content-end ">
                        <span class="top-icon"><img src="assets/icons/notifiaction.png"></span>
                        <span class="top-icon"><img src="assets/icons/message.png"></span>
                        <div class="top-icon dropdown">
                            <img src="assets/icons/user.png">Student Name 
                            <span class=""> &#x25BC;
                                <div class="dropdown-content">
                                  <a href="#">Profile</a>
                                  <a href="#">Logout</a>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-2 leftNav">
                    <!-- navigation left dash board -->
                    <div class="sideBtn active" ng-click="page = 'dashboard_student'">
                        <img src="assets/icons/dashboard.png" class="icons">
                        <div class="side-link">Dashboard</div>
                    </div>

                    <div class="sideBtn" ng-click="page = 'grievances_student'">
                        <img src="assets/icons/grievance.png" class="icons">
                        <div class="side-link">My Grievances</div>
                    </div>

                    <div class="sideBtn" ng-click="page = 'searchApplication_student'">
                        <img src="assets/icons/search.png" class="icons">
                        <div class="side-link">Search Application</div>
                    </div>

                    <div class="sideBtn" ng-click="page = 'faq_student'">
                        <img src="assets/icons/faq.png" class="icons">
                        <div class="side-link">FAQs</div>
                    </div>
                    <br>
                </div>

                <div class="col-md-10 rightArea">
                    <div ng-switch on="page">
                        <div ng-switch-when="dashboard_student">
                            <div ng-include src="'views/partials/dashboard_student.php'"></div>
                        </div>
                        <div ng-switch-when="grievances_student">
                            <div ng-include src="'views/partials/grievances_student.php'"></div>
                        </div>
                        <div ng-switch-when="searchApplication_student">
                            <div ng-include src="'views/partials/searchApplication_student.php'"></div>
                        </div>
                       
                        <div ng-switch-when="faq_student">
                            <div ng-include src="'views/partials/faq_student.php'"></div>
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
 