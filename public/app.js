function createAuthor(data){
	var p = document.createElement('p');
	p.textContent = data.author;
	return p;
}
function createContent(data){
	var p = document.createElement('p');
	p.textContent = data.content;
	return p;
}
function createTitle(data){
	var p = document.createElement('p');
	p.textContent = data.title;
	return p;
}
function success(data){
	for (var i = 0; i < data.length; i++){
		var post = data[i];
		var postElementAuthor = createAuthor(post);
		var postElementContent = createContent(post);
		var postElementTitle = createTitle(post);
		var div = document.getElementsByTagName('div')[0];
		div.appendChild(postElementAuthor);
		div.appendChild(postElementTitle);
		div.appendChild(postElementContent);
	}
}

$.ajax({
	url: '/posts',
	success: success
});