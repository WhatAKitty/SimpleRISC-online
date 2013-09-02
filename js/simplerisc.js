function compile(code){
	lines = code.split("\n");
	for(line in lines){
		var comm = lines[line].trim();
		var inst = insts.indexOf(comm.split(/\s/,1)[0]);
		if(inst!= -1)
			comm = comm.slice(comm.split(/\s/, 1)[0].length).trim();
			run(inst, comm.split(/[\s]*\,[\s]*/g));
	}
}
function run(inst, args){
	switch(inst){
		case 1:
			if(args.length != 2)
				alert("Error Occured.");
			break;
		case 2:
			break;
		default:
			break;
	}
}
var RISC = function(code){
	if(code.split("\n").length == 1)
		console.log('fdsdf');
	this.run = function(code){
		alert('the run function is not yet implemented.');
	}
}
var insts = ["mov", "add", "sub"];
var input = myCodeMirror.getValue();
compile(input);
