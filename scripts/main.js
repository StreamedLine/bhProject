(function() {

	//Watch Now buttons
	(function() {
		const initButtons = () => {
			const buttons = Array.from(document.getElementsByClassName('watch-now-btn'));
			
			buttons.forEach((button, i) => button.addEventListener('click', function(){
				const videosDiv = Array.from(document.getElementsByClassName('videos'));
				window.scrollTo({
   			 	top: videosDiv[i].offsetTop,
    			behavior: "smooth"
				});
			}));
		}
		
		initButtons();
	}());

	// //Show More buttons
	// (function() {
	// 	const buttons = Array.from(document.getElementsByClassName('show-more-btn'));
	// 	const videosDivArray = Array.from(document.getElementsByClassName('videos'));
	// 	const map = {
	// 		'mobile-invisible': 1,
	// 		'small-wide-invisible': 3,
	// 		'wide-invisible': 4
	// 	};

	// 	const initButtons = () => {
	// 		buttons.forEach(bindIndexToEvent)
	// 	}

	// 	function bindIndexToEvent(button, i) {
	// 		button.addEventListener('click', function(){
	// 			let size = document.getElementsByClassName('fuel-your-passion-img')[0].offsetWidth;

	// 			if (size <= 320) {
	// 				size = 'mobile-invisible';
	// 			}	else if (size <= 960) {
	// 				size = 'small-wide-invisible';
	// 			}	else {
	// 				size = 'wide-invisible';
	// 			}
	// 			console.log(this)
	// 			this.getElementsByClassName('Show-More')[0].innerText = 'LOADING';

	// 			let videos = Array.from(videosDivArray[i].getElementsByClassName('video'))
	// 			videos = videos.filter(video => video.classList.contains(size));
	// 			videos = videos.slice(0, map[size]);
				
	// 			console.log(videos)

	// 			videos.forEach((video) => {		
	// 				let extraHeight = map[size] == 1 ? 0 : 20;

	// 				videosDivArray[i].style.height = (videosDivArray[i].clientHeight + 1) +'px';
	// 				videosDivArray[i].style.height = (videosDivArray[i].clientHeight + 249) +'px';
	// 				video.classList.toggle(size)
	// 			});

	// 			this.getElementsByClassName('Show-More')[0].innerText = 'Show More';
	// 		});
	// 	}

		
	// 	initButtons();
	// }());


	




}());