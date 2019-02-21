
// Controller for student
var grievancesystem= angular.module('grievancesystem');

// directive for uploading document while lodging grievance

grievancesystem.directive('ngFiles', ['$parse', function ($parse) {
 
    function file_links(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            onChange(scope, {$files: event.target.files});
        });
    }
 
    return {
        link: file_links
    }
}]);

grievancesystem.controller('studentController',studentController);


 function studentController($scope,$http,appService,studentService,API_URL) {
 	$scope.page='dashboard_student';
    
    $scope.total_grievance_date = "Yesterday 02:30PM"
    $scope.pending_grievance_date = "Today 03:00PM"
    $scope.satisfied_grievance_date = "25 Nov 05:30PM"
    $scope.ongoing_grievance_date = "Yesterday 02:30PM"


    $scope.choose_branch=[{"branch":"Computer Science Engineerng"},{"branch":"Information Technology"},
    {"branch":"Mechnaical Engineering"},
    {"branch":"Electrical Engineering"},{"branch":"Electroncis Engineering"}];

    $scope.grievanceagainst=[{"category":"Admission Cell"},{"category":"Accounts Department"},
    {"category":"Placement & training cell"},
    {"category":"Security"},{"category":"Hostel"},{"category":"Ragging"},{"category":"Canteen"},
    {"category":"Transport"}];
        
    // grievance search starts
    $scope.searchId='';
    $scope.grievance_search_data;
    $scope.searchGrievance =  function(searchId){
    $scope.grievance_search.data=new Array();
    studentService.searchGrievance(searchId).then(function(success){
            $scope.grievance_search.data=new Array();
            $scope.grievance_search_data=success.data.message;
            $scope.grievance_search.data.push($scope.grievance_search_data);
        },
        function(error){
            $scope.grievance_search.data=new Array();
             appService.showAlert('error',error.data.message);

        });
    
    };
    //  grievance search ends

    // grievance statistics
    $scope.lodgeGrievanceStatistics=function(){
        $http.get(API_URL+"grievance/total").then(function(response){
                $scope.total = response.data.value;
                console.log($scope.total);
            },function(errorResponse){
                console.log(errorResponse);
            });
         $http.get(API_URL+"grievance/satisfied").then(function(response){
                $scope.satisfied = response.data.value;
                console.log($scope.satisfied);
            },function(errorResponse){
                console.log(errorResponse);
            });
         $http.get(API_URL+"grievance/pending").then(function(response){
                $scope.pending = response.data.value;
                console.log($scope.pending);
            },function(errorResponse){
                console.log(errorResponse);
            });
         $http.get(API_URL+"grievance/escalated").then(function(response){
                $scope.escalated = response.data.value;
                console.log($scope.escalated);
            },function(errorResponse){
                console.log(errorResponse);
            });
    }
    $scope.lodgeGrievanceStatistics();
    // grievance statistics

    // lodge grievance 

        //My grievance

//    
        $scope.grievance = {};
        $scope.errors = "";
        var formData = new FormData();
        
        $scope.lodgeGrievance = function () {
            var request = {
                method: 'POST',
                url: API_URL+"grievances",
                data: formData,
                headers: {
                    'Content-Type': undefined
                }
            };
     
            $http(request)
                .then(function success(e) {
                    appService.showAlert('success',e.data.message +" having an ID "+ e.data.id);
                    $scope.files = e.data.files;
                    $scope.errors = [];
                    $scope.grievance = {};
                    $scope.grievance.selected_file='';
                    $scope.lodgeGrievanceStatistics();
                    var fileElement = angular.element('#attachment');
                    fileElement.value = '';
                }, function error(e) {
                    $scope.errors = e.data.errors;
                });
        };
     
        $scope.setTheFiles = function ($files) {
            angular.forEach($files, function (value, key) {
                formData.append('type',$scope.grievance.type);
                formData.append('detail',$scope.grievance.detail);
                formData.append('attachment', value);

            });
        };
    //  lodge grievance


    $scope.faq =[{ "ques":"how to file grievance? How we will know it is resolved",
                    "ans": "You will be notified when it will solved"},
                    { "ques":"how to file grievance? ",
                    "ans": "You will be notified when it will solved. This is test"},
                    { "ques":"how to file grievance? ",
                    "ans": "You will be notified when it will solved. This is test"},
                    { "ques":"how to file grievance? How we will know it is resolved",
                    "ans": "You will be notified when it will solved"},
                    { "ques":"how to file grievance? How we will know it is resolved",
                    "ans": "You will be notified when it will solved"},

                    
                ];
             $scope.open_grievance_data =new Array();
            $scope.escalated_grievance_data =new Array();
            $scope.grievance_history_data =new Array();
            $scope.loadAllGrievance=function(){
                    $scope.open_grievance_data =new Array();
                    $scope.grievance_data =new Array();
                    $scope.grievance_history_data =new Array();
            studentService.open_grievances().then(function(success)
                 {   

                        $scope.open_grievance_data = success.data.open;
                        $scope.open_grievance.data = $scope.open_grievance_data;

                         $scope.escalated_grievance_data = success.data.esclated;
                        $scope.escalated_grievance.data = $scope.escalated_grievance_data;

                        $scope.grievance_history_data = success.data.resolved;
                        $scope.grievance_history.data = $scope.grievance_history_data;



                }, function(error)
                     {
        
                          });
        }

        $scope.numRows = 3;
        $scope.loadAllGrievance();
   
     $scope.open_grievance = {
        data:$scope.open_grievance_data,
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            paginationPageSize: $scope.numRows,
            minRowsToShow: $scope.numRows,
            enablePaginationControls: false,


            columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                { name:"grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html'},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                {name :"data_of_issue" ,display: 'Date of Issue' ,cellTemplate: '/views/cellTemplate/cell.html' },
                {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html'},
                {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html"  },
                {name:"action",display: 'Action', cellTemplate: "/views/cellTemplate/student_action.html"},
                        ],

                
             };

             $scope.escalated_grievance = {
                data:$scope.escalated_grievance_data,
                enableGridMenus:false,
                enableSorting: false,
                enableFiltering:false,
                enableCellEditing:false,
                enableColumnMenus: false,
                enableHorizontalScrollbar:0,
                enableVerticalScrollbar:0,
                paginationPageSize: $scope.numRows,
                minRowsToShow: $scope.numRows,
                enablePaginationControls: false,

    
        columnDefs: [
                    { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                    { name:"grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html '},
                    { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                    {name :"data_of_issue" ,display: 'Escalated On' ,cellTemplate: '/views/cellTemplate/cell.html' },
                    {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html '},
                    {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                    {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html"  },
                    
                            ],
    
                   
        };

        $scope.grievance_history = {
            data:$scope.grievance_history_data,
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            paginationPageSize: $scope.numRows,
            minRowsToShow: $scope.numRows,
            enablePaginationControls: false,


    columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                { name:"grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html '},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                {name :"data_of_issue" ,display: 'Escalated On' ,cellTemplate: '/views/cellTemplate/cell.html' },
                {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html '},
                {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html"  },
                
                        ],

               
    };

        $scope.grievance_search = {
            data:$scope.grievance_data_search,
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            paginationPageSize: $scope.numRows,
            minRowsToShow: $scope.numRows,
            enablePaginationControls: false,

    columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                { name:"grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html '},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                {name :"data_of_issue" ,display: 'Date of Issue' ,cellTemplate: '/views/cellTemplate/cell.html' },
                {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html '},
                {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html"  },
                
                        ],

                
    };

    $scope.action = function(gid,action)
    {
        
        $scope.data={
            "id":gid,
            "action":action
        };

         studentService.action_grievance($scope.data).then(
            function(success)
            {
                $scope.loadAllGrievance();
                alert("success "+success.data.message+$scope.data.id);

            },
            function(error)
            {
                appService.showAlert('error',error.data.message );
            }
        )
    }




};
