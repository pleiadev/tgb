<!--

Copyright (c) 2002 Michael Lambert

Module:		html.xsl

Abstract: 	This file is an xsl stylsheet that wraps individual simple 
		xhtml files to form a web site. It links documents according
		to information specified a configuration file and strips
		settings that interfeer with the stylesheet it inserts.

Setting:	This stylesheet has the following parameters.

		file = 		name of the current file being processed.

		nav-map =	path to the navigation configuration file. 
				Defaulted to use html.xml in the current 
				directory.

		location-js =	path to use for this pages javascript library. 
				Defaulted to the iamfc.js library.
		location-css =	path to use for this pages stylesheet.
				Defaulted to the iamfc.js common stylesheet.
		
-->
<xsl:stylesheet version="1.0" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xhtml="http://www.w3.org/1999/xhtml">
<xsl:output method="xml" omit-xml-declaration="yes" encoding="ascii" />
<xsl:param name="file" />
<xsl:param name="nav-map" select="'html.xml'"/>
<xsl:param name="root-path" select="'../'" />
<xsl:param name="location-js" select="'lib/dnd.js'" />
<xsl:param name="location-css" select="'lib/dnd.css'" />

<!--
Notes:	This stylesheet expects a valid xml input file in the XHTML format 
	but not in the XHTML namespace. Meaning that the namespace element
	xmlns:xhtml="http://www.w3.org/1999/xhtml" has been stripped 
	out of the document.  
	
	* HTML Tidy originally inserted the XHTML namespace after we did 
	the conversion to an XML format.  This was causing strange problems 
	between some of the stylesheets and at the time we couldn't 
	guarantee wheter any particular input sheet would be in the default 
	blank namespace or the xhtml one. 

	In the beginning of the xsl stylesheet processing we use
	sed to remove the name space from the input document.  This allows
	us to write matches in the unprefix form. If at some point our 
	process improved we could always add the XHTML namespace into the 
	stylesheets like so "xmlns:="http://www.w3.org/1999/xhtml".
	
	* The copy routines don't pick up text unless it is embedded within
	an element. The following text get dropped:

	<p style="font-weight: bold">The Text Delimited by xxx is Dropped</p>
	xxx This text is drop from the file by mistake. Make sure all text
	is wrapped within elements xxx
	<p>Some other text</p>

	* This file was orginally three files that we were able to combine
	into one stylesheet. If there are problems with debugging this 
	style sheet in the future it could always be broken out into
	separate sheets. The templates used in the original sheets were
	delimitted with ++++++++++ rows.  The parameters are used mainly
	by the last template set; although, when the sheets were separate
	the $file parameter was inserted into the output stream of the
	second sheet for use by the third sheet.
	
-->

<!--
Note:	This part of the stylesheet relies on an external file that defines 
	the global navigation map for the web site. It is a xml document
	that identifes the links for each page in the web site. It has the 
	following structure:

	Module: html.xml

	Abstract:	This the global navigation file for the site. It maps 
			out the navigation bar links for each page.

	Tags:
		<navigation> - This is the root tag for the web site's navigation
		settings.

		<global> - This is an element that will appear in every page on 
		the site. Typically used for top level pages which define the web 
		site's categories. Examples: Products, Contact, and Links.

		<navbar> - This element corresponds to subpages in the site. 
		Typically they correspond to a particular category and appear 
		embedded within	a <global> tag. Examples: Product A, Product B, 
		and Product C.

	Attributes:

		@name - Display name for the navbar category. It appears on the 
		navigation bar in the page. Example: Contacts
        
		@link - Hyperlink setting for the navbar category. It is embedded
		in a hyperlink attribute.

		@file - File name of the web page that is owned by this element.

	Example:
	
		<navigation>
		  <global name="Objectives" link="objectives.htm" file="objectives" />
		  <global name="Leadership" link="leadership.htm" file="leadership">
		    <navbar name="Officers" link="officers.htm" file="officers" />
		    <navbar name="Committees" link="committees.htm" file="committees" />
		  </global>
		</navigation>

-->


<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->


<!--
Template:	This template is responsible for copy all elements nodes
			to the output stream.  It provides for fine grain copying 
			of all the elements in the input stream.  xsl:copy does 
			not copy attribute by default so we manually invoke the 
			copy of all element.  xsl:copy-of is a deep copy of all 
			elements but does not provide enough control over what 
			is copied. 

Elements:	All element and attribute nodes
-->
<xsl:template match="*|@*|text()">
	<xsl:copy>
		<xsl:apply-templates select="@* | * | text() | processing-instruction()" /> 
	</xsl:copy>
</xsl:template>


<!-- 
Template:	This set of templates remove bgcolor attributes from elements 
		so CSS values are not overridden locally. Apply background 
		color settings through an elements CLASS attribute in the 
		style sheet (iamfc.css).

