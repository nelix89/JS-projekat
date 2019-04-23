function Tacno() {
if(Tacno.checked = true){
    alert("Greška, tačan odgovor je: Lee didn't came home last night.");
}}
function Netacno()
{
	if(Netacno.checked=true)
	{
	alert("Vaš odgovor je tačan! Ispravna konstrukcija je: Lee didn't came home last night.");
	}
}


function Ispisi()
{
	document.write("Odgovor je tačan. Meri Popins je dadilja koju bi svako dete poželelo da ima. Pojavljuje se niotkuda, unosi radost u živote dece, a njene čarobne moći čine da nestvarno postane stvarno i da je sve moguće");
}
function Ispisi1()
{
	document.write("Odgovor nije tačan");
}


function odgovor1()
{
	if(name="jedan")
{alert("Netačno, pokušajte ponovo.");}
}

function odgovor2()
{
	if(name="dva")
{alert("Netačno, pokušajte ponovo.");}
}

function odgovor3()
{
	if(name="tri")
{alert("Tačno");}
}


function izaberi() {
    x.setAttribute("type", "file");
    document.body.appendChild(x);
}




function vreme(){
	var ocena = prompt('Unesi glagol.');


switch (ocena) 
{
	case "sent":
alert("Odgovor je ispravan.");
	break;
	
	default:
	alert("odgovor nije ispravan.");
}}


function opcija1()
{
document.write("Netačno.");
}
function opcija2()
{
document.write("Netačno.");
}
function opcija3()
{
document.write("Tačno.");
}

function Bonus()
{
	
	alert("Tačna opcija je didn't come.")
}



function brodgovori(){
var odgovora = prompt('Koji je broj odgovora?');

if(odgovora==1) 
{
    alert('Vaš nivo je A1');
}
else if(odgovora==2) 
{
    alert('Vaš nivo je A2');
}
else if(odgovora==3) 
{
    alert('Vaš nivo je B1');
}
else if(odgovora==4)
{
    alert('Vaš nivo je B2');
}
else if(odgovora==5)
{
	alert('Vaš nivo je C1');
}
else if(odgovora==6)
{
	alert('Vaš nivo je C2');
}
else
{
    alert('Ne prepoznajem parametar');
}
}