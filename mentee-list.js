var name,dep,phno,email,rat,com,k=[],j=0;
k[0]=0

function dispMentee()
{
	var para1 = document.createElement("P");      
	para1.setAttribute('id','para'+k[j])                 
	
	var t = document.createTextNode(name+' '+rat+' '+com);       
	para1.appendChild(t);                                          
	document.body.appendChild(para1);

	var btn = document.createElement("BUTTON");
	btn.setAttribute("key",'"para"+k[j]');     
	btn.setAttribute("onclick","document.getElementById(key).style.display='none'; ")   
	var b = document.createTextNode("Del");       
	btn.appendChild(b);                                
	document.getElementById('para'+k[j]).appendChild(btn);


++j;
k[j]=k[(j-1)]+1;
}

function getInput(x)
{
	return document.getElementById(x).value;
}


function addMentee()
{
	 name = getInput('name');
	 dep = getInput('dep');
	 phno = getInput('phno');
	 email = getInput('phno');
	 rat = getInput('rat');
	 com = getInput('com');
	document.getElementById('test').innerHTML=name;
	dispMentee();
}

function delMentee()
{

}