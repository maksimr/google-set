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

group.commands.add(["gsubscribe", "gs"], "Subscribe to a feed using Google Reader", function (args) {
	var w = XPCNativeWrapper.unwrap(window.content.window);
	with (w) {
		eval("var b=document.body;if(b){void(z=document.createElement('script'));void(z.src='http://www.google.com/reader/ui/subscribe-bookmarklet.js');void(b.appendChild(z));}else{location='http://www.google.com/reader/view/feed/'+encodeURIComponent(location.href)}");
	}
},
{
	argCount: "0"
});
