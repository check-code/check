
<head>
    <title></title>

</head>

 <div class="container">
      <div class="row">
          <div class="col-lg-12 col-md-12 open-grievance ">
              <h5 class="grievance-heading">Search University</h5>
                
                     
                <div class="col-md-12 col-lg-12 div-form table ">
                 
                          <label style="color:#5A5A5A;font-size:1.5em;display: inline;">Enter University Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                     <input type="text" name="search" id="search" ng-model="search" placeholder="Enter University id" >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button class="btn button-submit">Submit&nbsp;&nbsp;&nbsp;<img src="assets/icons/search.png" height="24" width="24"></button>
                        <br>
                        <br>
                      <div id="grid1" ui-grid="university_search" ui-grid-pagination="" class="grid"></div>
                <div class="text-center page" ng-show="university_search.totalItems > numRows">
              <pagination class="pagination-sm" total-items="university_search.totalItems" items-per-page="university_search.paginationPageSize" ng-model="university_search.paginationCurrentPage"></pagination>
      </div>
                    </div>
                
                 
          </div>
      </div>
      



    </div>