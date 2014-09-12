function registerFileUploader(upload_url,params,callbacks){
	if(typeof upload_url !== 'string'){
		throw new Error("registerFileUploader: upload_url is not valid");
	}
	if(typeof params === "object"){
		var delimiter,iterator=0;
		for(param in params){
			if(iterator===0){
				delimiter="?";
			}else{
				delimiter="&";
			}
			upload_url= upload_url +delimiter+param+"="+params[param];
			iterator++;
		}
	}
	var params ={
		script: upload_url,
		disAllowedFileTypes: 'application/javascript',
		maxSizeInBytes: 999999999999
	}
	if(typeof callbacks === 'object'){
		$.extend(params,callbacks);
	}
	$("input:file[name='files']").off("change");
	$("input:file[name='files']").liteUploader(params);
}
