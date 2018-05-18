var name,dep,phno,email,rat,com,k=[],j=0,menteeIdNum;

var menteeArray= [];


function dispMentee()
{
	var para1 = document.createElement("P");      
	//para1.setAttribute('id','para'+k[j])                 
	
	var t = document.createTextNode(menteeArray[j].name+' '+menteeArray[j].rat+' '+menteeArray[j].com);
	para1.setAttribute('id',"para"+j);   
	para1.appendChild(t);                                          
	document.body.appendChild(para1);


	var btn = document.createElement("BUTTON");
	btn.setAttribute("key","para"+j);
	btn.setAttribute("id","btn"+j);     
	btn.setAttribute("onclick"," this.parentElement.style.display = 'none'; ");   
	var b = document.createTextNode("Del");       
	btn.appendChild(b);                                
	document.getElementById('para'+j).appendChild(btn);

	var btn2 = document.createElement("BUTTON");
	btn2.setAttribute("num",j);
	btn2.setAttribute("onclick",'editMentee(Number(this.num))')
	var e = document.createTextNode("Edit");
	btn2.appendChild(e);
	document.getElementById("para"+j).appendChild(btn2);


++j;

}

function getInput(x)
{
	return document.getElementById(x).value;
}


function addMentee()
{
	 name = getInput('addName');
	 rat = getInput('addRat');
	 com = getInput('addCom');
	document.getElementById('test').innerHTML=rat;
	menteeArray.push({});
	menteeArray[j].name = name;
	menteeArray[j].rat = rat;
	menteeArray[j].com = com;
	dispMentee();
}

function delMentee()
{

}

function hideMentee()
{
	document.getElementById(this.getAttribute('key')).style.display='none'; 
}

function editMentee(y)
{
	editMenteeIdNum = y;
	document.getElementById('editName').value = menteeArray[editMenteeIdNum].name;
	document.getElementById('editRat').value = menteeArray[editMenteeIdNum].rat;
	document.getElementById('editCom').value = menteeArray[editMenteeIdNum].com;
	document.getElementById('editMenteeForm').style.display='block'

}

function editMenteeInput()
{ 
	

	name = getInput('editName');	
	rat = getInput('editRat');
	com = getInput('editCom');
	console.log(rat==null);
	document.getElementById('test').innerHTML=rat;
}