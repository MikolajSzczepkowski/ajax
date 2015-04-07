function createPost(data){
	var p = document.createElement('p');
	p.textContent = data.author;

	return p;
}

function success(data){

	for (var i = 0; i < data.lenght; i++){
		var post = data[i];
		var postElem = createPost(post);

		//dodać do dom
	}

	console.log(data);
}

$.ajax({
	url: '/posts',
	success: success
});