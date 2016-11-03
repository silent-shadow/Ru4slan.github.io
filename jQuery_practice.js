//var str = "   str    ";
//alert(str);
//alert($.trim(str));
var test=$('div.test');
for (var i=0;i<test.length;i++){
	test.get(i).style.color='red';
	setTimeout("$('p.test').get(0).style.color='green'", 2000);
}
var test2=$('div');
//alert(test2.length);

//var img=$('img[title]');
//var linkk=$("#mmenu li a:first");
//alert(linkk.html());

function valid(){
	var state=$("input[name='sex']:checked").val();
	if (!state) return $('#message').html("<font style='color:red'>Не выбран пол!"); 

if (state)	$("#message").hide();
}

$(":not(img[alt])").attr ("alt", "JQuery");
var elements= $("img");
var text="";
for (var i=0;i<elements.length;i++){
text+=elements[i].className+ "\n";	
	}
	//alert(text);
	
//var div = prompt("1 или 2?");
//while (div !=1 && div !=2)	{
	//alert("Пожалуйста, введите число 1 или 2");
	//div = prompt("1 или 2?");
//}
	//$("#div").attr ("class", "div_" +div);
	//alert($("#div").get(0).className);
	//$("#div").css("font-size", "25px");
	//$("#div").css("color", "red");
	//$("#div").css("width", "250px");
	
	//$("#div").css("height", function(){
	//return $(this).width();
	//}
		//);
		//alert($("#div").html());
		//alert($("#div").text());
	//$("div").html("<p>New</p>");
	//var block=$("#div").clone();
	//$("body").append(block);
	//$("#div").append("<span>Текст спан</span>");
	//$("a").wrap("<p style='display:none></p>'");
	//$("img").appendTo($("#div_2"));
	//$("#div").remove(); //удаление
	//$("#div").empty(); //очистка информации-пустой блок
	//$("<p>dasd</p>").appendTo("div");// в конец добавляет
	//$("<p>dasd</p>").prependTo("div");//в начало добавляет
	//$("<p>dasd</p>").insertBefore("div");//перед блоком добавляет
	//$("<p>dasd</p>").insertAfter("div");//после блока добавляет
	function val(){
	var text=$("#text").val();//выводит значение с input введённый пароль, например
	alert(text);	
	}
	//$(document).ready(function (){
		//$("div").bind("click", incSize);
		//$(document).on("click", "p", function(){
			//alert("test");
		//});
	//});
	//function incSize(event){
	//var width = (Number(event.target.style.width.substring(0, event.target.style.width.length-2)));
//event.target.style.width = (width + 5) +"px";
//$(event.target)unbind();
//$("<p>Координаты мышки при нажатии: x- "+event.screenX + ",y - "+event.screenY+ "</p>").insertAfter("div:last");	
	//}
	var i=3;
	$(document).ready(function(){
	$(document).on("click", "#add_comment", function(){
		var form=$("form[name='form']");
		$(form).show(1000);
		$("#add_comment").replaceWith(form);
	});
	$(document).on("click","input[name='send']", function(){
		var comment=$("textarea[name='comment']").val();
		var name=$("input[name='login']").val();
		var Post=$("#Post");
		var postcomment=$("#Post-text p .osn");
		var Postdata=$("#Post-data");
		var newpost=$("#Post").clone();
		var newcomment=$("#Post-text").clone();
		var footer=$("#footer");
		i+=1;
		//var linkk=$("#mmenu li a:first");
		$(newpost).appendTo("#Posts");
		//$(newpost "#Post-text").empty();
		$("<p>"+comment+"</p>").appendTo(newcomment);
	});
	});
	function hideComments(){
		$("#Post").slideUp(1000, function(){
			$("#hide").hide();
			$("#show").show();
		});
	}
	
		function showComments(){
				$("#Post").slideDown(1000, function(){
			$("#hide").show();
			$("#show").hide();
		});
	}
	
	$(document).ready(function(){
		$("#hide").bind("click", hideComments);
		$("#show").bind("click", showComments);
	});