Elements:	BGCOLOR attribute on BODY, TABLE, TD, TR, TH
-->
<xsl:template match="xhtml:body/@bgcolor | body/@bgcolor" />
<xsl:template match="xhtml:table/@bgcolor | table/@bgcolor" />
<xsl:template match="xhtml:td/@bgcolor | td/@bgcolor" />
<xsl:template match="xhtml:tr/@bgcolor | tr/@bgcolor" />
<xsl:template match="xhtml:th/@bgcolor | th/@bgcolor" />


<!-- 
Template:	This set of templates remove link, vlink attributes from 
		elements so CSS values are not overridden locally. Apply 
		hyperlink color settings through the style sheet (iamfc.css).

Elements:	LINK, VLINK attributes on BODY
-->
<xsl:template match="xhtml:body/@link | body/@link" />
<xsl:template match="xhtml:body/@vlink | body/@vlink" />


<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->


<!--
Template:	This template is responsible for setting up the HTML wrapper tags for 
		the page.  The first part of the job is accomplish by setting up 
		the HTML header section. The TITLE and META tags from the input 
		document are copied into the output stream.  The global css 
		stylesheet (LINK) and navbar javascript library (SCRIPT) tags
		are setup. The second part of the just is accomplished by 
		selecting the BODY tag and applying the remaining stylesheet
		templates.

Elements:	HTML element
-->
<xsl:template match="xhtml:html | html">
<html> 
<head>
<xsl:apply-templates select="head/meta | head/title"/>

<link rel="stylesheet" type="text/css">
	<xsl:attribute name="href"> 
		<xsl:value-of select="$root-path"/> 
		<xsl:value-of select="$location-css" /> 
	</xsl:attribute>
</link>
<script language="JavaScript" type="text/javascript">
	<xsl:attribute name="src"> 
		<xsl:value-of select="$root-path"/>
		<xsl:value-of select="$location-js" /> 
	</xsl:attribute>
	<xsl:text> </xsl:text>
</script>

</head>

<xsl:apply-templates select="body" />

</html>
</xsl:template>


<!--
Template:	This template does a simple xsl:copy-of to copy an entire
		meta tag into the output stream. 

Elements:	META element
-->
<xsl:template match="xhtml:meta | meta">
	<xsl:copy-of select="."/>
</xsl:template>


<!--
Template:	This template copies the input page title into the output
		stream. We could alter it to include a global and page 
		specific portion at some point.

Elements:	TITLE element
-->
<xsl:template match="xhtml:title | title">
<!-- title>The International Association of Marriage and Family Counselors</title -->
<title>
	<xsl:value-of select="." />
</title>
</xsl:template> 


<!--
Template:	This template sets up the main table used in all the web sites
		pages.  It includes things like framing, copywrite information, 
		and the web page header, inserts the nav-bar left hand navigation
		code, and copies the input body text into the output stream.

		The navbar stylesheet will manage the setup of the web site
		navigation bars.  It requires a hint for the page it is 
		processing.  The xslt processor is passed the file parameter
		from the command line as we process a file. The $file parameter
		has global scope and is declared at the top of the sheet.

		Parameters: $file (global)

		The page's main content is copied from the input stream using
		the nav-bar-insert-marker.
	
Elements:	BODY element
Parameters:	$file (global)
-->
<xsl:template match="xhtml:body | body">
<body>

<!-- Begin Main Table Content -->
<table border="0" cellpadding="2" cellspacing="0" height="100%" onmousedown="DepressButton();" onmouseover="RaiseButton();" onmouseup="RaiseButton();">

<!-- Begin 1st Row: Header -->
<tr valign="top">
<td width="25%" />

<td width="60%">

<!-- Header Begin -->
<table border="0" cellpadding="0" cellspacing="0" valign="top">
<tr align="right" class="IAMFCDivision"> <td>
	<h1 align="center">3rd Edition Dungeons &amp; Dragons</h1>
</td> </tr>
</table>
<!-- Header End -->

</td>
<td width="15%" />
</tr>
<!-- End 1st Row -->

<!-- Begin 2nd Row: Page Content -->
<tr valign="top" height="90%">

<!-- NavBar Cell -->
<td width="25%">
	<xsl:call-template name="nav-bar-insert-marker"/>
</td>

<!-- Main Content Cell -->
<td width="60%">
<!-- main-content-begin -->
<xsl:copy-of select="./*"/>
<!-- main-content-end -->

</td>

<td width="15%" />
</tr>
<!-- End 2nd Row -->


<!-- Begin 3rd Row: Footer -->
<tr valign="top">
<td width="25%" />

<td width="60%">
	<p style="text-align: center">Copyright &#169; 2001-2002 Michael Lambert. All rights reserved.</p>
</td>

<td width="15%" />
</tr>
<!-- End 3rd Row -->

</table>
<!-- End Main Table Content -->

</body>
</xsl:template>


<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->


<!--
Template:	This template matches against the insert point for the left hand
		navigation pane in the input web page.  It proceeds to insert
		all the navigation marks for this page in the web site. It does
		this by opening the global navigation map specified in the 
		parameter $nav-map (default html.xml), selecting all global 
		navigation elements, and apply the remaining stylesheet
		templates.  The remaining templates are called with the file 
		parameter specified in nav-bar-insert-marker/@file attribute. 

