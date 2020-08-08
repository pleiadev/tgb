<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/TR/WD-xsl">
	<xsl:template match="/">
		<font face="Verdana" size="2">
			<xsl:apply-templates select="pc"/>
		</font>
	</xsl:template>
	
	<xsl:template match="pc">
		<table cellpadding="0" cellspacing="4" border="0" width="650">
			<tr>
				<td colspan="4"><font face="Verdana"  style="font-size:8pt"><xsl:value-of select="name"/></font></td>
				<td colspan="4"><font face="Verdana"  style="font-size:8pt"><xsl:value-of select="player"/></font></td>
				<td rowspan="6" align="center" width="1%"><font face="Verdana"  style="font-size:10pt"><img width="240" src="DND_R_DND.gif" alt=""/><br/><b>CHARACTER RECORD SHEETS</b></font></td>
			</tr>
			<tr>
				<td colspan="4" style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"  style="font-size:6pt">CHARACTER NAME</font></td>
				<td colspan="4" style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">PLAYER</font></td>
			</tr>
			<tr>
				<td colspan="2"><font face="Verdana" style="font-size:8pt"><xsl:apply-templates select="classes"/></font></td>
				<td colspan="2"><font face="Verdana" style="font-size:8pt"><xsl:value-of select="race"/></font></td>
				<td colspan="2"><font face="Verdana" style="font-size:8pt"><xsl:value-of select="alignment"/></font></td>
				<td colspan="2"><font face="Verdana" style="font-size:8pt"><xsl:value-of select="deity"/></font></td>
			</tr>
			<tr>
				<td colspan="2" style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">CLASS</font></td>
				<td colspan="2" style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">RACE</font></td>
				<td colspan="2" style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">ALIGNMENT</font></td>
				<td colspan="2" style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">DEITY</font></td>
			</tr>
			<tr>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="classes/@totallevel" mode="" /></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="size/@category"/></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="age"/></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="gender"/></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="size/@height"/></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="size/@weight"/></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="eyes"/></font></td>
				<td><font face="Verdana" style="font-size:8pt"><xsl:value-of select="hair"/></font></td>
			</tr>
			<tr>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">LEVEL</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">SIZE</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">AGE</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">GENDER</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">HEIGHT</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">WEIGHT</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">EYES</font></td>
				<td style="border-top-width:1px; border-top: 1pt solid black"><font face="Verdana"   style="font-size:6pt">HAIR</font></td>
			</tr>
		</table>
		
		<table border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td rowspan="2" valign="top">
				<xsl:apply-templates select="abilities"/>
				</td>
				<td colspan="2" valign="top">
				<xsl:apply-templates select="hp"/>
				<xsl:apply-templates select="ac"/></td>
			</tr>
			<tr>
				<td valign="top">
				<xsl:apply-templates select="initiative"/>
				<table>
					<tr>
						<td align="center" bgcolor="black"><font face="Arial" style="font-size:9pt" color="white"><b>BASE ATTACK</b></font><font face="Arial" style="font-size:5pt" color="white"><br/>Bonus</font></td>
						<td align="center" width="94" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:for-each select="attacks/baseattack">+<xsl:value-of select="@base"/><xsl:choose><xsl:when test="context()[end()]"></xsl:when><xsl:otherwise>/</xsl:otherwise></xsl:choose></xsl:for-each></b></font></td>
					</tr>
				</table>
				</td>
				<td rowspan="2" valign="top"><xsl:apply-templates select="skills"/></td>
			</tr>
			<tr>
				<td colspan="2" valign="top">
				<xsl:apply-templates select="savingthrows"/>
				<xsl:apply-templates select="attacks" mode="calculations"/>				
				<xsl:apply-templates select="ac/armor"/>				
				<xsl:apply-templates select="ac/shield"/>
				
				<!-- Ammo Table -->
				<font face="Arial" style="font-size:8pt"><center><b>AMMUNITION</b></center></font>
				<table>
					<tr>
						<td width="100" style="border-bottom-width:1px; border-bottom: 1pt solid black"><br/></td>
						<td valign="bottom"><font face="Wingdings" style="font-size: 5pt">ooooo ooooo<br/>ooooo ooooo</font></td>
						<td width="100" style="border-bottom-width:1px; border-bottom: 1pt solid black"><br/></td>
						<td valign="bottom"><font face="Wingdings" style="font-size: 5pt">ooooo ooooo<br/>ooooo ooooo</font></td>
					</tr>
					<tr>
						<td width="100" style="border-bottom-width:1px; border-bottom: 1pt solid black"><br/></td>
						<td valign="bottom"><font face="Wingdings" style="font-size: 5pt">ooooo ooooo<br/>ooooo ooooo</font></td>
						<td width="100" style="border-bottom-width:1px; border-bottom: 1pt solid black"><br/></td>
						<td valign="bottom"><font face="Wingdings" style="font-size: 5pt">ooooo ooooo<br/>ooooo ooooo</font></td>
					</tr>
				</table>
				
				
				
				</td>
							</tr>
		</table>
		<!--<br style="page-break-after: always"/>-->
	</xsl:template>
	
	<xsl:template match="classes">
		<xsl:for-each select="class"><xsl:value-of select="@abbr"/><xsl:value-of select="@level"/><xsl:choose><xsl:when test="context()[end()]"></xsl:when><xsl:otherwise>/</xsl:otherwise></xsl:choose></xsl:for-each>
	</xsl:template>

	<xsl:template match="abilities">
		<table>
			<tr>
				<td align="center" width="20%"><font face="Arial" style="font-size: 4pt">ABILITY<br/>NAME</font></td>
				<td align="center" width="20%"><font face="Arial" style="font-size: 4pt">ABILITY<br/>SCORE</font></td>
				<td align="center" width="20%"><font face="Arial" style="font-size: 4pt">ABILITY<br/>MODIFIER</font></td>
				<td align="center" width="20%"><font face="Arial" style="font-size: 4pt">TEMPORARY<br/>SCORE</font></td>
				<td align="center" width="20%"><font face="Arial" style="font-size: 4pt">TEMPORARY<br/>MODIFIER</font></td>
			</tr>
		
		<xsl:for-each select="stat">
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:10pt" color="white"><b><xsl:value-of select="@abbr"/></b></font><font face="Arial" style="font-size:5pt" color="white"><br/><xsl:value-of select="@name"/></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@base"/></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@mod"/></b></font></td>
				<td align="center" style="border: 5px solid lightgray"><font face="Arial" style="font-size: 5pt"><br/></font></td>
				<td align="center" style="border: 5px solid lightgray"><font face="Arial" style="font-size: 5pt"><br/></font></td>
			</tr>
		</xsl:for-each>
		</table>
	</xsl:template>
	
	<xsl:template match="stat" mode="mod">
		<xsl:value-of select="@mod"/>
	</xsl:template>
	
	<xsl:template match="hp">
		<table>
			<tr>
				<td align="center" width="50"><font face="Arial" style="font-size: 7pt"></font></td>
				<td align="center" width="25" valign="bottom"><font face="Arial" style="font-size: 7pt">TOTAL</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				
				<td align="center" width="119"><font face="Arial" style="font-size: 5pt"><br/>WOUNDS/CURRENT HP</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="119"><font face="Arial" style="font-size: 5pt"><br/>SUBDUAL DAMAGE</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="60"><font face="Arial" style="font-size: 5pt"><br/>DAMAGE<br/>REDUCTION</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="60"><font face="Arial" style="font-size: 5pt"><br/>SPEED</font></td>
			</tr>
		
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:9pt" color="white"><b>HP</b></font><font face="Arial" style="font-size:5pt" color="white"><br/>Hit Points</font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="@total"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b><br/></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b><br/></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b><br/></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//damagereduction"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b><br/></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//speed"/><br/></b></font></td>
			</tr>
		</table>
	</xsl:template>
	
	<xsl:template match="ac">
		<table>
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:9pt" color="white"><b>AC</b></font><font face="Arial" style="font-size:5pt" color="white"><br/>Armour Class</font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="."/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>=</b></font></td>
				<td align="center" style="border: 0px solid black"><font face="Arial" style="font-size: 9pt"><b>10</b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="armor/@bonus"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="shield/@bonus"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:apply-templates select="//abilities/stat[@name='Dexterity']" mode="mod"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//size/@acmodifier"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="@natural"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="@misc"/><br/></b></font></td>
				<td align="center" width="5"><font face="Arial" style="font-size: 7pt"><b> </b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//misschance"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//arcanespellfailure"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//armorcheckpenalty"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 9pt"><b><xsl:value-of select="//spellresistance"/><br/></b></font></td>
			</tr>
			<tr>
				<td align="center" width="50"><font face="Arial" style="font-size: 6pt"></font></td>
				<td align="center" width="25" valign="top"><font face="Arial" style="font-size: 6pt">TOTAL</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				
				<td align="center" width="15"><font face="Arial" style="font-size: 4pt"></font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">ARMOR<br/>BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">SHIELD<br/>BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">DEX<br/>BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">SIZE<br/>BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">NATURAL<br/>ARMOR</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">MISC<br/>BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">MISS<br/>CHANCE</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">ARCANE<br/>FAILURE</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">ARMOR<br/>CHECK</font></td>
				<td align="center"><font face="Arial" style="font-size: 6pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">SPELL<br/>RESIST.</font></td>
			</tr>
		
		</table>
	</xsl:template>
	
	<xsl:template match="initiative">
		<table>
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:9pt" color="white"><b>INITIATIVE</b></font><font face="Arial" style="font-size:5pt" color="white"><br/>Modifier</font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="."/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>=</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:apply-templates select="//abilities/stat[@name='Dexterity']" mode="mod"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@misc"/></b></font></td>
			</tr>
			<tr>
				<td align="center" width="50"><font face="Arial" style="font-size: 7pt"></font></td>
				<td align="center" width="25" valign="top"><font face="Arial" style="font-size: 7pt">TOTAL</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 5pt">DEX<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 5pt">MISC<br/>MODIFIER</font></td>
			</tr>
		
		</table>
	</xsl:template>

	<xsl:template match="savingthrows">
		<table>
			<tr>
				<td align="center"><font face="Arial" style="font-size: 4pt">SAVING THROWS</font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">TOTAL</font></td>
				<td align="center"><font face="Arial" style="font-size: 4pt"><b></b></font></td>
				
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">BASE<br/>SAVE</font></td>
				<td align="center"><font face="Arial" style="font-size: 5pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">ABILITY<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 5pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">MAGIC<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">MISC<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">TEMPORARY<br/>MODIFIER</font></td>
				<td align="left" valign="top" width="63" rowspan="4" style="border: 1px solid black"><font face="Arial" style="font-size: 4pt">CONDITIONAL<br/>MODIFIERS</font></td>
			</tr>
		
		<xsl:for-each select="savingthrow">
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:10pt" color="white"><b><xsl:value-of select="@name"/></b></font><font face="Arial" style="font-size:5pt" color="white"><br/><xsl:value-of select="@stat"/></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><br/></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>=</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@base"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:apply-templates select="//abilities/stat[@name=context()/@stat]" mode="mod"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@magmod"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@miscmod"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 5px solid lightgray"><font face="Arial" style="font-size: 5pt"><br/></font></td>
			</tr>
		</xsl:for-each>
		</table>
		
	</xsl:template>
	
	<xsl:template match="attacks" mode="calculations">
		<table>
			<tr>
				<td align="center"><font face="Arial" style="font-size: 4pt"></font></td>
				<td align="center" width="60"><font face="Arial" style="font-size: 4pt">TOTAL</font></td>
				<td align="center"><font face="Arial" style="font-size: 4pt"><b></b></font></td>
				
				<td align="center" width="60"><font face="Arial" style="font-size: 4pt">BASE ATTACK BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 5pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">STR<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 5pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">SIZE<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">MISC<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">TEMPORARY<br/>MODIFIER</font></td>
			</tr>
		
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:10pt" color="white"><b>MELEE</b></font><font face="Arial" style="font-size:5pt" color="white"><br/>ATTACK BONUS</font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><br/></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>=</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:for-each select="baseattack">+<xsl:value-of select="@base"/><xsl:choose><xsl:when test="context()[end()]"></xsl:when><xsl:otherwise>/</xsl:otherwise></xsl:choose></xsl:for-each></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:apply-templates select="//abilities/stat[@name='Strength']" mode="mod"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@sizemodifier"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@miscmod"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 5px solid lightgray"><font face="Arial" style="font-size: 5pt"><br/></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="black"><font face="Arial" style="font-size:10pt" color="white"><b>RANGED</b></font><font face="Arial" style="font-size:5pt" color="white"><br/>ATTACK BONUS</font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><br/></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>=</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:for-each select="baseattack">+<xsl:value-of select="@base"/><xsl:choose><xsl:when test="context()[end()]"></xsl:when><xsl:otherwise>/</xsl:otherwise></xsl:choose></xsl:for-each></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:apply-templates select="//abilities/stat[@name='Dexterity']" mode="mod"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@sizemodifier"/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 1px solid black"><font face="Arial" style="font-size: 10pt"><b><xsl:value-of select="@miscmod"/><br/></b></font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b>+</b></font></td>
				<td align="center" style="border: 5px solid lightgray"><font face="Arial" style="font-size: 5pt"><br/></font></td>
			</tr>
			<tr>
				<td align="center"><font face="Arial" style="font-size: 4pt"></font></td>
				<td align="center" width="60"><font face="Arial" style="font-size: 4pt">TOTAL</font></td>
				<td align="center"><font face="Arial" style="font-size: 4pt"><b></b></font></td>
				
				<td align="center" width="60"><font face="Arial" style="font-size: 4pt">BASE ATTACK BONUS</font></td>
				<td align="center"><font face="Arial" style="font-size: 5pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">DEX<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 5pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">SIZE<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">MISC<br/>MODIFIER</font></td>
				<td align="center"><font face="Arial" style="font-size: 7pt"><b></b></font></td>
				<td align="center" width="25"><font face="Arial" style="font-size: 4pt">TEMPORARY<br/>MODIFIER</font></td>
			</tr>
		</table>
		
		<xsl:apply-templates select="weapon[index() &lt; 3]"/>		
	</xsl:template>
	
	<xsl:template match="weapon">
		<table cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td align="center" height="25" bgcolor="black" rowspan="2" width="125"><font face="Arial" style="font-size:10pt" color="white"><b>WEAPON</b></font></td>
				<td bgcolor="white" height="10"><font face="Arial" style="font-size:10pt" color="white"></font></td>
				<td bgcolor="white" height="10"><font face="Arial" style="font-size:10pt" color="white"></font></td>
				<td bgcolor="white" height="10"><font face="Arial" style="font-size:10pt" color="white"></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="black" width="110" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>TOTAL ATTACK BONUS</b></font></td>
				<td align="center" bgcolor="black" width="60" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>DAMAGE</b></font></td>
				<td align="center" bgcolor="black" width="60" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>CRITICAL</b></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="white" rowspan="2" width="125" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@name"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@damage"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@critical"/><br/></b></font></td>
			</tr>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" width="357">
			<tr>
				<td align="center" height="15" bgcolor="black" width="40"><font face="Arial" style="font-size:6pt" color="white"><b>RANGE</b></font></td>
			<td align="center" bgcolor="black" width="40" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>WEIGHT</b></font></td>
				<td align="center" bgcolor="black" width="60" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>TYPE</b></font></td>
				<td align="center" bgcolor="black" width="40" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>SIZE</b></font></td>
				<td align="center" bgcolor="black" width="177" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>SPECIAL PROPERTIES</b></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@range"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@weight"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@type"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@size"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@special"/><br/></b></font></td>
			</tr>
		</table><br/>
	</xsl:template>
	
	<xsl:template match="armor">
		<table cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td align="center" height="20" bgcolor="black" rowspan="2" width="125"><font face="Arial" style="font-size:7pt" color="white"><b>ARMOR/PROTECTIVE ITEM</b></font></td>
				<td bgcolor="white" height="5"><font face="Arial" style="font-size:10pt" color="white"></font></td>
				<td bgcolor="white" height="5"><font face="Arial" style="font-size:10pt" color="white"></font></td>
				<td bgcolor="white" height="5"><font face="Arial" style="font-size:10pt" color="white"></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="black" width="60" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>TYPE</b></font></td>
				<td align="center" bgcolor="black" width="85" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>ARMOR BONUS</b></font></td>
				<td align="center" bgcolor="black" width="85" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>MAX DEX BONUS</b></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="white" rowspan="2" width="125" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@name"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@type"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@bonus"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@maxdex"/><br/></b></font></td>
			</tr>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" width="357">
			<tr>
				<td align="center" height="15" bgcolor="black" width="60"><font face="Arial" style="font-size:5pt" color="white"><b>CHECK PENALTY</b></font></td>
			<td align="center" bgcolor="black" width="60" height="15"><font face="Arial" style="font-size:5pt" color="white"><b>SPELL FAILURE</b></font></td>
				<td align="center" bgcolor="black" width="40" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>SPEED</b></font></td>
				<td align="center" bgcolor="black" width="40" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>WEIGHT</b></font></td>
				<td align="center" bgcolor="black" width="157" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>SPECIAL PROPERTIES</b></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@checkpenalty"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@spellfailure"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@speed"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@weight"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@special"/><br/></b></font></td>
			</tr>
		</table><br/>
	</xsl:template>
	
	<xsl:template match="shield">
		<table cellpadding="0" cellspacing="0" border="0" width="357">
			<tr>
				<td align="center" height="20" bgcolor="black" rowspan="2" width="125"><font face="Arial" style="font-size:7pt" color="white"><b>SHIELD/PROTECTIVE ITEM</b></font></td>
				<td bgcolor="white" height="5"><font face="Arial" style="font-size:10pt" color="white"></font></td>
				<td bgcolor="white" height="5"><font face="Arial" style="font-size:10pt" color="white"></font></td>
				<td bgcolor="white" height="5"><font face="Arial" style="font-size:10pt" color="white"></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="black" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>ARMOR BONUS</b></font></td>
				<td align="center" bgcolor="black" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>WEIGHT</b></font></td>
				<td align="center" bgcolor="black" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>CHECK PENALTY</b></font></td>
				<td align="center" bgcolor="black" height="15"><font face="Arial" style="font-size:6pt" color="white"><b>SPELL FAILURE</b></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="white" rowspan="2" width="125" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@name"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@bonus"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@weight"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@checkpenalty"/><br/></b></font></td>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@spellfailure"/><br/></b></font></td>
			</tr>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" width="357">
			<tr>
				<td align="center" height="15" bgcolor="black"><font face="Arial" style="font-size:7pt" color="white"><b>SPECIAL PROPERTIES</b></font></td>
			</tr>
			<tr>
				<td align="center" bgcolor="white" style="border: 1px solid black"><font face="Arial" style="font-size:8pt" color="black"><b><xsl:value-of select="@special"/><br/></b></font></td>
			</tr>
		</table><br/>
	</xsl:template>
	
	<xsl:template match="skills">
		<table cellpadding="0" cellspacing="0" width="280">
			<tr>
				<td colspan="10" bgcolor="black" align="center"><font face="Arial" style="font-size: 9pt" color="white"><b>SKILLS</b></font>
				</td>
			</tr>
			<tr>
				<td align="center" width="10" bgcolor="black"><font face="Arial" style="font-size: 4pt"><br/></font></td>
				<td align="center" width="130" style="border: 1pt solid black"><font face="Arial" style="font-size: 4pt">SKILL NAME</font></td>			
				<td align="center" width="25" style="border: 1pt solid black"><font face="Arial" style="font-size: 4pt">KEY<br/>ABILITY</font></td>
				<td align="center" width="30" colspan="2" style="border: 1pt solid black"><font face="Arial" style="font-size: 4pt">SKILL<br/>MODIFIER</font></td>
				<td align="center" width="30" colspan="2" style="border: 1pt solid black"><font face="Arial" style="font-size: 4pt">ABILITY<br/>MODIFIER</font></td>
				<td align="center" width="30" colspan="2" style="border: 1pt solid black"><font face="Arial" style="font-size: 4pt">RANKS</font></td>
				<td align="center" width="25" style="border: 1px solid black"><font face="Arial" style="font-size: 4pt">MISC<br/>MODIFIER</font></td>
			</tr>
		<xsl:apply-templates select="skill"/>
		</table>
		<font face="Arial" style="font-size: 5pt">Skills marked with <font face="Wingdings">Ÿ</font> can be used normally even if the character has zero (0) skill ranks.</font><br/>
		<font face="Arial" style="font-size: 5pt">Skills marked with <font face="Wingdings">ý</font> are cross-class skills. *armor check penalty, if any, applies.</font><br/>
		<font face="Arial" style="font-size: 5pt">**-1 per 5 lb. of gear</font><br/>
		
	</xsl:template>
	
	<xsl:template match="@sub">
		<font style="font-size: 7pt">(<xsl:value-of select="."/>)</font>
	</xsl:template>

	<xsl:template match="@swim">
		**
	</xsl:template>

	<xsl:template match="@armorcheck">
		*
	</xsl:template>

	<xsl:template match="@untrained"><font face="Wingdings" style="font-size: 8pt">Ÿ</font></xsl:template>
	
	<xsl:template match="skill">
			<tr>
				<td align="center" valign="top"><xsl:choose>
					<xsl:when test="@crossclass[. = 'true']"><font face="Wingdings" style="font-size: 8pt">ý</font></xsl:when>
					<xsl:otherwise><font face="Wingdings" style="font-size: 8pt">o</font></xsl:otherwise>
				</xsl:choose></td>
				<td align="left"><font face="Arial" style="font-size: 9pt"><xsl:value-of select="@name"/><xsl:apply-templates select="@untrained"/><xsl:apply-templates select="@sub"/></font></td>
				<td align="left" valign="bottom"><font face="Arial" style="font-size: 8pt"><xsl:value-of select="@stat"/><xsl:apply-templates select="@swim"/><xsl:apply-templates select="@armorcheck"/></font></td>
				<td align="center" style="border-bottom-width:1px; border-bottom: 1pt solid black" width="25" valign="bottom"><font face="Arial" style="font-size: 8pt"><br/></font></td>
				<td align="center" valign="bottom"><font face="Arial" style="font-size: 9pt"><b>=</b></font></td>
				<td align="center" style="border-bottom-width:1px; border-bottom: 1pt solid black" width="25" valign="bottom"><font face="Arial" style="font-size: 8pt"><b><xsl:apply-templates select="//abilities/stat[@abbr=context()/@stat]" mode="mod"/></b><br/></font></td>
				<td align="center" valign="bottom"><font face="Arial" style="font-size: 9pt"><b>+</b></font></td>
				<td align="center" style="border-bottom-width:1px; border-bottom: 1pt solid black" width="25" valign="bottom"><font face="Arial" style="font-size: 8pt"><b><xsl:value-of select="@rank"/></b><br/></font></td>
				<td align="center" valign="bottom"><font face="Arial" style="font-size: 9pt"><b>+</b></font></td>
				<td align="center" style="border-bottom-width:1px; border-bottom: 1pt solid black" width="25" valign="bottom"><font face="Arial" style="font-size: 8pt"><b><xsl:value-of select="@miscmod"/></b><br/></font></td>
			</tr>
	</xsl:template>
</xsl:stylesheet>