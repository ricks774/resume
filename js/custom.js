$(document).ready(function() {

	// fullpage Initialization
	$('#fullpage').fullpage({
		//options here
		autoScrolling:false,
		scrollHorizontally: true,
		fitToSection:false,
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		menu: '#myMenu'
		// scrollingSpeed: 300,
	});

	// circliful
	setInterval(function(){
					var width=$(".fenxi").css("width");
					var widthIng=parseInt(width.substring(0,width.length-2));
					if(widthIng==60){
						widthIng=48;
					}
					$(".fenxi").css("width",widthIng+4+"px");
				},500);

	var p1 = new Progress({
				el: 'ps-percent', //canvas元素id
				deg: 70, //绘制角度
				timer: 5, //绘制时间
				lineWidth: 12, //线宽
				lineBgColor: 'transparent', //底圆颜色
				lineColor: '#3F5B75', //动态圆颜色
				fontSize: 0, //字体大小
				circleRadius: 100 //圆半径
			});
	var p1 = new Progress({
				el: 'ai-percent', //canvas元素id
				deg: 50, //绘制角度
				timer: 5, //绘制时间
				lineWidth: 12, //线宽
				lineBgColor: 'transparent', //底圆颜色
				lineColor: '#3F5B75', //动态圆颜色
				fontSize: 0, //字体大小
				circleRadius: 100 //圆半径
			});
	var p1 = new Progress({
				el: 'pr-percent', //canvas元素id
				deg: 60, //绘制角度
				timer: 5, //绘制时间
				lineWidth: 12, //线宽
				lineBgColor: 'transparent', //底圆颜色
				lineColor: '#3F5B75', //动态圆颜色
				fontSize: 0, //字体大小
				circleRadius: 100 //圆半径
			});
	var p1 = new Progress({
				el: 'html-percent', //canvas元素id
				deg: 60, //绘制角度
				timer: 5, //绘制时间
				lineWidth: 12, //线宽
				lineBgColor: 'transparent', //底圆颜色
				lineColor: '#3F5B75', //动态圆颜色
				fontSize: 0, //字体大小
				circleRadius: 100 //圆半径
			});
	var p1 = new Progress({
				el: 'css-percent', //canvas元素id
				deg: 60, //绘制角度
				timer: 5, //绘制时间
				lineWidth: 12, //线宽
				lineBgColor: 'transparent', //底圆颜色
				lineColor: '#3F5B75', //动态圆颜色
				fontSize: 0, //字体大小
				circleRadius: 100 //圆半径
			});
	var p1 = new Progress({
				el: 'js-percent', //canvas元素id
				deg: 10, //绘制角度
				timer: 5, //绘制时间
				lineWidth: 12, //线宽
				lineBgColor: 'transparent', //底圆颜色
				lineColor: '#3F5B75', //动态圆颜色
				fontSize: 0, //字体大小
				circleRadius: 100 //圆半径
			});


	// masonry & imagesLoaded
	$('.grid').imagesLoaded(function() {
            $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 0.5, //gap
                animate: true,
                horizontalOrder: true,
                originTop: true
            });
        });

        //Fade Out the loading screen when all images loaded
        $('.grid').imagesLoaded().always( function( instance ) {
             $('.loadingScreen').fadeOut();
        })


	new WOW().init();

	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
		 buttons: [
		    "zoom",
		    //"share",
		    "slideShow",
		    //"fullScreen",
		    //"download",
		    "thumbs",
		    "close"
		  ]
		});

});