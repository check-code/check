
<div ng-controller="appController" id="form-bg">
	<div id="form-box" class="row align-items-center">
		<div class="container">
			<div class="row align-items-center ">
				<div class="col-md-6">
					<img src="assets/icons/grievanceLogo.png">
				</div>

				<div class="form col-md-6">
					<div class="form-head">Account Login</div>
					<form>
						<div class="form-group"><label>Email:</label><input type="text" name="email" required="required" placeholder="Email"></div>
						<div class="form-group">
							<label>Password:</label><input type="password"  name="password" required="required" placeholder="Password">
						</div>
						<div class="form-group">
							<input type="submit" name="submitLogin" value="Login">
						</div>
					</form>
					<span class="link"><a href="#">Forgot Password ?</a></span>
				</div>
			</div>
			
		</div>
	</div>
</div>
