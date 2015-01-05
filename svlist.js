var  ex= ['.txt', '.png'];
function listify(ar){
	//sv get the arrayy filter the exensiona
	var fext = '';
	var results = new Array() ;
	for(var o in ar){
		 fext = o.substr(o.indexOf('.'));
		 
		 if(ex.indexOf(fext) != -1){
		 	found = true;
		 	results.push(o);
		 }
		 
		
	}	
	
	//sv check in cx
	for(var o in ar){
		 fext = o.substr(o.indexOf('.'));
		 
		 if(ex.indexOf(fext) != -1){
		 	found = true;
		 	results.push(o);
		 }
		 
		
	}	
};


function addExtensions(ar){
	
   for( var o in ar){
   	  cex.push(o);
   }
	
};

function getExtensions(ar){
	return ex.concat(cex);
	
};
exports.listify = listify;

exports.addExtensions = addExtensions;
exports.getExtensions = getExtensions;