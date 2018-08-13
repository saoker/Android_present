
document.addEventListener( "plusready",  function()
{
    var _BARCODE = 'plugintest',
		B = window.plus.bridge;
    var plugintest =
    {
    	PluginTestFunction : function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback )
		{
			var success = typeof successCallback !== 'function' ? null : function(args)
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code)
			{
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
		},
		PluginTestFunctionArrayArgu : function (Argus, successCallback, errorCallback )
		{
			var success = typeof successCallback !== 'function' ? null : function(args)
			{
				successCallback(args);
			},
			fail = typeof errorCallback !== 'function' ? null : function(code)
			{
				errorCallback(code);
			};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "PluginTestFunctionArrayArgu", [callbackID, Argus]);
		},
        PluginTestFunctionSync : function (Argus1, Argus2, Argus3, Argus4)
        {
            return B.execSync(_BARCODE, "PluginTestFunctionSync", [Argus1, Argus2, Argus3, Argus4]);
        },
        PluginTestFunctionSyncArrayArgu : function (Argus)
        {
            return B.execSync(_BARCODE, "PluginTestFunctionSyncArrayArgu", [Argus]);
        }
    };
    window.plus.plugintest = plugintest;
    //alert('aaaaa')
    var js = document.createElement('script')
            js.src = 'static/js/app.7d61003be187f2ae9cf8.js'
            document.body.appendChild(js)
            //alert('eeee')
}, true );
;
(function() {
    // H5 plus事件处理  按下返回键处理
    var versionCode; //当前版本号
    function plusReady() {
        var lang = window.plus.plugintest.PluginTestFunctionSync('get', 'lang', '', '')
        var exit = ''
        if(lang === 'en') {
            exit = 'Are you sure you want to exit?'
        } else if(lang === 'zh') {
            exit = '确定要退出吗？'
        } else if(lang === 'ct') {
            exit = '確定要退出嗎？'
        } else {
            exit = 'Bạn có chắc chắn muốn thoát không?'
        }
        window.plus.key.addEventListener('backbutton', function() {
            if(!history.state || history.state.view_0.url.indexOf('/index') === 0) {
                if(confirm(exit)) {
                    window.plus.runtime.quit()
                }
            } else {
                window.plus.webview.currentWebview().back()
            }
        });
        // 获取本地应用资源版本号
        plus.runtime.getProperty(plus.runtime.appid, function(inf) {
            versionCode = inf.version;
            //alert("-----------当前应用版本：" + versionCode);
            checkUpdate()
            //setTimeout("checkUpdate()", "3000");
        });
    }

    if(window.plus) {
        plusReady();
    } else {
        document.addEventListener('plusready', plusReady, false);
    }
    var downUrl; //下载地址
    function checkUpdate() {
        //版本检测地址
        var checkUrl = "https://m.vnbig.com/api/common/version/checkappversion/_0/" + versionCode
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return
            }
            if(xhr.status == 200) {
                var resp = JSON.parse(xhr.response);
                //console.log(typeof resp)
                //console.log("-----------检测更新成功 解析json：" + resp.downloadAddress +"---" + resp.isUpgrade + "---" + resp.isModify);
                downUrl = resp.downloadAddress;
                if (resp && resp.isUpgrade) {
                    //需要强制更新
                    window.plus.plugintest.PluginTestFunction('update', '', '', '', function() {
                        //alert('update成功')
                    }, function() {
                        //alert('update失败')
                    })
                } else {
                    if(resp && resp.isModify) {
                        //需要手动更新
                        var strtt = "当前版本是"+versionCode+"，检测到最新版本，是否更新？"
                        if(confirm(strtt)) {
                            downWgt()
                        }
                    } else {
//                        alert.("已是最新版，无需更新！");
                    }
                }
            } else {
                //alert("-----------检测失败：");
            }
        }
        xhr.open('GET', checkUrl);
        //xhr.send('user=HBuilder&test=value');
        //console.log("-----------检测地址：" + checkUrl);
        xhr.send();
    }

    function downWgt() {
        //console.log("-----------下载地址：" + downUrl);
        //plus.nativeUI.showWaiting("软件有更新，将跳转到下载页...");
        plus.downloader.createDownload(downUrl, {
            filename: "_doc/update/"
        }, function(d, status) { //_doc/update/默认路径
            if(status == 200) {
                //open(d.filename);         // 打开下载地址
                //installWgt(d.filename);
                plus.runtime.install(d.filename);
            } else {
                //plus.nativeUI.alert("打开下载页面失败！");
            }
            //plus.nativeUI.closeWaiting();
        }).start();
    }
}())

//---------------http://test.m.tl-vnbig.com/api/    测试地址
//---------------https://m.vnbig.com/api/   正式地址