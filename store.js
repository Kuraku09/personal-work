window.onload = function () {
	lax.init();

	// Add a driver that we use to control our animations
	lax.addDriver('scrollY', function () {
		console.log(window.scrollY);
		return window.scrollY;
	})

	// Add animation bindings to elements
	lax.addElements('.my-lax-box', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				[-1000, 'screenWidth/2-700', 'screenWidth'],
			],

			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],
			// 透明度
			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});

	// Add animation bindings to elements
	lax.addElements('.my-lax-box-2', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				['screenWidth', 'screenWidth/2-700', -1000],
			],
			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],

			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});

	lax.addElements('.my-lax-box-3', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterX"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				[-1000, 'screenWidth/2-700', 'screenWidth'],
			],

			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],
			// 透明度
			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});

	lax.addElements('.my-lax-box-4', {
		// 垂直卷軸在動的時候
		scrollY: {
			// 水平移動
			translateX: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInX", "elCenterY"],
				// X軸位置 0 , 螢幕中央, 螢幕右邊
				[-1000, 'screenWidth/2-700', 'screenWidth'],
			],

			// 大小
			scale: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 倍數
				[1, 5, 1],
			],
			// 透明度
			opacity: [
				// 垂直進入畫面,垂直到達中央畫面 ,垂直出去畫面 之外 => Y 軸座標
				["elInY", "elCenterY", "elOutY"],
				// 角度
				[1, 0.5, 0],
			]
		}
	});
}