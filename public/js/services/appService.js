var grievancesystem=angular.module('grievancesystem');

grievancesystem.service('appService',function ($http,API_URL) {
	
	this.showAlert=function (type,message) {
		$('#alertPrompt').removeClass( 'alert-success');
		$('#alertPrompt').removeClass( 'alert-danger');
		$('#alertText').text
		if(type=='success')
			$('#alertPrompt').addClass( 'alert-success');
		else
			$('#alertPrompt').addClass( 'alert-danger');

		$('#alertText').text(message);
		$('#alertPrompt').show(10);


		// setTimeout($('#alertPrompt').show(10),40);

	}
});