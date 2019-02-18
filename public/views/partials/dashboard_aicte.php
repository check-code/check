
<head>
    <title></title>

</head>

<div class="container dashboard">

    <div class="row row_gap">
    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-total">
    			<span class="grievance-stat-value">{{total_grievances}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Total Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{total_grievance_date}}</span>
    		</div>
    	</div>

    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-pending">
    			<span class="grievance-stat-value">{{pending_grievance}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Pending Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{pending_grievance_date}}</span>
    		</div>
    	</div>

    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-satisfied">
    			<span class="grievance-stat-value">{{satisfied_grievance}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Satisfied Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{satisfied_grievance_date}}</span>
    		</div>
    	</div>

    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-ongoing">
    			<span class="grievance-stat-value">{{ongoing_grievance}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Ongoing Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{ongoing_grievance_date}}</span>
    		</div>
    	</div>
    </div>

    <div class="row row_gap">
    	<div class="col-md-6 graph">
    		<div id="top5_institute"></div>
    	</div>

    	<div class="col-md-6 graph">
    		<div id="grievance_type"></div>
    	</div>

    </div>

     <div class="row row_gap">
    	<div class="col-md-6 graph">
    		<div id="grievance_yearwise"></div>
    	</div>

    	<div class="col-md-6 graph">
    		<div id="top5_state"></div>
    	</div>

    </div>

</div>
<script src="js/aicteCharts.js"></script>