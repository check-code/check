
<head>
    <link rel="stylesheet" href="css/test.css">
    <title>Document</title>
</head>


<div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h4 id="faq-head">Frequently Asked Question(FAQs)</h4>
      </div>
    </div>

    <div class="row" >
      <div class="col-12 div-faq "  ng-repeat="data in faq">
          
        <div class="div-ques">{{data.ques}}</div>
        <div class="btn add" ng-click="show=!show">
          <img src="assets/icons/add.png" height="24" width="24" >
        </div>
        <div ng-show="show">
          </br> {{data.ans}}
        </div>
      </div>
    </div>
    
   </div>