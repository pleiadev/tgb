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
		if( dom.parseError.errorCode )
		{
			Msg( "(" + dom.parseError.Line + ") Error = " + dom.parseError.errorCode + " : " + dom.parseError.reason );
		}

		var select = "//lookup-table[@key = '" + key + "']/lookup-entry";

		var nodes = dom.selectNodes( select );
		if( nodes == null ) return ret;

		// Pick a random entry
		var n = Math.floor(Math.random()*nodes.length);
		var node = nodes( n );

		ret = new String( node.text.length != 0 ? node.text : " "  );
	}
	catch(e)
	{
		if( e.number != 0 )
		{
			ret = "Error: " + e.number;
			ret += ", was generated by " + e.source;
			ret += String.fromCharCode(13);
			ret += " Description: " + e.description;
			Msg( ret );
		}
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

	try
	{
		var nodes = dom.selectNodes( xpath );
		if( nodes == null || nodes.length == 0) return ret;

		var node = nodes( 0 );
		ret = new String( node.value );
	}
	catch(e)
	{
		if( e.number != 0 )
		{
			ret = "Error: " + e.number;
			ret += ", was generated by " + e.source;
			ret += String.fromCharCode(13);
			ret += " Description: " + e.description;
			Msg( ret );
		}
	}

	return ret;
}


function RGGenerate(dom, filepath, count, xpath_start)
{
	var ret = new Array();

//	try
//	{
		if(dom.url.indexOf(filepath) == -1)
		{
			dom.async = false;	
			dom.src = filepath; // XML
		}

		if( dom.parseError.errorCode )
		{
			Msg( "(" + dom.parseError.Line + ") Error = " + dom.parseError.errorCode + " : " + dom.parseError.reason );
		}
	
		// Get the start location
		var start = xpath_start != null 
			? xpath_start 
			: RGGetAttribute(dom, "generator/@start-xpath");

		var nodes = dom.selectNodes( start );
		if( nodes == null || nodes.length == 0) return ret;

		for( i=0; i<count; i++)
		{
			// Pick a random entry
			var n = Math.floor(Math.random()*nodes.length);
			var node = nodes( n );
			ret[i] = new String( RGMakeReplacements( node.text, dom, 0 ) );
		}
/*		
	}
	catch(e)
	{
		if( e.number != 0 )
		{
			ret = "Error: " + e.number;
			ret += ", was generated by " + e.source;
			ret += String.fromCharCode(13);
			ret += " Description: " + e.description;
			Msg( ret );
		}
	}
*/
	return ret;
}

///// Ending of Generator File Parsing Functions /////

// -->
