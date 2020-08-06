

function encode( filepath )
{
// Sample encoder
// Obviously this code could do with some error trapping etc
// but it should give you the basics to get started

	var ForReading = 1, ForWriting = 2;

	var fso = new ActiveXObject("Scripting.FileSystemObject");

	if( fso.FileExists( filepath ) == false )
	{
		if( g_debug_script ) WScript.Echo("File " + filepath + " not found.");
		WScript.Quit();
	}

	var file = fso.OpenTextFile(filepath, ForReading);
	var text = file.ReadAll();

	// Create a new instance of the scripting.encoder object
	var myEncoder = new ActiveXObject("Scripting.Encoder");
	
	// Call the encodescriptfile method with the HTML
    var encoded_text = myEncoder.EncodeScriptFile(".js", text, 0, "");

	// Set the documentHTML to be the return HTML with encoded script
	var efilepath = fso.GetBaseName(filepath) + ".e" + fso.GetExtensionName(filepath);
	var encoded_file = fso.CreateTextFile(efilepath, true);
	// <SCRIPT LANGUAGE="JavaScript" SRC="roomfurnishings.ejs" TYPE="text/jscript.encode"></SCRIPT>

	// encoded_file.Write("<SCRIPT LANGUAGE=\"JScript.Encode\">");
	encoded_file.Write( encoded_text );
	// encoded_file.Write("</SCRIPT>");
	encoded_file.Close();

	// We're done!
}

function main()
{
	var args = WScript.Arguments;
	encode( args(0) );
}

main();
