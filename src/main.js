let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好
 * 接下来我演示一下
 * 页面自动绘制小猪佩奇
 **/
#pig{
  width: 400px;
}

#head{
   position: relative;
}

#head > .left{
  width: 30px;
  height: 22px;
  position: absolute;
  bottom: 60%;
  right: 80%;
  transform: rotate(63deg) translateX(60px);
  border-radius: 50% 0 0 50%;
  background-color: pink;
}

#head > .right{
  width: 22px;
  height: 30px;
  position: absolute;
  bottom: 20%;
  left: 25%;
  transform: rotate(-15deg) translateX(14px) translateY(53px);
  border-radius: 50% 50% 0 0;
  background-color: pink;
}

#head > .face{
  width: 150px;
  height: 110px;
  position: absolute;
  bottom: 20%;
  left: 25%;
  transform: rotate(0deg) translateX(-40px) translateY(155px);
  border-radius: 60% 20% 50% 50%;
  background-color: pink;
}

#head > .face > .one{
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 205%;
  left: 60%;
  transform: rotate(0deg) translateX(-40px) translateY(155px);
  border-radius: 50%;
  background-color: white;
}

#head > .face > .two{
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 215%;
  left: 85%;
  transform: rotate(0deg) translateX(-40px) translateY(155px);
  border-radius: 50%;
  background-color: white;
}

#head > .face > .check{
  width: 26px;
  height: 27px;
  position: absolute;
  bottom: 170%;
  left: 38%;
  transform: translateX(-40px) translateY(155px);
  border-radius: 50%;
  background-color: #f394dc;
}

#head > .face > .mouth{
  width: 60px;
  height: 30px;
  border: solid 1px black;
  position: absolute;
  bottom: 165%;
  left: 65%;
  transform:rotate(-1deg) translateX(-40px) translateY(160px);
  border-radius: 80% 50%;
}

#head > .face > .cover{
  width: 65px;
  height: 30px;
  position: absolute;
  bottom: 165%;
  left: 65%;
  transform:rotate(-1deg) translateX(-40px) translateY(150px);
  background-color: pink;
}

#head > .forward{
  width: 50px;
  height: 60px;
  position: absolute;
  bottom: 0%;
  left: 55%;
  transform: translateX(-40px) translateY(105px);
  border-radius: 50%;
  background-color: pink;
}

#head > .forward> .nose{
  width: 40px;
  height: 50px;
  position: absolute;
  bottom: 20%;
  left: 70%;
  transform: translateX(-25px) translateY(8px);
  border-radius: 160%;
}

#head > .forward> .nose > .x{
  width: 8px;
  height: 8px;
  border: solid 1px black;
  position: absolute;
  bottom: 55%;
  left: 70%;
  border-radius: 50%;
  background-color: black;
}

#head > .forward> .nose > .y{
  width: 8px;
  height: 8px;
  border: solid 1px black;
  position: absolute;
  bottom: 45%;
  left: 20%;
  border-radius: 50%;
  background-color: black;
}

#head > .face > .one > .xx{
  width: 8px;
  height: 8px;
  border: solid 1px black;
  position: absolute;
  bottom: 25%;
  left: 10%;
  border-radius: 50%;
  background-color: black;
}

#head > .face > .two > .yy{
  width: 8px;
  height: 8px;
  border: solid 1px black;
  position: absolute;
  bottom: 20%;
  left: 10%;
  border-radius: 50%;
  background-color: black;
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬
    // 如果不是回车就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果 n 不是最后一个,就继续
      n += 1;
      step();
    }
  }, 0);
};

step(); // 1=>2
