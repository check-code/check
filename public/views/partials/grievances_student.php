<head>
    <title>Document</title>
</head>

<div class="container">
      <div class="row">
          <div class="col-lg-12 col-md-12 open-grievance ">
              <h5 class="grievance-heading">Open Grievance</h5>
                <div class="table grid">
                <div id="grid1" ui-grid="open_grievance"  ui-grid-cellNav ui-grid-auto-resize  class=""></div>
                <div class="text-center page" ng-show="open_grievance.totalItems > numRows">
              <pagination class="pagination-sm" total-items="open_grievance.totalItems" items-per-page="open_grievance.paginationPageSize" ng-model="open_grievance.paginationCurrentPage"></pagination>
      </div>
                </div>
          </div>
      </div>

      <div class="row">
            <div class="col-lg-12 col-md-12 open-grievance ">
                <h5 class="grievance-heading">Escalated Grievance</h5>
                  <div class="table grid">
                  	<div id="grid1" ui-grid="grievance"  ui-grid-cellNav ui-grid-auto-resize  class=""></div>
                      <div class="text-center page" ng-show="grievance.totalItems > numRows">
              <pagination class="pagination-sm" total-items="grievance.totalItems" items-per-page="grievance.paginationPageSize" ng-model="grievance.paginationCurrentPage"></pagination>
      </div>
                  </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 col-md-12 open-grievance ">
                <h5 class="grievance-heading">History</h5>
                  <div class="table grid">
                  <div id="grid1" ui-grid="grievance"  ui-grid-cellNav ui-grid-auto-resize  class=""></div>
                  <div class="text-center page" ng-show="grievance.totalItems > numRows">
              <pagination class="pagination-sm" total-items="grievance.totalItems" items-per-page="grievance.paginationPageSize" ng-model="grievance.paginationCurrentPage"></pagination>
      </div>
                  </div>
            </div>
        </div>
</div>