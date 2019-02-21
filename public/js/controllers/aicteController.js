 // Controller for AICTE user
var grievancesystem= angular.module('grievancesystem');
grievancesystem.controller('aicteController',aicteController);


 function aicteController($scope) {
 	$scope.page='dashboard_aicte';

 	$scope.total_grievances = 38989;
 	$scope.pending_grievance = 189;
    $scope.satisfied_grievance = 400;
    $scope.ongoing_grievance = 380;

 	$scope.total_grievance_date = "Yesterday : 02:30 PM"
    $scope.pending_grievance_date = "5th Jan, 19 : 02:30 PM"
    $scope.satisfied_grievance_date = "25th Nov, 18 : 03:00 PM"
    $scope.ongoing_grievance_date = "Today : 12:00 PM"



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
                        "data_of_issue":"1",
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
                        "data_of_issue":"1",
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
                        "data_of_issue":"1",
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
                        "data_of_issue":"1",
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
                        "data_of_issue":"1",
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
                        "data_of_issue":"1",
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
                        "data_of_issue":"1",
                        "employed":"1",
                        "eta":"1",
                        "status":"1",
                        "attachment":"1",
                        "action":"1"
                        
                    },
                    
                ];
                    
                

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
                                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html '},
                                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                                {name :"data_of_issue" ,display: 'Date of Issue' ,cellTemplate: '/views/cellTemplate/cell.html' },
                                {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html '},
                                {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                                {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                                {name:"action",display: 'Action', cellTemplate: "/views/cellTemplate/aicte_action.html"},
                                        ],
                
                                
                             };
                             $scope.grievance_data=[
                                {
                                    "grievance_id":"1",
                                    "Grievance_type":"1",
                                    "assigned_committee":"1",
                                    "data_of_issue":"1",
                                    "employed":"1",
                                    "eta":"1",
                                    "status":"1",
                                    "action_taken_on":"1",
                                    "action":"1",
                                    "attachment":"1",

                             }];
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
                                    { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                                    { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html '},
                                    { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                                    {name :"data_of_issue" ,display: 'Date of Issue' ,cellTemplate: '/views/cellTemplate/cell.html' },
                                    {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html '},
                                    {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                                    {name:"action_taken_on" ,display: 'Action Taken on', cellTemplate: '/views/cellTemplate/cell.html '},
                                    {name:"action" ,display: 'Action', cellTemplate: '<div class="ui-grid-cell-contents cell"><a class="cell-link" href="#">view<a></div> '},
                                    {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html"  },
                                    
                                            ],
                    
                                    
                        };
                
                        $scope.grievance_search = {
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
                                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '/views/cellTemplate/cell.html' },
                                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '/views/cellTemplate/cell.html '},
                                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '/views/cellTemplate/cell.html'},
                                {name :"data_of_issue" ,display: 'Date of Issue' ,cellTemplate: '/views/cellTemplate/cell.html' },
                                {name:"eta", display: 'ETA' ,cellTemplate: '/views/cellTemplate/cell.html '},
                                {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                                {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html"  },
                                
                                        ],
                
                                
                    };
                    $scope.university_data=[];
                    $scope.manage_ombudsman = {
                        data:$scope.university_data,
                        enableGridMenus:false,
                        enableSorting: false,
                        enableFiltering:false,
                        enableCellEditing:false,
                        enableColumnMenus: false,
                        enableHorizontalScrollbar:0,
                        enableVerticalScrollbar:0,
                        totalItems: $scope.university_data.length,
                        paginationPageSize: $scope.numRows,
                        minRowsToShow: $scope.university_data.length < $scope.numRows ? $scope.university_data : $scope.numRows,
                        enablePaginationControls: false,
            
                columnDefs: [
                            { name : "application_id",display: 'Applicant name', cellTemplate: '/views/cellTemplate/cell.html' },
                            { name:"university" ,display: 'University', cellTemplate: '/views/cellTemplate/cell.html '},
                            { name:"university_code" ,display: 'University Code',  cellTemplate: '/views/cellTemplate/cell.html'},
                            {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                            {name:"attachment",display: 'Attachment',cellTemplate: "/views/cellTemplate/attachment.html "  },
                            {name:"action",display: 'Action',cellTemplate: "/views/cellTemplate/aicte_ombuds_action.html"  },
                                
                                    ],
            
                            
                };
                
                
                $scope.history = {
                    data:$scope.university_data,
                    enableGridMenus:false,
                    enableSorting: false,
                    enableFiltering:false,
                    enableCellEditing:false,
                    enableColumnMenus: false,
                    enableHorizontalScrollbar:0,
                    enableVerticalScrollbar:0,
                    totalItems: $scope.university_data.length,
                    paginationPageSize: $scope.numRows,
                    minRowsToShow: $scope.university_data.length < $scope.numRows ? $scope.university_data : $scope.numRows,
                    enablePaginationControls: false,
        
            columnDefs: [
                        { name : "application_id",display: 'Applicant name', cellTemplate: '/views/cellTemplate/cell.html' },
                        { name:"university" ,display: 'University', cellTemplate: '/views/cellTemplate/cell.html '},
                        { name:"university_code" ,display: 'University Code',  cellTemplate: '/views/cellTemplate/cell.html'},
                        {name:"status" ,display: 'Status', cellTemplate: '/views/cellTemplate/cell.html '},
                        {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                        {name:"action",display: 'Action',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div>  "  },
                            
                                ],
        
                        
            };
                
            $scope.university_search_data=[];
            $scope.university_search = {
                data:$scope.university_search_data,
                enableGridMenus:false,
                enableSorting: false,
                enableFiltering:false,
                enableCellEditing:false,
                enableColumnMenus: false,
                enableHorizontalScrollbar:0,
                enableVerticalScrollbar:0,
                totalItems: $scope.university_search_data.length,
                paginationPageSize: $scope.numRows,
                minRowsToShow: $scope.university_search_data.length < $scope.numRows ? $scope.university_search_data : $scope.numRows,
                enablePaginationControls: false,

    
        columnDefs: [
                    { name : "university_code",display: 'University Code', cellTemplate: '/views/cellTemplate/cell.html' },
                    { name:"university" ,display: 'University', cellTemplate: '/views/cellTemplate/cell.html '},
                    { name:"university_type" ,display: 'university_type',  cellTemplate: '/views/cellTemplate/cell.html'},
                    {name:"ombudsman" ,display: 'Ombudsman', cellTemplate: '/views/cellTemplate/cell.html '},
                    {name:"total_grievance",display: 'Total Grievance',cellTemplate: '/views/cellTemplate/cell.html '  },
                    {name:"pending_grievance",display: 'Pending Grievance',cellTemplate: '/views/cellTemplate/cell.html '  },
                    {name:"ongoing_grievance",display: 'Ongoing Grievance',cellTemplate: '/views/cellTemplate/cell.html '  },
                       
                            ],
    
                    
        };
                
   
                
}

