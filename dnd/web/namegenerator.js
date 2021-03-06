// <!--


///// Beginning of Doublet Data File Parsing Functions /////

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



function RemoteXmlFileRead(file)
{
    var rawFile = new XMLHttpRequest();
	rawFile.async = false;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4)
        {
            if (rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //Dbg(allText);
				return rawFile;
            }
        }
    }
    rawFile.send(null);
	return rawFile;
}

function XmlDomLoad(file)
{
	var xmlReq = RemoteXmlFileRead(file); 
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(xmlReq.responseText,"text/xml");
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

function LCReadDoubletList(filepath) 
{
	var dic = new Object(); // char pair map

	try
	{
		var xmlDoc = XmlDomLoad(filepath); 
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
		}
	}
	catch (e)
	{
		if (0 != e.number)
		{
			ret = "Error: " + e.number;
			ret += ", was generated by " + e.source;
			ret += String.fromCharCode(13);
			ret += " Description: " + e.description;
			Dbg( ret );
		}
	}

	return dic;
}

///// Ending of Doublet Data File Parsing Functions /////


///// Beginning of Word Generation Functions /////

function JsDictionarytoArrayOld(dic) 
{
	var keys = (new Array(dic.Keys())).toArray();
	return keys;
}
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

function LCGenerateWords(dic, count, chars_max, chars_min) 
{
	var words = new Array();

	try
	{
		if( dic == null || dic.Count < 1 )
		{
			Msg("Could not find imported data! Make sure the data file was imported successfully.");			return;
		}

		var re = /\s/gi;
		var doublet = "";
		var word = "";
		var ch = "";
		var tail = null;
		
		//var keys = (new Array(dic.Keys())).toArray();
		var pairs = JsDictionarytoArray(dic);
    
		while( words.length < count )
		{
			// BUGBUG note double can contain a space it needs to be trimmed prior to 
			// testing the length of the array
			if ( (doublet.replace(re, "")).length < 2 )
			{
				// Lookup random two letter pair, ngram
				var r = Math.floor(Math.random() * pairs.length);
				doublet = pairs[ r ].doublet;
				word = doublet;
			}

			// Get tail character string for the doublet characters
			tail = new String( dic[doublet] );
			if (null == tail) throw( new Error(2,"{" + doublet + "} = " + tail));
        
			// pick a random tail character
			ch = tail.substr(Math.floor(Math.random() * tail.length), 1);
			if ( 0 == ch.length ) ch = " ";
			//window.alert( "doublet = " + doublet + ", ch = " + ch + ", tail = " + tail);
        
			if (null != ch.match(re) )
			{
				if( word.length >= chars_min )
				{
					words[words.length] = word;
				}
				word = ""; // On next pass start new word
			}
			else
			{
				word += ch;
			}
          
			if (word.length == chars_max)
			{
				words[words.length] = word;
				word = ""; // On next pass start new word
			}
        
			// Second character in the doublet + random tail character forms new doublet
    	    doublet = doublet[1] + ch;
		}
    
	}
	catch( e )
	{
		Msg("Error: " + e.number + ", was generated by " + e.source + String.fromCharCode(13) + " Description: " + e.description);
	}

	return words;
}


function LCProperNames( words, vowel_max ) 
{
	var names = new Array();

	try
	{
		var re = /[aeiou]/gi;
	
		var sname = new Array();
		var lname = new Array();
	
		var s = ""; 
		for( i = 0; i < words.length; i++ )
		{
			s = words[i];

			var matches = s.match(re);
			if( matches == null )
				continue;
			
			if( matches.length < vowel_max )
				sname[sname.length] = s;
			else
				lname[lname.length] = s;
		}
		
		var name_count = ( sname.length > lname.length ) ? lname.length : sname.length;
		
		var a = "";
		var b = "";
	
		for( i = 0; i < name_count; i++ )
		{
			a = sname[i];
			a = (a[0]).toUpperCase() + a.substr(1);

			b = lname[i];
			b = (b[0]).toUpperCase() + b.substr(1);
			if( Math.floor( Math.random() * 1) == 1 )
				s = a + " " + b;
			else
				s = b + " " + a;
			
			names[i] = s;
		}
    
		if( name_count > 0 )
			Msg("Name Generation Succeeded!");
		else
			Msg("No Names Generated.");
	}
	catch( e )
	{
		if( e.number != 0 )
		{
			Msg("Error: " & e.number & ", was generated by " + e.source + String.fromCharCode(13) + " Description: " + e.description);
		}
	}

	return names;
}

///// Ending of Word Generation Functions /////

///// Beginning of Message Output Functions /////

function Dbg( s )
{
	window.alert(s);
}

function Msg( s )
{
	display("statusArea", s);
}

<!-- display text function -->
var NS = (document.layers) ? 1 : 0;
var NS6 = (document.getElementById) ? 1 : 0;
var IE = (document.all) ? 1 : 0;

function display(id, str) 
{
	if (NS) 
	{
    	with (document[id].document) 
		{
			open();
    		write(str);
			close();
		}
	}
	else if (NS6)
	{
    	document.getElementById(id).innerHTML = str;
	}
	else
	{
		document.all[id].innerHTML = str;
	}
}

///// Ending of Message Output Functions /////


function generate(source, word_count, word_max, word_min )
{
	//Msg(source)
	var dic = LCReadDoubletList( source );

	return LCGenerateWords(dic, word_count, word_max, word_min);
}


function generateWords()
{
	// Read Inputs
	var names_source = document.form1.names_source.value; 
	var word_max = document.form1.word_maximum.value; 
	var word_min = document.form1.word_minimum.value; 
	var word_count = document.form1.word_count.value; 
	var vowel_max = document.form1.vowel_maximum.value; 
	var name_count = document.form1.name_count.value; 

	/*	
	names += "names_source = " + names_source;
	names += ", word_max = " + word_max;
	names += ", word_min = " + word_min;
	names += ", word_count = " + word_count;
	names += ", vowel_max = " + vowel_max;
	names += ", name_count = " + name_count;
	*/

	var words = generate(names_source, word_count, word_max, word_min );
	
	var names = LCProperNames( words, vowel_max );

	var name_list = "";	
	for(i in names)
	{
		name_list += "<BR/>";
		name_list += " " + names[i];
	}
	
	display("theNames", name_list);
}


// -->

