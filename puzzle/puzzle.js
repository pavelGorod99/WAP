$(document).ready(function () {
	setTiles();

	function setTiles() {
		var divs = $('#puzzlearea div');
		var n = 0;
		var id = 0;

		$('#shufflebutton').click(shufflePuzzle);

		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
                
				divs.eq(n).attr('id', id);
				id++;
				divs.eq(n).mouseover(hoverCall);
				divs.eq(n).mouseout(mouseOut);
				divs.eq(n).click(clickCall);

				if (i === parseInt('3') && j === parseInt('3')) {
					break;
				}

				divs.eq(n).addClass('puzzlepiece');

				if (i == 0 || j == 0) {
					if (i == 0 && j == 0) {
						divs.eq(n).css({ top: '0px', left: '0px', backgroundPosition: '0px 0px' });
						n++;
						continue;
					} else if (i == 0) {
						divs.eq(n).css({ left: parseInt(j) * 100 + 'px', top: '0px', backgroundPosition: parseInt(-j) * 100 + 'px 0px' });
					} else if (j == 0) {
						divs.eq(n).css({ left: '0px', top: parseInt(i) * 100 + 'px', backgroundPosition: '0px ' + parseInt(-i) * 100 + 'px' });
					}
				} else {
					divs.eq(n).css({ top: parseInt(i) * 100 + 'px', left: parseInt(j) * 100 + 'px', backgroundPosition: parseInt(-j) * 100 + 'px ' + parseInt(-i) * 100 + 'px' });
				}

				n++;
			}
		}
	}

	function shufflePuzzle() {

		if ($('#empty').length === 0)
			addDiv();

		var index = 0;
		var l_num = 0;
		var count = 0;

		while (count < 100) {

			var neighs = [];
			var emptyDivCurrLoc = $('#empty').val();

			var leftId = parseInt(emptyDivCurrLoc) - 1;
			var rightId = parseInt(emptyDivCurrLoc) + 1;
			var topId = parseInt(emptyDivCurrLoc) - 4;
			var downId = parseInt(emptyDivCurrLoc) + 4;

			var leftNeigh;
			var rightNeigh;
			var topNeigh;
			var downNeigh;

			if (leftId >= 0 && leftId <= 15)
				leftNeigh = $('#' + leftId).css('left');

            if (rightId >= 0 && rightId <= 15) 
				rightNeigh = $('#' + rightId).css('left');

            if (topId >= 0 && topId <= 15)
				topNeigh = $('#' + topId).css('top');

            if (downId >= 0 && downId <= 15)
				downNeigh = $('#' + downId).css('top');

			if (parseInt(emptyDivCurrLoc) == 4 || 
                parseInt(emptyDivCurrLoc) == 8 || 
                parseInt(emptyDivCurrLoc) == 12 || 
                parseInt(emptyDivCurrLoc) == 0) {
				leftNeigh = undefined;
			}

			if (parseInt(emptyDivCurrLoc) == 3 || 
                parseInt(emptyDivCurrLoc) == 7 || 
                parseInt(emptyDivCurrLoc) == 11 || 
                parseInt(emptyDivCurrLoc) == 15) {
				rightNeigh = undefined;
			}

			if (parseInt(emptyDivCurrLoc) == 0 || 
                parseInt(emptyDivCurrLoc) == 1 || 
                parseInt(emptyDivCurrLoc) == 2 || 
                parseInt(emptyDivCurrLoc) == 3) {
				topNeigh = undefined;
			}
			if (parseInt(emptyDivCurrLoc) == 12 || 
                parseInt(emptyDivCurrLoc) == 13 || 
                parseInt(emptyDivCurrLoc) == 14 || 
                parseInt(emptyDivCurrLoc) == 15) {
				downNeigh = undefined;
			}

			if (leftNeigh) {
				neighs.push(leftId);
			}

			if (rightNeigh) {
				neighs.push(rightId);
			}

			if (downNeigh) {
				neighs.push(downId);
			}

			if (topNeigh) {
				neighs.push(topId);
			}

			index = generateNewRandom(neighs.length, l_num);

			var emptyDivId = $('#empty').val();
			var currentDiv = neighs[parseInt(index) - 1];
			$('#empty').val(currentDiv);
			$('#' + currentDiv).attr('id', emptyDivId);

			interchangeCoords('empty', emptyDivId);

			neighs.length = 0;
			l_num = index;
			count++;
		}
	}

	function generateNewRandom(maxi, lastnum) {
		var randomNum = Math.floor(Math.random() * parseInt(maxi)) + 1;

		while (true) {
			randomNum = Math.floor(Math.random() * parseInt(maxi)) + 1;
			if (lastnum != randomNum) {
				break;
			}
		}
		return randomNum;
	}

	function hoverCall() {
		var emptyX = $('#empty').css('left');
		var emptyY = $('#empty').css('top');

		var leftX = $('#' + this.id).css('left');
		var topY = $('#' + this.id).css('top');

		if (parseInt(leftX) == parseInt(parseInt(emptyX) - 100) && parseInt(topY) == parseInt(emptyY)) {
			$('#' + this.id).addClass('movablepiece');
		}
		if (parseInt(leftX) == parseInt(parseInt(emptyX) + 100) && parseInt(topY) == parseInt(emptyY)) {
			$('#' + this.id).addClass('movablepiece');
		}
		if (parseInt(topY) == parseInt(parseInt(emptyY) - 100) && parseInt(leftX) == parseInt(emptyX)) {
			$('#' + this.id).addClass('movablepiece');
		}
		if (parseInt(topY) == parseInt(parseInt(emptyY) + 100) && parseInt(leftX) == parseInt(emptyX)) {
			$('#' + this.id).addClass('movablepiece');
		}
	}

	function clickCall() {
		if ($('#empty').length === 0) {
			alert('Please shuffle the puzzle to Start the game');
		}

		var emptyX = $('#empty').css('left');
		var emptyY = $('#empty').css('top');

		var leftX = $('#' + this.id).css('left');
		var topY = $('#' + this.id).css('top');

		if (parseInt(leftX) == parseInt(parseInt(emptyX) - 100) && parseInt(topY) == parseInt(emptyY)) {
			$('#empty').val(this.id);
			this.id = parseInt(this.id) + 1;
			currentDiv = this.id;
			interchangeCoords('empty', currentDiv);
		}

		if (parseInt(leftX) == parseInt(parseInt(emptyX) + 100) && parseInt(topY) == parseInt(emptyY)) {
			$('#empty').val(this.id);
			this.id = parseInt(this.id) - 1;
			currentDiv = this.id;
			interchangeCoords('empty', currentDiv);
		}


		if (parseInt(topY) == parseInt(parseInt(emptyY) - 100) && parseInt(leftX) == parseInt(emptyX)) {
			$('#empty').val(this.id);
			this.id = parseInt(this.id) + 4;
			currentDiv = this.id;
			interchangeCoords('empty', currentDiv);
		}

		if (parseInt(topY) == parseInt(parseInt(emptyY) + 100) && parseInt(leftX) == parseInt(emptyX)) {
			$('#empty').val(this.id);
			this.id = parseInt(this.id) - 4;
			currentDiv = this.id;
			interchangeCoords('empty', currentDiv);
		}
	}

	function addDiv() {
		var adiv = $('<div></div>');

		adiv.attr('id', 'empty');
		$('#puzzlearea').append(adiv);
		$('#empty').val('15');
		$('#empty').css('left', '300px');
		$('#empty').css('top', '300px');
	}

	function mouseOut() {
		$(this).removeClass('movablepiece');
	}

	function interchangeCoords(id1, id2) {
		var emptyX = $('#' + id1).css('left');
		var emptyY = $('#' + id1).css('top');

		var leftX = $('#' + id2).css('left');
		var topY = $('#' + id2).css('top');

		$('#' + id1).css('left', leftX);
		$('#' + id1).css('top', topY);

		$('#' + id2).css('left', emptyX);
		$('#' + id2).css('top', emptyY);
	}
});