# 安装sublime text

## 下载

1. [官方网站](http://www.sublimetext.com/)下载
2. 选择适合版本(2或者3, 32位或者64位，可移植版本或安装版本)。

## 安装

- 对**可移植版本**来说，直接解压即可。
- 对**安装版本来**说，按步骤安装。

## 插件安装

1. 安装package control
	- 自动安装。
		1. [官方网站](https://packagecontrol.io/installation)选择版本复制。

		sublime text2 来说，复制如下代码。

		```
		import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
		```
		sublime text 3来说，复制如下代码。

		```
		import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
		```
		2. <kbd>ctrl+`</kbd>打开命令窗口，将上述代码复制进去，回车即可。
	- 手动安装。
		1. 官方下载[安装包](https://packagecontrol.io/Package%20Control.sublime-package).
		2. 选择菜单	`Preferences/Browse Packages……`, 文件夹向上一层找到`Installed Packages/`文件夹。
		3. 将安装包复制到第2步的文件夹，重启sublime即可。	
		
2. 安装emmet插件。
	1. 选择菜单`Preferences/Package Control`。
	2. 选择`Package Control: Install package`。
	3. 跳出窗口中输入emmet，选择emmet插件即可，稍等片刻，即可完成安装。
	4. 重启sublimet text完成安装。
3. 安装其他插件，例如sublimeServer、Sass、html5、jQuery、Autoprefixer等。

