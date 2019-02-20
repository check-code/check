
<div ng-controller="appController" id="form-bg">
	<div class="overlay"></div>
	<div id="form-box">
		<div class="container">
			<div class="row container align-items-center ">
				<div class="col-md-3">
					<img src="assets/logos/aicte.png">
				</div>
				<div class="col-md-9">
					<div class="form-head"><span class="bold">AICTE Grievance</span><br>Management System
					<hr id="hr3">
					</div>
					
				</div>
			</div>
			<div class="row gap">
				<div class="tabs col-md-2">
					<div class="tab_btn " ng-click="page_tab = 'login'">
    					<div class="tab-link active_tab">Login</div>
    				</div>
				</div>

				<div class="tabs col-md-3">
					<div class="tab_btn" ng-click="page_tab = 'signup'">
    					<div class="tab-link">Sign Up</div>
    				</div>
				</div>
			</div>

			<!-- tab switch code starts -->
             <div class="container" ng-switch on="page_tab">
             	<!-- login6 switch starts -->
				<div ng-switch-when="login">
	                <form name="loginForm" ng-submit="doLogin()">
						<div class="row form-group">
							<input class="col-md-10" type="text" name="email" required="required" placeholder="Username" ng-model="login.email">
							<div class="col-md-2">
								<!-- icons image -->
								<img style="width: 22px; height: 22px;" src="assets/icons/username_icon.png">
							</div>
						</div>
						<div class="row form-group">
							<input class="col-md-10" type="password"  name="password" required="required" placeholder="Password" ng-model="login.password">
							<div class="col-md-2">
								<!-- icons image -->
								<img style="width: 25px; height: 25px;" src="assets/icons/password_icon.png">
							</div>
						</div>
						<div class="row form-group justify-content-center">
							<input type="submit" value="Login">
								<span class="focus-input100" data-placeholder="&#xf191;"></span>

						</div>
					</form>
	            </div>
	            <!-- login switch ends -->

	            <!-- signup switch starts -->
				<div ng-switch-when="signup">
	                <form>
						<div class="row form-group">
							<input class="col-md-10" type="text" name="email" required="required" placeholder="Email">
							<div class="col-md-1">
								<!-- icons image -->
								<img style="width: 25px; height: 25px;" src="assets/icons/username_icon.png">
							</div>
						</div>
						<div class="row form-group">
							<input class="col-md-10" type="password"  name="password" required="required" placeholder="Password">
							<div class="col-md-1">
								<!-- icons image -->
								<img style="width:25px; height: 25px;" src="assets/icons/password_icon.png">
							</div>
						</div>
						<div class="row form-group justify-content-center">
							<input type="submit" name="submitLogin" value="Sign Up">
								<span class="focus-input100" data-placeholder="&#xf191;"></span>

						</div>
					</form>
	            </div>
	            <!-- login switch ends -->

	        </div>
			<!-- tab switch code ends -->
			
		</div>
	</div>
</div>
<script type="text/javascript">

$(function() {

// script for active links start
   $(".tab-link").click(function() {
      // remove classes from all
      $(".tab-link").removeClass("active_tab	");
      // add class to the one we clicked
      $(this).addClass("active_tab	");
   });
 });
</script>