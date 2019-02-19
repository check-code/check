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
                                { name : "grievance_id",display: 'Grievance ID', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                                { name:"Grievance_type" ,display: 'Grievance Type', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                                { name:"assigned_committee" ,display: 'Assigned Committee',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                                {name :"doi" ,display: 'Date of Issue' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                                {name:"employed" , display: 'employed',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                                {name:"eta", display: 'ETA' ,cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                                {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                                {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                                {name:"action",display: 'Action', cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "},
                                        ],
                
                                
                             };
                             $scope.grievance_data=[]
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
                                    {name:"action_taken_on" ,display: 'Action Taken on', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                                    {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                                    
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
                            { name : "application_id",display: 'Applicant name', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                            { name:"university" ,display: 'University', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                            { name:"university_code" ,display: 'University Code',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                            {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                            {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                            {name:"action",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'>&nbsp;&nbsp;<img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                                
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
                        { name : "application_id",display: 'Applicant name', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                        { name:"university" ,display: 'University', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                        { name:"university_code" ,display: 'University Code',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                        {name:"status" ,display: 'Status', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                        {name:"attachment",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div> "  },
                        {name:"action",display: 'Attachment',cellTemplate: "<div class='ui-grid-cell-contents cell div-click'><img src='assets/images/attachment.png' height=16 width=16' value='{{COL_FIELD CUSTOM_FILTERS}}'></div>  "  },
                            
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
                    { name : "university_code",display: 'University Code', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
                    { name:"university" ,display: 'University', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    { name:"university_type" ,display: 'university_type',  cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div>'},
                    {name:"ombudsman" ,display: 'Ombudsman', cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '},
                    {name:"total_grievance",display: 'Total Grievance',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '  },
                    {name:"pending_grievance",display: 'Pending Grievance',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '  },
                    {name:"ongoing_grievance",display: 'Ongoing Grievance',cellTemplate: '<div class="ui-grid-cell-contents cell">{{COL_FIELD CUSTOM_FILTERS}}</div> '  },
                       
                            ],
    
                    
        };
                
   
                
}

