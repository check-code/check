<header> <img style="width: 35px; height: 35px; margin-right: 10px;" src="./assets/logos/aicte.png">Online Grievance Management System</header>
<div ng-controller="appController" id="form-bg">
	<div class="limiter">
		<div class="container-login100" style="background-image: url('./assets/images/login-bg.jpg');">
			<div class="wrap-login100">
				<form name="loginForm" class="login100-form validate-form" ng-submit="doLogin()">
					<span class="login100-form-logo">
						<img style="height: 60px; width: 60px;" src="./assets/icons/login_logo.png">
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Account Login
					</span>
						<div class="wrap-input100 validate-input" data-validate = "Enter username">
							<input class="input100" type="email" name="username" ng-model="login.email" ng-required="true" placeholder="Username" autocomplete="off">
							<span class="focus-input100" data-placeholder="&#xf207;"></span>
						</div>

						<div class="wrap-input100 validate-input" data-validate="Enter password">
							<input class="input100" type="password" name="pass" ng-model="login.password" ng-required="true" placeholder="Password">
							<span class="focus-input100" data-placeholder="&#xf191;"></span>
						</div>

						

						<div class="container-login100-form-btn">
							<button class="login100-form-btn">
								Login
							</button>
						</div>
			
					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password ?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
</div>
