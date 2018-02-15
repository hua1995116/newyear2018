(function () {
	var arr = [1,2,3,6,9,8,7,4];
	var blocks = document.querySelectorAll('.block');
	var pocket = document.getElementById('pocket');
	var page5input = document.querySelector('.page5-input');
	var page5btn = document.querySelector('.page5-btn');
	var pocketSuccess = document.querySelector('.pocket-success');
	var pocketBg = document.querySelector('.pocket-bg');
	var speed = 100;
	var index = 0;
	var giftIndex = 38;
	var i = 0;
	var isrun = false;
	var pocketTimes = localStorage.getItem("pocketTimes1") || 1000;
	
	function roll() {
		if(i === giftIndex) {
			// alert(1);
			if(i===42) {
				pocketSuccess.style.display = 'flex';
			} else if(i === 44 || i === 48){
                // alert('恭喜获得花花的香吻一枚，请于年后向花花处领取。\r下方输入"王王爱花花"可100%惊喜大礼包！');
                alert('谢谢惠顾，再接再厉!');
			} else if(i===46){
                alert('恭喜获得花花的香吻一枚');
            } else {
                alert('恭喜获得10元现金红包');
            }
		}
		if(i > giftIndex) {
			return;
		}
		if(i < giftIndex) {
			removeAll();
			if(arr[index] === 4) {
				addClass(arr[index]);
				index++;
				index = 0;
			} else {
				addClass(arr[index]);
				index++;
			}

			i++;
			if(i > (giftIndex-10)) {
				speed +=100;
			}
			setTimeout(roll, speed);
		}
	}
	function removeAll() {
        var len = blocks.length;
		// Array.prototype.slice.call(blocks).map((item, index) => {
		// 	blocks[index].className = 'block';
        // })
        for(var k = 0;k < len; k++) {
            blocks[k].className = 'block';
        }
	}
	function addClass(index) {
		blocks[(+index-1)].className = 'block active';
    }
    pocketBg.onclick = function() {
		pocketSuccess.style.display = 'none';
	}
	pocket.onclick = function() {
		if(pocketTimes > 0) {
			i = 0;
			speed = 100;
			index = 0;
			// if(localStorage.getItem('haspcocket') === 'false') {
			// 	giftIndex = 42;
            // }
            var arr = [43, 44, 45, 46, 47, 48, 49];
            var arrindex = Math.round(Math.random() * 7);
            giftIndex = arr[arrindex];
			roll();
			pocketTimes--;
			localStorage.setItem('pocketTimes1', pocketTimes);
		} else {
			alert('您暂时没有抽奖机会');
		}
		
	}
	page5btn.onclick = function() {
		var value = page5input.value;
		if(value) {
            var haspcocket = localStorage.getItem('haspcocket') || 'true';
            //  && haspcocket === 'true'
			if(value === "王王爱花花") {
				pocketTimes += 10;
				localStorage.setItem('pocketTimes1', pocketTimes);
				localStorage.setItem('haspcocket', 'false');
				alert('恭喜，再次获得抽奖机会，快去抽奖吧。')
			} else {
				alert('你已经参加过该活动');
			}
		} else {
			alert("不能为空！");
		}
	}
})();	