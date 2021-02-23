var document = fl.getDocumentDOM();
var selections = document.selection;
var scriptURI = fl.scriptURI;
var scriptDirectory = scriptURI.substring(0, scriptURI.lastIndexOf("/") + 1);
var exportFolderPath = scriptURI.substring(0, scriptURI.lastIndexOf("/packages") + 1);
exportFolderPath += "assets/textures";
FLfile.createFolder(exportFolderPath);
var maxTextureSize = {
	width: 3600,
	height: 3600
};
fl.outputPanel.clear();
var funcs = {};
funcs.exportHandler = function () {
	if (selections && selections.length > 0) {
		var e = false;
		for (var d = 0; d < selections.length; d++) {
			var c = selections[d];
			if (c.elementType === "instance") {
				if (c.instanceType === "symbol") {
					e = funcs.exportSymbolElement(c)
				} else {
					if (c.instanceType === "bitmap") {
						var b = funcs.convertToSymbol(c, d);
						e = funcs.exportSymbolElement(b)
					}
				}
			} else {
				if (c.elementType === "shape") {
					if (c.isGroup) {
						fl.trace("Warning：a group was found and exported as an image.（找到一个组并已将它导出为一张图像）")
					}
					var a = funcs.convertToSymbol(c, d);
					e = funcs.exportSymbolElement(a)
				} else {
					alert("Error: unknown element type '" + c.elementType + "'")
				}
			}
		}
		if (e) {
			alert("Export complete")
		}
	} else {
		alert("Error: no object is selected")
	}
};
funcs.convertToSymbol = function (d, a) {
	var e = d.depth;
	document.selectNone();
	d.selected = true;
	document.convertToSymbol("movie clip", "", "center");
	var b = document.selection[0];
	for (var c = 0; c < 1000; c++) {
		document.arrange("backward");
		if (b.depth == e) {
			break
		}
	}
	if (a > -1) {
		selections[a] = b
	}
	document.selection = selections;
	return b
};
funcs.exportSymbolElement = function (d) {
	const c = d.libraryItem.linkageClassName;
	const a = d.name;
	var e = d.libraryItem.name;
	e = e.substr(e.lastIndexOf("/") + 1);
	var f = a ? a : (c ? c : e);
	f = f.replace(" ", "_");
	const b = exportFolderPath + "/" + f;
	if (funcs.isOverflowed(d)) {
		return funcs.exportEveryFrame(d, exportFolderPath, f)
	} else {
		funcs.deleteOldFile(b);
		return funcs.exportAllFrameToImage(d, b, f)
	}
	return false
};
funcs.deleteOldFile = function (c) {
	const d = c + ".png";
	if (FLfile.exists(d)) {
		FLfile.remove(d)
	}
	const a = c + ".png.meta";
	if (FLfile.exists(a)) {
		FLfile.remove(a)
	}
	const e = c + ".plist";
	if (FLfile.exists(e)) {
		FLfile.remove(e)
	}
	const b = c + ".plist.meta"
};
funcs.exportAllFrameToImage = function (b, a, e) {
	var c = new SpriteSheetExporter();
	c.addSymbol(b, 0);
	funcs.setSpriteSheetExporter(c);
	var d = {
		format: "png",
		bitDepth: 32,
		backgroundColor: "#00000000"
	};
	c.exportSpriteSheet(a, d, true);
	funcs.generatePlist(a, e, e, c.sheetWidth, c.sheetHeight, true, true);
	return true
};
funcs.exportEveryFrame = function (g, e, n) {
	var o = funcs.mulPngAnimXml_beginExport();
	var b = g.libraryItem.timeline.frameCount;
	for (var h = 0; h < b; h++) {
		var a = new SpriteSheetExporter();
		a.addSymbol(g, "", h, h + 1);
		funcs.setSpriteSheetExporter(a);
		if (a.overflowed) {
			var k = "Error: frame " + (h + 1) + " of '" + n + "' exceeds the texture size limit of " + a.maxSheetWidth + "x" + a.maxSheetHeight + " cancelled";
			fl.trace(k);
			alert(k);
			return false
		}
	}
	for (var h = 0; h < b; h++) {
		var l = h + "";
		if (l.length < 4) {
			const m = 4 - l.length;
			for (var d = 0; d < m; d++) {
				l = "0" + l
			}
		}
		const c = e + "/" + n + l;
		funcs.deleteOldFile(c);
		var a = new SpriteSheetExporter();
		a.addSymbol(g, "", h, h + 1);
		funcs.setSpriteSheetExporter(a);
		var f = {
			format: "png",
			bitDepth: 32,
			backgroundColor: "#00000000"
		};
		a.exportSpriteSheet(c, f, true);
		funcs.generatePlist(c, n + l, n, a.sheetWidth, a.sheetHeight, true, false);
		o += funcs.mulPngAnimXml_frameExport(n + l)
	}
	o += funcs.mulPngAnimXml_EndExport();
	FLfile.write(e + "/" + n + ".multipleImageAnim", o);
	return true
};
funcs.mulPngAnimXml_beginExport = function () {
	var a = '<?xml version="1.0" encoding="utf-8"?>\n';
	a += "<root>\n";
	return a
};
funcs.mulPngAnimXml_frameExport = function (a) {
	var b = "\t<name>" + a + "</name>\n";
	return b
};
funcs.mulPngAnimXml_EndExport = function () {
	var a = "</root>";
	return a
};
funcs.isOverflowed = function (a) {
	var b = new SpriteSheetExporter();
	b.addSymbol(a, 0);
	funcs.setSpriteSheetExporter(b);
	return b.overflowed
};
funcs.setSpriteSheetExporter = function (a) {
	a.allowTrimming = true;
	a.algorithm = "basic";
	a.layoutFormat = "Starling";
	a.autoSize = true;
	a.stackDuplicateFrames = true;
	a.borderPadding = 5;
	a.shapePadding = 5;
	a.maxSheetWidth = maxTextureSize.width;
	a.maxSheetHeight = maxTextureSize.height
};
funcs.generatePlist = function (filePath, exportName, metaFileName, sheetWidth, sheetHeight, isDelStarlingXml, isConnectFrameName) {
	var xmlPath = filePath + ".xml";
	var starlingXml = eval(FLfile.read(xmlPath).split("\n").slice(1).join("\n"));
	var s = funcs.cocos2dv2_beginExport();
	var subTextureNodes = starlingXml.SubTexture;
	const len = subTextureNodes.length();
	var pivotX = 0;
	var pivotY = 0;
	for (var i = 0; i < len; i++) {
		var subTextureNode = subTextureNodes[i];
		if (i == 0) {
			pivotX = Number(subTextureNode.@pivotX);
			pivotY = Number(subTextureNode.@pivotY)
		}
		var name = subTextureNode.@name;
		var x = Number(subTextureNode.@x);
		var y = Number(subTextureNode.@y);
		var width = Number(subTextureNode.@width);
		var height = Number(subTextureNode.@height);
		var frameXStr = subTextureNode.@frameX;
		if (frameXStr == null) {
			frameXStr = "0"
		}
		var frameX = Number(frameXStr);
		var frameYStr = subTextureNode.@frameY;
		if (frameYStr == null) {
			frameYStr = "0"
		}
		var frameY = Number(frameYStr);
		var frameWidthStr = subTextureNode.@frameWidth;
		if (frameWidthStr == null) {
			frameWidthStr = "0"
		}
		var frameWidth = Number(frameWidthStr);
		var frameHeightStr = subTextureNode.@frameHeight;
		if (frameHeightStr == null) {
			frameHeightStr = "0"
		}
		var frameHeight = Number(frameHeightStr);
		var poX = (pivotX + frameX) / width;
		var poY = (height - pivotY - frameY) / height;
		var frame = {
			id: (isConnectFrameName ? exportName + name : exportName),
			frame: {
				x: x,
				y: y,
				w: width,
				h: height
			},
			offsetInSource: {
				x: -frameX,
				y: -frameY
			},
			sourceSize: {
				w: frameWidth,
				h: frameHeight
			},
			anchor: {
				x: poX,
				y: poY
			},
			rotated: false
		};
		s += funcs.cocos2dv2_frameExport(frame)
	}
	var meta = {
		image: metaFileName + ".png",
		sheetWidth: sheetWidth,
		sheetHeight: sheetHeight
	};
	s += funcs.cocos2dv2_endExport(meta);
	if (isDelStarlingXml && FLfile.exists(xmlPath)) {
		FLfile.remove(xmlPath)
	}
	FLfile.write(filePath + ".plist", s)
};
funcs.cocos2dv2_beginExport = function () {
	var a = '<?xml version="1.0" encoding="utf-8"?>\n';
	a += '<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n';
	a += '<plist version="1.0">\n';
	a += "\t<dict>\n";
	a += "\t\t<key>frames</key>\n";
	a += "\t\t<dict>\n";
	return a
};
funcs.cocos2dv2_frameExport = function (e) {
	var d = "\t\t\t<key>" + e.id + "</key>\n";
	d += "\t\t\t<dict>\n";
	d += "\t\t\t\t<key>frame</key>\n";
	var c = e.sourceSize.w - e.frame.w;
	var b = e.sourceSize.h - e.frame.h;
	d += "\t\t\t\t<string>{{" + e.frame.x + "," + e.frame.y + "},{" + e.frame.w + "," + e.frame.h + "}}</string>\n";
	d += "\t\t\t\t<key>offset</key>\n";
	var a = 0 - e.offsetInSource.x;
	var f = 0 - e.offsetInSource.y;
	d += "\t\t\t\t<string>{" + a + "," + f + "}</string>\n";
	d += "\t\t\t\t<key>rotated</key>\n";
	d += "\t\t\t\t<" + e.rotated + "/>\n";
	d += "\t\t\t\t<key>sourceColorRect</key>\n";
	var c = e.sourceSize.w - e.frame.w;
	var b = e.sourceSize.h - e.frame.h;
	d += "\t\t\t\t<string>{{" + c + "," + b + "},{" + e.frame.w + "," + e.frame.h + "}}</string>\n";
	d += "\t\t\t\t<key>sourceSize</key>\n";
	d += "\t\t\t\t<string>{" + e.frame.w + "," + e.frame.h + "}</string>\n";
	d += "\t\t\t\t<key>anchor</key>\n";
	d += "\t\t\t\t<string>{" + e.anchor.x + "," + e.anchor.y + "}</string>\n";
	d += "\t\t\t</dict>\n";
	return d
};
funcs.cocos2dv2_endExport = function (b) {
	var a = "\t\t</dict>\n";
	a += "\t\t<key>metadata</key>\n";
	a += "\t\t<dict>\n";
	a += "\t\t\t<key>format</key>\n";
	a += "\t\t\t<integer>2</integer>\n";
	a += "\t\t\t<key>realTextureFileName</key>\n";
	a += "\t\t\t<string>" + b.image + "</string>\n";
	a += "\t\t\t<key>size</key>\n";
	a += "\t\t\t<string>{" + b.sheetWidth + "," + b.sheetHeight + "}</string>\n";
	a += "\t\t\t<key>textureFileName</key>\n";
	a += "\t\t\t<string>" + b.image + "</string>\n";
	a += "\t\t</dict>\n";
	a += "\t</dict>\n";
	a += "</plist>\n";
	return a
};
funcs.exportHandler();