// <!--

//
// extern function Msg( string )
//
// When these routines encounter errors they log to the Msg() function
// which should be defined externally.
//

///// Beginning of Generator File Parsing Functions /////

//
//  <generator start-xpath="//lookup-table[@key = 'D']/lookup-entry" >
//	  <lookup-table key="D">
//	    <lookup-entry>The %A% %P%</lookup-entry>
//	    <lookup-entry>The %A% %C%</lookup-entry>
//	    <lookup-entry>The #R# of %A% and #5R30# of %C%</lookup-entry>
//	    <lookup-entry>The %P%'s %W%</lookup-entry>
//	  </lookup-table>
//  </generator>
//
//
// <generator> -	A generator command that encloses one or more keyed lookup tables.  
// @start-xpath -	An XPath expression that points to the start point within
//					the xml document.
//
// <lookup-table> -	A lookup table wrapper that encloses one or more lookup entries.
// @key -			The character that is embedded inside a % escape sequence that 
//					uniquely identifies the table.
// <lookup-entry> -	A single lookup table entry for replacement text. May contain one
//					or more escape sequences that are replaced while processing.
//
// Replacements sections are wrapped in escape characters. Example: %...% or #...#
// The sections are key names that identify the tables to select replacement
// text.
//
// Escape sequences:
//
// %key% -	Insert a random lookup table entry for the table with the key entry. Example: %D%	
// #5R10# -	Insert a random number where the lowest possible value is 5 and the highest
//			possible value is 10.  The lower and upper bounds are optional when 
//			absent they default to random number between 10-20.
//			Examples, #R# and #5R10#	
//

function RGLookupRandomKeyEntry(dom, key) 
{
	var ret = "";

	try
	{
		var select = "//lookup-table[@key = '" + key + "']/lookup-entry";

		// count entries
		var node_count = XmlDomXPathLength(dom, select);

		//var nodes = dom.selectNodes( select );
		var nodes = XmlDomEvaluateXPath(dom, select);
		if ( null == nodes) return ret;

		// Pick a random entry
		var n = Math.floor(Math.random() * node_count);

		//var node = nodes( n );
		var node = XmlNodeAtIndex(nodes, n);

		var text = XmlNodeText(node);
		ret = new String( 0 != text.length ? text : " "  );
	}
	catch(e)
	{
		Dbg( e );
	}

	return ret;
}

function RGReplaceText( key, dom, level )
{
	var replacement = RGLookupRandomKeyEntry(dom, key);
	if( replacement.length > 0 )
		replacement = RGMakeReplacements( replacement, dom, level + 1);
	else
		throw( new error( 1, "Level " + level + ": escape sequence " + key + " not handled!"));
	
	return replacement;
}

function RGRandom( min, max )
{
	var lbound = min.length == 0 ? "10" : min;
	var ubound = max.length == 0 ? "20" : max;

	return Math.floor(Math.random() * (parseInt(ubound) - parseInt(lbound)) + parseInt(lbound));
}

function RGMakeReplacements( des, dom, level )
{
	var key = "";
	var min = "";
	var max = "";
	var index = 0;
	var mode = 0;
	var lastIndex = des.length;
	var text = "";
	
	// Recursion Ceiling
	if( level > 16 )
		return "";
	
	while( index < lastIndex )
	{
		var c = des.charAt(index);
		
		switch( mode )
		{
			default:
			case 0: // Normal
			{
				switch( c )
				{
					default:		text += c; break; // Insert Text
					case "%":		mode = 1; key = ""; break; // Replace Open
					case "#":		mode = 2; min = max = ""; break; // Random Min
				} // switch
			}; break;

			case 1: // Replace Open
			{
				switch( c )
				{
					// Insert Replace Text
					default: 	key += c; break; 
					case "%":	text += RGReplaceText(key, dom, level); mode = 0; break; // Normal
				} // switch
			}; break;

			case 2: // Random Min
			{
				switch( c )
				{
					default:	min += c; break; // Append Rand Min
					case "R": 	mode = 3; break; // Random Max
					case "#":	throw(new error(2, "# Closed before Random Max"));	
				} // switch
			}; break;
			case 3: // Random Max
			{
				switch( c )
				{
					default:	max += c; break; // Append Rand Max
					case "#":	text += RGRandom(min, max); mode = 0; break; // Insert Random Number
				} // switch
			}; break;
		} // switch mode 

		index++;
	} // while

	return text;
}


function RGGetAttribute(dom, xpath) 
{
	var ret = "";
	var node = null;

	try
	{
		var nodes = XmlDomEvaluateXPath(dom, xpath);
		if (null == nodes || 0 == nodes.length) 
			return ret;

		//var node = nodes[0];
		//node = nodes.iterateNext();
		while (node = nodes.iterateNext())
			break;
		
		ret = new String( node.value );
	}
	catch(e)
	{
		Dbg( ret );
	}

	return ret;
}


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

// the xml iterator is forward only
function XmlDomXPathLength(xmlDoc, xpath)
{
	// do a seperate select as the interator does not reset
	var nodes = XmlDomEvaluateXPath(xmlDoc, xpath);
	var i = 0;
	var node = null;
	while (node = nodes.iterateNext())
		i++;
	
	return i;
}

function XmlNodeLength(nodes)
{
	var i = 0;
	var node = null;
	while (node = nodes.iterateNext())
		i++;
	
	return i;
}

function XmlNodeAtIndex(nodes, nth)
{
	var i = 0;
	var node = null;
	for (i = 0; i < nth + 1; node = nodes.iterateNext())
		i++;
	return node;
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

function RGGenerate(dom, filepath, count, xpath_start = null)
{
	var xmlDoc = null;
	var ret = new Array();

	try
	{
		// test if xml is remote or embedded in source file
		if (-1 == dom.baseURI.indexOf(filepath))
		{
			//dom.async = false;	
			//dom.src = filepath; // XML
			xmlDoc = XmlDomLoad(filepath);
		}
		else
		{
			xmlDoc = dom;
		}

		// Get the start location
		var start = xpath_start != null 
			? xpath_start 
			: RGGetAttribute(xmlDoc, "generator/@start-xpath");
		
		var node_count = XmlDomXPathLength(xmlDoc, start);

		// loop to geneate count entries
		for (i = 0; i < count; i++)
		{
			// Pick a random entry
			//var n = Math.floor(Math.random()*nodes.length);
			var n = Math.floor(Math.random()*node_count);

			// fetch nodes, the forward iterator does not reset when we loop
			var nodes = XmlDomEvaluateXPath(xmlDoc, start);
			if (null == nodes || 0 == nodes.length) 
				return ret;

			var node = XmlNodeAtIndex(nodes, n);
			ret[i] = new String( RGMakeReplacements( XmlNodeText(node), xmlDoc, 0 ) );
		}
	}
	catch(e)
	{
		Dbg( e );
	}
	return ret;
}

///// Ending of Generator File Parsing Functions /////

// -->

