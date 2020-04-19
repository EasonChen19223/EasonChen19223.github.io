var database = firebase.database();
var orderRef = database.ref('order');
function loopForm(form) {
	alert("Check your order please");
	var sandwhichOrder = [];
	for (var i = 0; i < form.elements.length; i++) {
		if (form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value);
				alert(sandwhichOrder);
			}
		}
		if (form.elements[i].type == 'checkbox') {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder);
			}
		}
		document.getElementById("radioResults").innerHTML = sandwhichOrder;
	}


	var customer_name=name.value;
	var customer_cellphone=cellphone.value;
	alert(name + cellphone);
	document.getElementById("radioResults").innerHTML = customer_name + customer_cellphone + sandwhichOrder;
	var data= {
		sandwhich : sandwhichOrder,
		customers_name : customer_name,
		cell_number:customer_cellphone
	}
	orderRef.push(data);
	alert("data has been pushed");
}