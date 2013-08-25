	function registerFileUploader(hostname,params){
		if(typeof hostname !== 'string'){
			throw new Error("registerFileUploader: hostname is not valid");
		}
		if(typeof params === "object"){
			var delimiter,iterator=0;
			for(param in params){
				if(iterator===0){
					delimiter="?";
				}else{
					delimiter="&";
				}
				hostname=hostname+delimiter+param+"="+params[param];
				iterator++;
			}
		}
		$("input:file[name='files']").off("change");
		$("input:file[name='files']").liteUploader({
			script: hostname,
			disAllowedFileTypes: 'application/javascript',
			maxSizeInBytes: 999999999999,
			before: function() {
				$('#details, #previews').empty();
				$('#response').html('Uploading...');

				return true;
			},
			each: function(file, errors) {
				var i, errorsDisp = '';

				if (errors.length > 0) {
					$('#response').html('One or more files did not pass validation');

					$.each(errors, function(i, error) {
						errorsDisp += '<br /><span class="error">' + error.type + ' error - Rule: ' + error.rule + '</span>';
					});
				}

				$('#details').append('<p>name: ' + file.name + ', type: ' + file.type + ', size:' + file.size + errorsDisp + '</p>');
			},
			success: function(response) {
				console.log(response);
				var response = $.parseJSON(response);

				$.each(response.urls, function(i, url) {
					$('#previews').append($('<img>', {
						'src': url,
						'width': 200
					}));
				});

				$('#response').html(response.message);
			}
		});
}
