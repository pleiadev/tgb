//<!--

function openQuickWin(file, height,width)
{
	openNavWin('theWizard', file , height, width);
}
 
function openNavWin(winame, file, height, width)
{
        navWindow = window.open(file,winame,"status=no,scrollbars,toolbar=no,location=no,menu=no,resizable=yes,WIDTH="+width+",HEIGHT="+height);
 
        if (navWindow != null) 
        {
                if (navWindow.opener == null)
                        navWindow.opener = self;
                        window.top.name = 'BASE_WINDOW';
        }
}
 
// -->
