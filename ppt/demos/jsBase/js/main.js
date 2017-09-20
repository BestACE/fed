window.onload = function() {
	var oDivUser = document.getElementById('user');
	var aTrUser = oDivUser.getElementsByTagName('tr');
	var aEdit = document.getElementsByClassName('edit');
	var aDel = document.getElementsByClassName('del');
	var i;
	var isEdit = true;

	tiaowen();
	del();
	edit();
	//隔行变色
	function tiaowen() {

			for (var i = 0; i < aTrUser.length; i++) {

				if (i % 2 == 0) {
					aTrUser[i].className = "odd";
				} else {
					aTrUser[i].className = "";
				}
			}
		}
	
	//删除语句

	function del() {
		//for in循环
		for (i in aDel) {
			aDel[i].onclick = function() {
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				tiaowen();
			}
		}
	}
	function edit(){
		for(i in aEdit){
			aEdit[i].onclick=function(){
				var td = this.parentNode.parentNode.getElementsByTagName('td');
				var td1Old = td[1].innerHTML;
				var td2Old = td[2].innerHTML;
				var td1New;
				var td2New;
				if(isEdit){
					isEdit=false;
					td[1].innerHTML="<input size='1' type='text' value='" + td1Old + "'>";
					td[2].innerHTML="<input size='1' type='text' value='" + td2Old + "'>";
					this.innerHTML='确定';
				}else{
					isEdit=true;
					td1New=td[1].childNodes[0].value;
					td2New=td[2].childNodes[0].value;
					td[1].innerHTML=td1New;
					td[2].innerHTML=td2New;
					this.innerHTML='修改';
				}
			}
		}
	}
}