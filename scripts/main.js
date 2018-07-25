(function() {
	(function() {
		const initButtons = () => {
			const buttons = Array.from(document.getElementsByClassName('watch-now-btn'));
			
			buttons.forEach((button, i) => button.addEventListener('click', function(){
				const videosDiv = Array.from(document.getElementsByClassName('videos'));
				console.log(videosDiv, videosDiv[i].offsetTop)
				window.scrollTo({
   			 	top: videosDiv[i].offsetTop,
    			behavior: "smooth"
				});
				
			}));
		}
		
		//doesn't need to wait for all the videos to load
		initButtons();
	}());


	







}());