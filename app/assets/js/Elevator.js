'use-strict';
(function(){

	var elevator = document.getElementById('elevator');
	var elevatorControl = document.getElementById('elevator-control');
	var stories = document.getElementById('stories');
	var storiesIndicators = document.getElementById('stories-indicators');

	// console.log(elevator);
	console.log(elevatorControl.children[0].childElementCount);
	// console.log(stories);

	var Elevator = function() {
		
		this.totalStories = elevatorControl.children[0].childElementCount;
		this.selectedStories = [];

	};

	Elevator.prototype.getTotalStories = function(){
		console.log(this.totalStories);
	}

	Elevator.prototype.buildStories = function(){
		for (var i = 1; i <= this.totalStories; i++) {
			var story = document.createElement('DIV');
			var storyIndicator = document.createElement('SPAN');
			story.setAttribute('id', 'story-' + i);
			storyIndicator.innerHTML = i;
			storiesIndicators.appendChild(storyIndicator);
			stories.appendChild(story);
		}
	}

	Elevator.prototype.getCurrentStories = function(){
		console.log(this.selectedStories);
	}

	// EVENTS
	Elevator.prototype.selectStory = function(){
		var storySelectors = document.querySelectorAll('.story-selector');
		self = this;
		for (var i = 0; i < storySelectors.length; i++) {
			var storySelector = storySelectors[i];
			storySelector.addEventListener('click', function(e){
				e.preventDefault();
				console.log(this);
				self.appendStoryNum(this.innerHTML);
			});
		}
	}

	Elevator.prototype.appendStoryNum = function(storyNum){
		this.selectedStories.push(storyNum);
		console.log(this.selectedStories);
	}

	var getStories = new Elevator();
	getStories.getTotalStories();
	getStories.getCurrentStories();
	getStories.buildStories();
	getStories.selectStory();

}).call(this);