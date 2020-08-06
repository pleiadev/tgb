<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/TR/WD-xsl">

<xsl:template match="/">

<html>
<head>
<title>Sage Advice #<xsl:value-of select="/sage/@issue"/></title>
<link rel="stylesheet" type="text/css" href="dnd.css"/>
</head>
<body>
<TABLE cellSpacing="1" cellPadding="1" width="100%" border="0">
  <TR>
    <TD></TD>
    <TD><H1 align="center">Sage Advice #<xsl:value-of select="/sage/@issue"/> </H1></TD>
    <TD></TD>
  </TR>
  
  <xsl:apply-templates select="sage" />

</TABLE>
</body>
</html>
</xsl:template>

<xsl:template match="sage">
<!--
  <TR>
    <TD></TD>
    <TD>
      <UL>
      <xsl:for-each select="sage-advice">
	<LI><A>
	  <xsl:attribute name="href">#Question</xsl:attribute>
          Question</A></LI>
      </xsl:for-each>
      </UL>
    </TD>
    <TD></TD>
  </TR>
-->
    <TD></TD>
    <TD><HR/></TD>
    <TD></TD>
  <TR>
    <TD></TD>
    <TD>
      <TABLE cellSpacing="1" cellPadding="1" width="100%" border="0">
	<xsl:apply-templates select="sage-advice" />
      </TABLE>
    </TD>
    <TD></TD>
  </TR>
</xsl:template>
 

<xsl:template match="sage-advice">
  <TR><TD>
    <TABLE cellSpacing="1" cellPadding="1" width="100%" border="2">
    <TR>
      <TD><xsl:apply-templates select="name"/></TD>
    </TR>
    <TR>
      <TD><xsl:apply-templates select="question"/></TD>
    </TR>
    <TR>
      <TD><xsl:apply-templates select="answer"/></TD>
    </TR>
   </TABLE>
  </TD></TR>
</xsl:template>

<xsl:template match="name">
    <h4>
       <a><xsl:attribute name="name"><xsl:value-of/></xsl:attribute><xsl:value-of/></a>
    [<xsl:value-of select="../../@name"/>]
    </h4>

        <xsl:apply-templates/>
</xsl:template>

<xsl:template match="question">
    <b>Question:</b> <xsl:apply-templates/>
    
</xsl:template>

<xsl:template match="answer">
    <b>Answer:</b> <xsl:apply-templates/>
    
</xsl:template>

<xsl:template match="p | P">
    <P><xsl:value-of /></P>
</xsl:template>

</xsl:stylesheet>
