/* AUTHOR:  Maksim Ryzhikov
 * NAME:    BUZZ
 * VERSION: 0.1
 * NOTE: THIS IS NOT OFFICIAL BOOKMARKLET
 */

group.commands.add(["gbuzz", "buzz"], "Google BUZZ", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		eval("q=location.href;if(document.getSelection){d=document.getSelection();}else{d='';};p=document.title;void(window.open('http://www.google.com/buzz/post?url='+encodeURIComponent(q)+'&message='+encodeURIComponent(d),'addwindow','status=no,toolbar=no,width=700,height=350,resizable=yes'));");
	}
},
{
	argCount: "0"
});

/* AUTHOR: Maksim Ryzhikov
 * NAME: GOOGLE-READER NOTE
 * VERSION: 0.1
 */

group.commands.add(["gnote", "gnt"], "Create Link Bookmarklet in Google Reader", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		    eval("var b = document.body; var GR________bookmarklet_domain = 'https://www.google.com'; if (b && !document.xmlVersion) { void(z = document.createElement('script')); void(z.src = 'https://www.google.com/reader/ui/link-bookmarklet.js'); void(b.appendChild(z)); } else {}");
	}
},
{
	argCount: "0"
});

/* AUTHOR: Maksim Ryzhikov
 * AUTHOR BOOKMARKLET AMIT AGARWAL
 * URL http://www.labnol.org/internet/google-plus-one-bookmarklet/19474/
 * NAME: GOOGLE-PLUS-ONE
 * VERSION: 0.1
 * NOTE: THIS IS NOT OFFICIAL BOOKMARKLET
 */


group.commands.add(["gplus", "gx"], "The Google Plus One Bookmarklet", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		eval('(function(){var c;c=document.createElement("script");c.type="text/javascript";c.src="http://www.ctrlq.org/plusone/index.js?r="+Math.random();document.body.appendChild(c);})();');
	}
},
{
	argCount: "0"
});


/* AUTHOR: Maksim Ryzhikov
 * NAME: GOOGLE-BOOKMARKS
 * VERSION: 0.1
 */

group.commands.add(["gbookmarks", "gb"], "Create Google Bookmark", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		eval('(function(){var a=window,b=document,c=encodeURIComponent,d=a.open("http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+c(b.location)+"&title="+c(b.title),"bkmk_popup","left="+((a.screenX||a.screenLeft)+10)+",top="+((a.screenY||a.screenTop)+10)+",height=420px,width=550px,resizable=1,alwaysRaised=1");a.setTimeout(function(){d.focus()},300)})();');
	}
},
{
	argCount: "0"
});

/* AUTHOR: Maksim Ryzhikov
 * NAME: GOOGLE-SUBSCRIBE
 * VERSION: 0.1
 */

group.commands.add(["gsubscribe", "gsb"], "Subscribe to a feed using Google Reader", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		eval("var b=document.body;if(b){void(z=document.createElement('script'));void(z.src='http://www.google.com/reader/ui/subscribe-bookmarklet.js');void(b.appendChild(z));}else{location='http://www.google.com/reader/view/feed/'+encodeURIComponent(location.href)}");
	}
},
{
	argCount: "0"
});

/*
 * NAME: GOOGLE-SHARE
 * VERSION: 0.1
 */
group.commands.add(["gshare", "gsh"], "Share on Google +", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
    eval("var b=document.body;if(b&&!document.xmlVersion){z=document.createElement('iframe');z.src='https://plusone.google.com/_/+1/confirm?hl=en&url='+encodeURIComponent(document.location.href);b.appendChild(z);z.style.position='fixed';z.style.top='40px';z.style.right='10px';z.style.width='475px';z.style.height='325px';z.style.background='white';z.style.border='2px inset';z.style.zIndex='998';y=document.createElement('button');y.textContent='Close';b.appendChild(y);y.style.position='fixed';y.style.top='55px';y.style.right='65px';y.style.zIndex='999';y.onclick=function(){b.removeChild(z);b.removeChild(y)};}void(0)");
	}
},
{
	argCount: "0"
});


/* AUTHOR: https://dev.twitter.com/docs/share-bookmarklet
 * NAME: Twitter
 * VERSION: 0.1
 */
group.commands.add(["tweet", "twit"], "Share on Twitter", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		eval("(function(){window.twttr=window.twttr||{};var D=550,A=450,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0,F=document,E;if(C&gt;A){G=Math.round((C/2)-(A/2))}window.twttr.shareWin=window.open('http://twitter.com/share','','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');E=F.createElement('script');E.src='http://platform.twitter.com/bookmarklets/share.js?v=1';F.getElementsByTagName('head')[0].appendChild(E)}());");
	}
},{
	argCount: "0"
});
