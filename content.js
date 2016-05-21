(function() {
	var url = location.href;
	var origurl = url;
	
	// list of regex replacements
	var replacements=[
		[new RegExp('^(.*cfile\\d*\\.uf\\..*\\/)image(\\/.*)$', 'g'), '$1original$2'],
		[new RegExp('^(.*\\.twimg\\..*\\.(?:jpg|jpeg|gif|png))(?::\\w+)$', 'g'), '$1:orig'],
		[new RegExp('^(.*\\.googleusercontent\\..*)w\\d+-h\\d+-p-no$', 'g'), '$1so'],
		[new RegExp('^(.*\.tumblr\.com\\/.*_)\\d+(\\.\\w+)$', 'g'), '$11280$2']
	];
	
	for(var reidx in replacements)
		url = url.replace(replacements[reidx][0], replacements[reidx][1]);
	
	if(origurl != url)
		location.href = url;
})();