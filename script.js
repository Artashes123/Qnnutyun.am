function checkPhysics(){
	let correct_answers = [
	document.getElementById("PHYS1"),
	document.getElementById("PHYS2"),
	document.getElementById("PHYS3"),
	document.getElementById("PHYS4"),
	document.getElementById("PHYS5"),
	document.getElementById("PHYS6"),
	document.getElementById("PHYS7"),
	document.getElementById("PHYS8"),
	document.getElementById("PHYS9"),
	document.getElementById("PHYS10")
]
	let correct = 0;
	let tokos = document.getElementById("PHYStokos");;
	let AskCount = correct_answers.length;

	document.getElementById("RESULTPHYS").style.display='block';
	
	if(correct_answers[0].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan1").innerHTML = '1. Ճիշտ'
		document.getElementById("PHYSpatasxan1").style.color = 'green';

	}
	if(correct_answers[1].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan2").innerHTML = '2. Ճիշտ'
		document.getElementById("PHYSpatasxan2").style.color = 'green';
	}
	if(correct_answers[2].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan3").innerHTML = '3. Ճիշտ'
		document.getElementById("PHYSpatasxan3").style.color = 'green';		
	}
	if(correct_answers[3].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan4").innerHTML = '4. Ճիշտ'
		document.getElementById("PHYSpatasxan4").style.color = 'green';		
	}
	if(correct_answers[4].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan5").innerHTML = '5. Ճիշտ'
		document.getElementById("PHYSpatasxan5").style.color = 'green';		
	}
	if(correct_answers[5].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan6").innerHTML = '6. Ճիշտ'
		document.getElementById("PHYSpatasxan6").style.color = 'green';		
	}
	if(correct_answers[6].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan7").innerHTML = '7. Ճիշտ'
		document.getElementById("PHYSpatasxan7").style.color = 'green';		
	}
	if(correct_answers[7].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan8").innerHTML = '8. Ճիշտ'
		document.getElementById("PHYSpatasxan8").style.color = 'green';		
	}
	if(correct_answers[8].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan9").innerHTML = '9. Ճիշտ'
		document.getElementById("PHYSpatasxan9").style.color = 'green';		
	}
	if(correct_answers[9].checked == true){
		correct += 1
		document.getElementById("PHYSpatasxan10").innerHTML = '10. Ճիշտ'
		document.getElementById("PHYSpatasxan10").style.color = 'green';		
	}


	tokos.innerHTML = 'Ճիշտ պատասխանների տոկոս `' + " " + (100 * correct) / AskCount + '%'
}


function checkMath(){
	let correct_answers1 = [
		document.getElementById("MATH1"),
		document.getElementById("MATH2"),
		document.getElementById("MATH3"),
		document.getElementById("MATH4"),
		document.getElementById("MATH5"),
		document.getElementById("MATH6"),
		document.getElementById("MATH7"),
		document.getElementById("MATH8"),
		document.getElementById("MATH9"),
		document.getElementById("MATH10")
	]
	let correct = 0;
	let tokos = document.getElementById("MATHtokos");;
	let AskCount = correct_answers1.length;

	document.getElementById('RESULTMATH').style.display='block';
	
	if(correct_answers1[0].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan1").innerHTML = '1. Ճիշտ'
		document.getElementById("MATHpatasxan1").style.color = 'green';
	}
	if(correct_answers1[1].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan2").innerHTML = '2. Ճիշտ'
		document.getElementById("MATHpatasxan2").style.color = 'green';
	}
	if(correct_answers1[2].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan3").innerHTML = '3. Ճիշտ'
		document.getElementById("MATHpatasxan3").style.color = 'green';		
	}
	if(correct_answers1[3].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan4").innerHTML = '4. Ճիշտ'
		document.getElementById("MATHpatasxan4").style.color = 'green';		
	}
	if(correct_answers1[4].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan5").innerHTML = '5. Ճիշտ'
		document.getElementById("MATHpatasxan5").style.color = 'green';		
	}
	if(correct_answers1[5].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan6").innerHTML = '6. Ճիշտ'
		document.getElementById("MATHpatasxan6").style.color = 'green';		
	}
	if(correct_answers1[6].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan7").innerHTML = '7. Ճիշտ'
		document.getElementById("MATHpatasxan7").style.color = 'green';		
	}
	if(correct_answers1[7].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan8").innerHTML = '8. Ճիշտ'
		document.getElementById("MATHpatasxan8").style.color = 'green';		
	}
	if(correct_answers1[8].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan9").innerHTML = '9. Ճիշտ'
		document.getElementById("MATHpatasxan9").style.color = 'green';		
	}
	if(correct_answers1[9].checked == true){
		correct += 1
		document.getElementById("MATHpatasxan10").innerHTML = '10. Ճիշտ'
		document.getElementById("MATHpatasxan10").style.color = 'green';		
	}

	tokos.innerHTML = 'Ճիշտ պատասխանների տոկոս `' + " " + (100 * correct) / AskCount + '%'
}

