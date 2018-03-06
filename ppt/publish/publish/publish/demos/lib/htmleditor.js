var emmetSupport=true,
    texteditor=$("#editor"),
    previewer=$("#preview"),
    downBtn=$("#downBtn"),
    openBtn=$("#openBtn"),
    themeBtn=$("#themeBtn"),
    fileParam = getUrlParam('file'),
    codeMirror;

//分隔窗口
$('div.split-pane').splitPane();

//CodeMirror实现编辑和预览

//获取url地址的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
//下载功能实现
var createURL = function() {
    var blob = new Blob([codeMirror.getValue()], {
        type: 'text/html'
    });

    downBtn.attr('href', window.URL.createObjectURL(blob));
}

function initEditor(){
    codeMirror = CodeMirror.fromTextArea(texteditor[0], {
        lineNumbers: true,
        mode: 'htmlmixed',
        viewportMargin: Infinity,
        theme: 'monokai'
    });
    if (emmetSupport) {
        emmetCodeMirror(codeMirror);
    }
}

function changeEditor(){
    codeMirror.on('change', setPreview);
    setPreview();
}

function setPreview() {
    requestAnimationFrame(function() {
        previewer[0].srcdoc = codeMirror.getValue();
    });
    createURL();
}

function getEditorData(){
    if (fileParam) {
        var url = window.location.href,fileUrl;
        
		if(fileParam.substr(0,2)=="//"){
			fileUrl=fileParam;
		}else if(fileParam.substr(0,1)=="/"){
			
		}else{
			fileUrl=fileParam+".html";
		}

        $.ajax({
            url: fileUrl,
            success: function(data) {
                codeMirror.setValue(data);
                downBtn.attr('download', fileParam+'.html');
                changeEditor();
            }
        });

    } else {
        codeMirror.setValue("!");
        changeEditor();
    }
}

initEditor();
getEditorData();

openBtn.change(function(event) {
    var file = this.files[0],
        reader = new FileReader();

    if (file) {
        downBtn.attr('download', file.name);
        reader.readAsText(file);
        reader.addEventListener('load', function() {
            codeMirror.setValue(this.result);
            changeEditor();
        });
    }
});

themeBtn.click(function(event) {
    if ($(this).hasClass('black')) {
        $(this).text('黑色').removeClass('black');
        codeMirror.setOption('theme','default');
    } else {
        $(this).text('白色').addClass('black');
        codeMirror.setOption('theme','monokai');
    }
});