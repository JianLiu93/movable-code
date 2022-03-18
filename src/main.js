let code = document.querySelector('.code');
let css = document.querySelector('#css');
let string = `
/*你好，我是一名前端小白。
这是一个实现CSS代码以打字效果打出，预览样式添加效果的demo作品。
这次使用CSS来做一个太极图。*/
/*首先准备一个div元素，class命名box */
.box {
    width: 200px;
    height: 200px;
}

/*接下来让它变圆，添加的样式是*/
.box {
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
}

/*然后把它切成一黑一白两半，代表阴阳相隔*/
.box {
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%,
    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*八卦雏形有了，需要在大球中再加两个小球，可以使用伪元素来做*/
.box::before {
    content: "";
    display: block;
    position: relative;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
}
.box::after {
    content: "";
    display: block;
    position: relative;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background-color: #000;
    border-radius: 50%;
}

/*接下来就需要画龙点睛的一步了，让八卦白中有黑，黑中又白，展现相生相克的关系*/
.point1 {
	position: absolute;
	left: 50%;
	top: 25%;
	transform: translate(-50%,-50%);
	width: 20px;
	height: 20px;
	background-color: #000;
	border-radius: 50%;
	box-shadow: 0 0 2px rgba(0,0,0,0.3);
	z-index: 1;
}
.point2 {
	position: absolute;
	left: 50%;
	top: 75%;
	transform: translate(-50%,-50%);
	width: 20px;
	height: 20px;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 0 2px rgba(0,0,0,0.3);
	z-index: 1;
}



`;
// let string1 = string.replace(/\n/g, '<br>');
console.log(string.length);

let n = 0;
let string2 = '';

let type = function () {
	setTimeout(() => {
		// console.log(n, string[n]);
		// 逐个字符去判断是否为特殊符号
		let str1 = '';
		if (string[n] === '\n') {
			str1 = '<br>';
		} else if (string[n] === ' ') {
			str1 = '&nbsp;';
		} else {
			str1 = string[n];
		}
		string2 += str1;
		code.innerHTML = string2;
		css.innerHTML = string.substring(0, n);
		window.scrollTo(0, 9999);
		code.scrollTo(0, 9999);
		n++;
		if (n < string.length) {
			type();
		}
	}, 100);
}

type();
