// <!--

///// Beginning of Parsing Functions /////

//
// The language confluxer takes a list of words and associates
// every sequential pair of letters with the list of letters that
// might possibly follow the pair. The command "lc -s [datafile]"
// will show you what this looks like. The program chooses a pair
// that can occur at the beginning of a word, then selects one of
// the letters from the associated list, and forms a new pair,
// repeating until a whitespace character is found or until a
// max-length is reached. Simple.
//
function LCParseFile(filename, path) 
{
	var dic = new Object(); // char pair map

	try {
		ret = "Failed! Cause Unknown.";

		// when filename does not resolve
		var txtReq = RemoteTextFileRead(filename);
		var txtDoc = txtReq.response;

		dic = LCReadWords(txtDoc, dic);
	}
	catch (e) 
	{
		Dbg(e);
	}

	return dic;
}

function LCReadWords(ts, dic) 
{
	var re = /\S/i;
	var mode = 0;
	var index = 0;
	var lastIndex = ts.length;
	var text = "";

	while (index < lastIndex)
	{
		var c = ts.charAt(index);

		switch (mode)
		{
			default:
			case 0: // Nominal
			{
				if ("#" == c)
				{
					mode = 1; // skip comment
				}
				else if (null != c.match(re))
				{
					text += c;
				}
				else if (text.length > 0)
				{
					dic = LCProcessWord(text, dic);
					text = "";
				}
				else
				{
					text = "";
				}
			}; break; 
			case 1: // Eat Comments
			{
				if ('\n' == c)	{ mode = 0; text = ""; }; break; // Done
			}; break; 
		} // switch mode

		index++;
	} // while
	
	return dic;
}

//
// LC Dictionary Format:  xx { yyyyyyyyyyyy }
// xx			--	two letter (doublet) dictionary index.
// yyyyyyyyyy	--	string of characters that have appeared after the doublet in
//					word source file.
//
function LCProcessWord(w, dic) 
{
	var doublet = "";
	var tail = "";

	// process letter pairs in word
	for (c = 0; c < w.length - 1; c++) 
	{
		doublet = w.substr(c, 2);
		tail = w.substr(c + 2, 1);

		var entry = dic[doublet];
		if (null == entry)
		{
			// add new tail
			dic[doublet] = tail;
		}
		else
		{
			// note tail is a histogram
			var histotail = entry + tail;
			dic[doublet] = histotail;
		}
	}

	return dic;
}

///// End of Parsing Functions /////



///// Beginning of Doublet Data File Parsing Functions /////
function JsDictionarytoArray(dic) 
{
	var arr = [], doublet;
	for (var key in dic) 
	{
		// two letter ngram and follower letter list 
		doublet = {};
		// a two letter pair
		doublet.doublet = key;
		// letters likely to follow the two letter pair
		doublet.tail = dic[key];
		arr.push(doublet);
	}
	return arr
}

//
// Saved File
//
// Doublet File Format
// <?xml version="1.0"?>
// <doublet-list>
//   <doublet pair="ab">charactersindoublelist</doublet>
//   <doublet pair="cd">charactersindoublelist</doublet>
// </doublet-list>
//
function LCWriteDoubletList(dic) 
{
	var ret = "";
	var doublet = "";

	try {
		ret = "Failed! Cause Unknown.";

		// Write header
		var file_header = "<?xml version=\"1.0\"?>";
		file_header += String.fromCharCode(13);
		file_header += String.fromCharCode(10);
		file_header += "<doublet-list>";
		doublet += file_header;

		// Write Data

		var pairs = JsDictionarytoArray(dic);
		function entryAppend(e, i, arr)
		{
			var file_entry = String.fromCharCode(13);
			file_entry += String.fromCharCode(10);
			file_entry += "<doublet pair=\"";
			file_entry += e["doublet"];
			file_entry += "\">";
			file_entry += e["tail"];
			file_entry += "</doublet>";
			doublet += file_entry;
		} // entry append iterator
		pairs.forEach(entryAppend);

		// Write footer
		var file_footer = "";
		file_footer += String.fromCharCode(13);
		file_footer += String.fromCharCode(10);
		file_footer += "</doublet-list>";
		doublet += file_footer;

		// Success
		ret = doublet;
	}
	catch (e)
	{
		Msg(e);
	}

	return ret;
}

//
// Not used in this hta. This code is used in the name generator and this 
// code is for validating th loading mechanism for that page.
//
function LCReadDoubletList(xmlstr) 
{
	var dic = new Object(); // char pair map

	try 
	{
		var xmlDoc = XmlDomStringLoad(xmlstr);
	
		var nodes = XmlDomEvaluateXPath(xmlDoc, "//doublet");
		if (null == nodes) 
		return dic;

		var node = null;
		var attrib = null;
		while (node = nodes.iterateNext())
		{
			attrib = XmlNodeAttribute(node, "pair");
			if (null != attrib)
			{
				dic[attrib] = XmlNodeText(node);
			}
		} // while
	}
	catch (e) 
	{
		Dbg(e);
	}

	return dic;
}

///// Ending of Doublet Data File Parsing Functions /////



///// Beginning of Remote Data File Access Routines /////

function RemoteTextFileRead(file) {
	var reqFile = new XMLHttpRequest();
	reqFile.async = false;
	reqFile.open("GET", file, false);
	reqFile.onreadystatechange = function () {
		if (4 === reqFile.readyState) {
			if (200 === reqFile.status || 0 === reqFile.status) {
				var allText = reqFile.response;
				//Dbg(allText);
				return reqFile;
			}
		}
	}
	reqFile.send(null);
	return reqFile;
}


function XmlDomStringLoad(strxml)
{
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(strxml,"text/xml");
	return xmlDoc;
}

function XmlDomEvaluateXPath(xmlDoc, xpath)
{
	var nodes = null;
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	if (isIE)
		nodes = xmlDoc.selectNodes(xpath);
	else
		nodes = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	return nodes;
}

function XmlNodeAttribute(node, attrib)
{
	return node.getAttribute(attrib);
}

function XmlNodeText(node)
{
	// return node.text;
	return node.textContent;	
}

///// Ending of Remote Data File Access Routines /////

///// Beginning of Data File Compilation Routines /////


function compile(filename) 
{
	Msg("Parsing and compiling names uri: " + filename);
	var dic = LCParseFile(filename);

	var compiled = "";

	// Write the double list to the file format
	Msg("Formatting name data for xml storage.");
	compiled = LCWriteDoubletList(dic);

	Msg("Reload file to verify data.");
	var dic = LCReadDoubletList(compiled);

	Msg("Finished compile. Copy the xml to a file to create a data set.");

	// pass back the text file data
	return compiled;
}


///// Ending of Data File Compilation Routines /////





// -->