Elements:	None
Parameters:	$nav-map (global), $file (global)
-->
<xsl:template name="nav-bar-insert-marker">
	<P>
		<xsl:apply-templates select="document($nav-map)/navigation/global">
			<xsl:with-param name="filename" select="$file"/>
		</xsl:apply-templates>
	</P>
</xsl:template>


<!--
Template:	This template handles all global tags for a particular web
		page. It handles calling the left-hand-nav-bar template 
		with the appropriate parameters for a particular global
		element. It test to see if a particular global element 
		is the current file under processing, contains the current
		file being processed, or is just a global file for which a
		button is needed. It calls the left-hand-nav-bar template
		with the require parameters in each case.

Elements:	GLOBAL element in the html.xml file or file specified 
		by $nav-map global parameter.
Parameters:	$file (global), $filename
-->
<xsl:template match="global">
<xsl:param name="filename" />
	<xsl:choose>
		<xsl:when test="@file=$filename">
			<xsl:call-template name="left-hand-nav-bar">
				<xsl:with-param name="link" select="@link"/>
				<xsl:with-param name="category" select="@name"/>
				<xsl:with-param name="button" select="'appNavChosen'"/>
				<xsl:with-param name="class" select="'appNavChosen'"/>
			</xsl:call-template>
			<xsl:apply-templates select="navbar">
				<xsl:with-param name="filename" select="$filename"/>
			</xsl:apply-templates>	
		</xsl:when>
		<xsl:when test="navbar[@file=$filename]">
			<xsl:call-template name="left-hand-nav-bar">
				<xsl:with-param name="link" select="@link"/>
				<xsl:with-param name="category" select="@name"/>
			</xsl:call-template>
			<xsl:apply-templates select="navbar">
				<xsl:with-param name="filename" select="$filename"/>
			</xsl:apply-templates>
		</xsl:when>
	<xsl:otherwise>
		<xsl:call-template name="left-hand-nav-bar">
			<xsl:with-param name="link" select="@link"/>
			<xsl:with-param name="category" select="@name"/>
		</xsl:call-template>
	</xsl:otherwise>
	</xsl:choose>
</xsl:template>


<!--
Template:	This template handles all navbar tags for a particular web
		page. It handles calling the left-hand-nav-bar template 
		with the appropriate parameters for a particular navbar
		element. It test to see if a particular navbar element 
		is the current file under processing, contains the current
		file being processed, or is just a navbar file for which a
		button is needed. It calls the left-hand-nav-bar template
		with the require parameters in each case. 
		
		Currently, it test if a navbar element contains embedded 
		navbar elements	but does not do any processing. It is possible
		that at some point in the future the left navigation bar 
		could be more complex and show multiple levels of indention.
		In the meantime the indention style attribute is just hard 
		coded.

Elements:	NAVBAR element in the html.xml file or file specified 
		by $nav-map global parameter.
Parameters:	filename
-->
<xsl:template match="navbar">
<xsl:param name="filename" />
	<xsl:choose>
		<xsl:when test="@file=$filename">
			<xsl:call-template name="left-hand-nav-bar">
				<xsl:with-param name="link" select="@link"/>
				<xsl:with-param name="category" select="@name"/>
				<xsl:with-param name="button" select="'appNavChosen'"/>
				<xsl:with-param name="class" select="'appNavChosen'"/>
				<xsl:with-param name="style" select="'padding-left: 25px;font-weight: normal;'"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:when test="navbar[@file=$filename]">
			This navbar node is not currently used.
		</xsl:when>
	<xsl:otherwise>
		<xsl:call-template name="left-hand-nav-bar">
			<xsl:with-param name="link" select="@link"/>
			<xsl:with-param name="category" select="@name"/>
			<xsl:with-param name="style" select="'padding-left: 25px;font-weight: normal;'"/>
		</xsl:call-template>
	</xsl:otherwise>
	</xsl:choose>
</xsl:template>


<!--
Template:	This template handles writing the hypertext for a particular
		navigation pane element. It takes a number of a parameters
		so that it can be used for both the global and navbar tags.

Elements:	None
-->
<xsl:template name="left-hand-nav-bar">
<xsl:param name="link" />
<xsl:param name="category"/>
<xsl:param name="button" select="'appNav'"/>
<xsl:param name="class" select="'appNavOff'"/>
<xsl:param name="style" select="''"/>
	<A>
		<xsl:attribute name="href">
			<xsl:value-of select="$link"/>
		</xsl:attribute>
	<DIV>
		<xsl:attribute name="buttontype">
			<xsl:value-of select="$button"/>
		</xsl:attribute>
		<xsl:attribute name="CLASS">
			<xsl:value-of select="$class"/>
		</xsl:attribute>
		<xsl:if test="string-length($style) &gt; 0">
			<xsl:attribute name="STYLE">
				<xsl:value-of select="$style"/>
			</xsl:attribute>
		</xsl:if>
		<xsl:value-of select="$category" />
	</DIV>
	</A>
</xsl:template>


<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->


</xsl:stylesheet>
