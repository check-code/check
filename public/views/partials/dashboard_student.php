
<div class="container">
   <div class="row row_gap">
    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-total">
    			<span class="grievance-stat-value">{{total}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
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
    			<span class="grievance-stat-value">{{escalated}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Escalated Grievances </span>
                <hr>
                <span class="grievance-stat-time"><img src="assets/icons/clock.png" height="12" width="12">&nbsp;&nbsp;
                    {{pending_grievance_date}}</span>
    		</div>
    	</div>

    	<div class="col-md-3 grievance-box">
    		<div class="grievance grievance-satisfied">
    			<!-- <span class="number">{{total_grievances}} <img src="assets/icons/barGraph.png"></span>
    			<span>Total Grievance</span> -->
    			<span class="grievance-stat-value">{{satisfied}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
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
    			<span class="grievance-stat-value">{{pending}} <img class="image-bar" src="assets/icons/barGraph.png" width="35" ></span>
                    
                <span class="grievance-stat-name">Pending Grievances </span>
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
    
    <form ng-submit="lodgeGrievance()" name="lodgeGrievanceForm" enctype="multipart/form-data">
    <div class="grievance-form">

        <div class="row"> 
            <div class="col-md-12 col-lg-12 div-form">
               <label>Grievances Against<span class="imp">*</span></label>
                <select ng-model="grievance.type" required="required">
                    <option value="">Select</option>
                    <option ng-repeat= "y in grievanceagainst" value={{y.category}} >{{y.category}}</option>
                </select>
            </div>
            
            
        </div>
             
        <div class="row">
             <div class="col-md-12 col-lg-12 div-detail">
              <label>Attachment<span class="imp">*</span></label>
              <input type="text" name="selected_file" class="selected_file" id="selected_file" ng-model="grievance.selected_file" placeholder="Upload file pdf, doc, jpg, jpeg, png" readonly="readonly">
              <input type="file" name="attachment" class="attachment" ng-files="setTheFiles($files)" id="attachment" > 
              <label  for="file"  class="attachmentbtn" >Select</label>
            </div>
        </div>
        <div class="row">
         
              
            <div class="col-md-12 col-lg-12 div-detail">    
              <label id="label-detail">Details<span class="imp">*</span> </label>            
              <input style="height: 100px;" type="text" name="details" id="details" ng-model="grievance.detail" 
               rows=5 cols=87 placeholder="Please give all the details of your Problem" required="required">
             </input>
            </div>

            <div align="left" class="col-md-12 col-lg-12 dashboard_btn"><button class="btn button-submit">Submit</button></div>
         </div>

        </div>
    </form>
    <!-- grievance form -->
</div>
<!-- container -->
<script>
    $(document).ready( function() {

        $(".attachmentbtn").click(function(){
        $(".attachment").click();
    });
    $('.attachment').change(function() {
    
    $('.selected_file').val($('.attachment')[0].files[0].name);
    });

    });
</script>