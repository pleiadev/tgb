<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/TR/WD-xsl">

<xsl:template match="/">

<html>
<head>
<title>Feats</title>
<link rel="stylesheet" type="text/css" href="dnd.css"/>
</head>
<body>
<TABLE cellSpacing="1" cellPadding="1" width="100%" border="0">
  <TR>
    <TD></TD>
    <TD><H1 align="center">Feats</H1></TD>
    <TD></TD>
  </TR>
  
  <xsl:apply-templates select="feats" />

</TABLE>
</body>
</html>
</xsl:template>

<xsl:template match="feats">
  <TR>
    <TD></TD>
    <TD>
      <UL>
      <xsl:for-each select="category/feat">
	<LI><A>
	  <xsl:attribute name="href">#<xsl:value-of select="name"/></xsl:attribute>
          <xsl:value-of select="name"/></A></LI>
      </xsl:for-each>
      </UL>
    </TD>
    <TD></TD>
  </TR>
    <TD></TD>
    <TD><HR/></TD>
    <TD></TD>
  <TR>
    <TD></TD>
    <TD>
      <TABLE cellSpacing="1" cellPadding="1" width="100%" border="0">
	<xsl:apply-templates select="category/feat" />
      </TABLE>
    </TD>
    <TD></TD>
  </TR>
</xsl:template>
 

<xsl:template match="feat">
  <TR><TD>
    <TABLE cellSpacing="1" cellPadding="1" width="100%" border="2">
    <TR>
      <TD><xsl:apply-templates select="name"/></TD>
    </TR>
    <TR>
      <TD><xsl:value-of select="description"/></TD>
    </TR>
    <TR>
      <TD><xsl:apply-templates select="prerequisites"/></TD>
    </TR>
    <TR>
      <TD>
        <xsl:apply-templates select="benefits"/>
      </TD>
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

<xsl:template match="prerequisites">
    <P><b>Prerequisites:</b> <xsl:value-of /></P>
        <xsl:apply-templates/>
</xsl:template>

<xsl:template match="benefits">
    <P><b>Benefits:</b> <xsl:value-of /></P>
        <xsl:apply-templates/>
</xsl:template>

</xsl:stylesheet>
