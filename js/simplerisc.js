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
	console.log(args);
}
var RISC = function(code){
	if(code.split("\n").length == 1)
		console.log('fdsdf');
	this.run = function(code){
		alert('the run function is not yet implemented.');
	}
}
var insts = ["mov", "add", "sub"];
var a = "mov r1, 12\nmov r2, 14";
var input = document.editwin.codebox;
var output = document.getElementById('terminal');
input.value = a;
compile(input.value);
output.value += "\n"+"vibhav@risc$ "
