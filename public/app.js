
function createAuthor(data){
	var h3 = document.createElement('h3');
	h3.textContent = data.author;
	return h3;
}
function createContent(data){
	var p = document.createElement('p');
	p.textContent = data.content;
	return p;
}
function createTitle(data){
	var h4 = document.createElement('h4');
	h4.textContent = data.title;
	return h4;
}
function success(data){
	var div = document.getElementsByTagName('div')[1];
	div.innerHTML = '';
	for (var i = 0; i < data.length; i++){
		var post = data[i];
		var postElementAuthor = createAuthor(post);
		var postElementContent = createContent(post);
		var postElementTitle = createTitle(post);
		div.appendChild(postElementAuthor);
		div.appendChild(postElementTitle);
		div.appendChild(postElementContent);
	}
}
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(e) {
	$.ajax({
		url: '/posts',
		method: 'POST',
		data: $(this).serialize(),
		success: loadPosts	
	});
	form.reset();
	e.preventDefault();
});

function loadPosts()
{
	$.ajax({
		url: '/posts',
		success: success
	});
}

loadPosts();