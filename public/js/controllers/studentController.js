// Controller for student
var grievancesystem= angular.module('grievancesystem');
grievancesystem.controller('studentController',studentController);


 function studentController($scope,$http,studentService,API_URL) {
 	$scope.page='searchApplication_student';

 	$scope.total_grievances = 18;
    $scope.ongoing_grievance = 1;
    $scope.satisfied_grievance = 8;
    $scope.pending_grievance = 9;
    
    $scope.total_grievance_date = "Yesterday 02:30PM"
    $scope.pending_grievance_date = "Today 03:00PM"
    $scope.satisfied_grievance_date = "25 Nov 05:30PM"
    $scope.pending_grievance_date = "Yesterday 02:30PM"


    $scope.choose_branch=[{"branch":"Computer Science Engineerng"},{"branch":"Information Technology"},
    {"branch":"Mechnaical Engineering"},
    {"branch":"Electrical Engineering"},{"branch":"Electroncis Engineering"}];

    $scope.grievanceagainst=[{"category":"Admission Cell"},{"category":"Accounts Department"},
    {"category":"Placement & training cell"},
    {"category":"Security"},{"category":"Hostel"},{"category":"Ragging"},{"category":"Canteen"},
    {"category":"Transport"}];
    $scope.searchId='';

// grievance search starts
    $scope.searchGrievance =  function(searchId){
    studentService.searchGrievance(searchId).then(function(success){
            // $scope.grievance_search_data=success.data.grievance_search;
            $scope.grievance_search_data=$scope.grievance_data;

            console.log($scope.grievance_search)
        },
        function(error){
            console.log(error)
            $scope.grievance_search_data=$scope.grievance_data;

        });
    
    };
//  grievance search ends


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
    
   
    $scope.open_grievance_data=[
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    },
    {
        "grievance_id":"1",
        "Grievance_type":"1",
        "assigned_committee":"1",
        "doi":"1",
        "employed":"1",
        "eta":"1",
        "status":"1",
        "attachment":"1",
        "action":"1"
        
    }];

    $scope.grievance_data=[
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
         
            
        },
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
            
            
        },
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
            
            
        },
        {
            "grievance_id":"1",
            "Grievance_type":"1",
            "assigned_committee":"1",
            "doi":"1",
            "employed":"1",
            "eta":"1",
            "status":"1",
            "attachment":"1",
            
            
        },];

        $scope.numRows = 5;
   
     $scope.open_grievance = {
        data:$scope.open_grievance_data,
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            totalItems: $scope.open_grievance_data.length,
            paginationPageSize: $scope.numRows,
            minRowsToShow: $scope.open_grievance_data.length < $scope.numRows ? $scope.open_grievance_data : $scope.numRows,
            enablePaginationControls: false,


            columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {name:"employed" , display: 'employed',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                {name:"action",display: 'Action', cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'>&nbsp;&nbsp;<img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "},
                        ],

                
             };

             $scope.grievance = {
                data:$scope.grievance_data,
                enableGridMenus:false,
                enableSorting: false,
                enableFiltering:false,
                enableCellEditing:false,
                enableColumnMenus: false,
                enableHorizontalScrollbar:0,
                enableVerticalScrollbar:0,
                totalItems: $scope.grievance_data.length,
                paginationPageSize: $scope.numRows,
                minRowsToShow: $scope.grievance_data.length < $scope.numRows ? $scope.grievance_data : $scope.numRows,
                enablePaginationControls: false,

    
        columnDefs: [
                    { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                    { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                    {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                    {name:"employed" , display: 'employed',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                    
                            ],
    
                   
        };

        $scope.grievance_search = {
            data:$scope.grievance_search_data,
            enableGridMenus:false,
            enableSorting: false,
            enableFiltering:false,
            enableCellEditing:false,
            enableColumnMenus: false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:1,
            totalItems: $scope.grievance_data.length,
            paginationPageSize: $scope.numRows,
            minRowsToShow: $scope.grievance_data.length < $scope.numRows ? $scope.grievance_data : $scope.numRows,
            enablePaginationControls: false,

    columnDefs: [
                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                
                        ],

                
    };

           


};
