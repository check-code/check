
<head>
    <title></title>

</head>

<div class="container">
      <div class="row row_gap">
          <div class="col-lg-12 col-md-12 open-grievance ">
              <h5 class="grievance-heading">Manage Ombudsman</h5>
                <div class="table grid">
                <div id="grid1" ui-grid="manage_ombudsman"  ui-grid-cellNav ui-grid-auto-resize  class=""></div>
                <div class="text-center page" ng-show="manage_ombudsman.totalItems > numRows">
              <pagination class="pagination-sm" total-items="manage_ombudsman.totalItems" items-per-page="manage_ombudsman.paginationPageSize" ng-model="manage_ombudsman.paginationCurrentPage"></pagination>
      </div>
                </div>
          </div>
      </div>

      <div class="row">
            <div class="col-lg-12 col-md-12 open-grievance ">
                <h5 class="grievance-heading">History</h5>
                  <div class="table grid">
                  <div id="grid1" ui-grid="history"  ui-grid-cellNav ui-grid-auto-resize  class=""></div>
                  <div class="text-center page" ng-show="history.totalItems > numRows">
              <pagination class="pagination-sm" total-items="history.totalItems" items-per-page="history.paginationPageSize" ng-model="manage_ombuhistorydsman.paginationCurrentPage"></pagination>
      </div>
                  </div>
            </div>
        </div>
 </div>