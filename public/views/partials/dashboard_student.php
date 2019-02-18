
<head>
    <title>Document</title>
</head>
<div class="container">
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
    			<!-- <span class="number">{{total_grievances}} <img src="assets/icons/barGraph.png"></span>
    			<span>Total Grievance</span> -->
    			<span class="grievance-stat-value">{{pending_grievance}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Pending Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{pending_grievance_date}}</span>
    		</div>
    	</div>

    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-satisfied">
    			<!-- <span class="number">{{total_grievances}} <img src="assets/icons/barGraph.png"></span>
    			<span>Total Grievance</span> -->
    			<span class="grievance-stat-value">{{satisfied_grievance}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Satisfied Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{satisfied_grievance_date}}</span>
    		</div>
    	</div>

    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-ongoing">
    			<!-- <span class="number">{{total_grievances}} <img src="assets/icons/barGraph.png"></span>
    			<span>Total Grievance</span> -->
    			<span class="grievance-stat-value">{{ongoing_grievance}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Ongoing Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{ongoing_grievance_date}}</span>
    		</div>
    	</div>
    </div>

    <div class="row">
        <div class="col-md-12 col-lg-12 ">
            <h1 id="dash-head">Is something bothering you? Let us know.</h1>
        </div>
    </div>
    
    <div class="grievance-form">

        <div class="row"> 
            <div class="col-md-6 col-lg-6 div-form div-form">        
                <label>Name
                <span class="imp">*</span></label>
                <input type="text" name="name" id="name" ng-model="name" placeholder="Enter your name" >
            </div>

            <div class="col-md-6 col-lg-6 div-form">             
                <label>Roll Number<span class="imp">*</span></label>
                <input type="text" name="roll_num" id="roll_num" ng-model="roll_num" placeholder="Enter your Roll number">
            </div>
        </div>

        <div class="row"> 
            <div class="col-md-6 col-lg-6 div-form">               
                <label>Contact Number<span class="imp">*</span></label>
                <input type="text" name="contact" id="contact" ng-model="contact" placeholder="Enter your contact">
            </div>

            <div class="col-md-6 col-lg-6 div-form">
                <label>Email<span class="imp">*</span></label>
                <input type="email" name="email" id="email" ng-model="email" placeholder="Enter your email">               
            </div>
        </div>

        <div class="row"> 
            <div class="col-md-6 col-lg-6 div-form">
             
                <label>Course<span class="imp">*</span></label>
                <input type="text" name="course" id="course" ng-model="course" placeholder="Enter your course">
            </div>

            <div class="col-md-6 col-lg-6 div-form">
                <label>Branch<span class="imp">*</span></label>
                <select ng-model="branch">
                    <option value="">Select</option>
                    <option ng-repeat= "y in choose_branch" value={{y.branch}} >{{y.branch}}</option>
                </select>
            </div>
        </div>

            
        <div class="row"> 
            <div class="col-md-6 col-lg-6 div-form">
               <label>Year<span class="imp">*</span></label>
                <input type="text" name="year" id="year" ng-model="year" placeholder="Enter your year">
            </div>

            <div class="col-md-6 col-lg-6 div-form">
               <label>Grievances Against<span class="imp">*</span></label>
                <select ng-model="grievance_against">
                    <option value="">Select</option>
                    <option ng-repeat= "y in grievanceagainst" value={{y.category}} >{{y.category}}</option>
                </select>
            </div>
        </div>
             
        <div class="row">
          <div class="col-md-12 col-lg-12 div-detail">
              <label>Attachment<span class="imp">*</span></label>
              <input type="text" name="year" id="year" ng-model="year" placeholder="Upload file pdf, doc, jpg, jpeg, png">
              <input type="file" name="attachment" id="attachment" > 
              <label  for="file">Select</label>
            </div>
              
            <div class="col-md-12 col-lg-12 div-detail">    
              <label id="label-detail">Details<span class="imp">*</span> </label>            
              <textarea name="details" id="details" ng-model="details" 
               rows=5 cols=87 placeholder="Please give all the details of your Problem">
             </textarea>
            </div>

            <div align="center" class="col-md-12 col-lg-12 "><button class="btn button-submit">Submit</button></div>
        </div>

    </div>
    <!-- grievance form -->
</div>
<!-- container -->