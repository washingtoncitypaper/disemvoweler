function disemvowel(el) {
  jQuery(el).each(function(){
    var newText = jQuery(this).text().replace(/(a|e|i|o|u|A|E|I|O|U)/g, '');
    jQuery(this).html(newText);
  })
}

var selectors = ['.pb-f-article-article-body p', '.pb-caption', '.pb-byline', '.pb-f-article-article-body li', '.pb-role', '.pb-timestamp', '.post-body-bio', '.pb-f-article-article-topper h1', '.pb-f-article-article-topper a', '.headline-kicker a', '.pb-f-article-article-topper h2', '.pb-bio', 'title'];

for (var i = 0; i < selectors.length; i++) {
	disemvowel(selectors[i]);	
}