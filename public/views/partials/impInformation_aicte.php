
<head>
    <title>AICTE </title>
</head>
 <div class="container">
      <div class="row row_gap">
          <div class="col-lg-12 col-md-12 open-grievance ">
              <h5 class="grievance-heading">Search University</h5>
              <div class="table">
              <div class="col-md-12 col-lg-12 div-form div-form">
                 
                    <label style="color:#5A5A5A;font-size:1.5em;display: inline;">Enter University Code</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <input type="text" name="search" id="search" ng-model="search" placeholder="Enter grievance id" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btn button-submit">Submit&nbsp;&nbsp;&nbsp;<img src="assets/icons/search.png" height="24" width="24"></button>
            </div>
                
                <div id="grid1" ui-grid="university_search"  ui-grid-cellNav ui-grid-auto-resize  class="grid"></div>
                </div>
          </div>
      </div>
      



    </div>