fetch("assets/js/languages/"+document.documentElement.lang+".json").then(response => {
	return response.json();
  }).then(data => {
	// Work with JSON data here
	//console.log(data);
	const langjson = data[0];



new Vue({
    el: '#app',
	data: {
		language: document.documentElement.lang,
	},
	methods: {
        translate(value) {

		

		

				

			
            return langjson[value];
        },
		fullscreenmenu(value) {

		
			if(value == 'open')
			{
			document.getElementById("fullscreenmenu").classList.add('opened');
		} else
		{
			document.getElementById("fullscreenmenu").classList.remove('opened');
		}
				

			
        }
    }
});


}).catch(err => {
	// Do something for an error here
  });
  