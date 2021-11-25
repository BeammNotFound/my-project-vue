<template>
  <div class="slide-in-bck-center">
    <div class="box">
      <h1 id="greeting" tg-name="opacity" style="color: white">Hi,I'm
        <b style="color: black"> BeamStark</b></h1>
      <h2 class="tracking-in-contract">There's my SELF-INTRODUCTION</h2>
      <div id="container" tg-name="_" tg-ref="container" tg-from="0" tg-to="10" tg-step="1">
        <div id="fontBox" tg-name="_" tg-map="1,2,3,4,5,6,7,8,9,10: 1">
        <p tg-name="opacity" tg-filter="1!" tg-follow="container">My Chinese name is
          <b>LinagHao
        </b>,I
          was
          born
          in <a
            href="https://zh.wikipedia.org/wiki/%E9%83%91%E5%B7%9E%E5%B8%82">Zhengzhou</a>,Henan province.</p>
        <p tg-name="opacity" tg-filter="2!" tg-follow="container">I'm studying in <a
            href="https://zh.wikipedia.org/wiki/%E9%83%91%E5%B7%9E%E8%A5%BF%E4%BA%9A%E6%96%AF%E5%AD%A6%E9%99%A2">SIAS University</a> and I was born in 1999.</p>
        <p tg-name="opacity" tg-filter="3!" tg-follow="container">My undergraduate
          major
          is
          software
          engineering.</p>
        <p tg-name="opacity" tg-filter="4!" tg-follow="container">I am proficient in
          using
          some
          software
          Programming
          Language</p>
        <p tg-name="opacity" tg-filter="5!" tg-follow="container">Such As :
          <b>Java,SQL,HTML,CSS</b></p>
        <p tg-name="opacity" tg-filter="6!" tg-follow="container">Of course,These are
          far
          from
          enough.</p>
        <p tg-name="opacity" tg-filter="7!" tg-follow="container">I have access to
          some
          development
          framework or
          something i
          forget
          what
          they're
          called of
          the backend development,
          just as will 🤗</p>
        <p tg-name="opacity" tg-filter="8!" tg-follow="container">Like Spring
          Boot,SSM-framework,Spring-MVC,Swagger,MyBatis and MyBatis-Plus,Redis,Linux,Maven,Git and so
          on.
        </p>
        <p tg-name="opacity" tg-filter="9!" tg-follow="container">I can develop more
          efficiently
          with
          some
          tools
          👨🏻‍💻</p>
        <p tg-name="opacity" tg-filter="10!" tg-follow="container">IntelliJ
          IDEA,WebStorm,Postman/Apifox,Navicat
          Premium,Sourcetree,XShell/Electerm...</p>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Introduction"
}
</script>

<style scoped>
#fontBox{
  padding: 20px 50px;
}
#container{
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: 500;
}
p{
  --opacity: 0.3;
  opacity: var(--opacity);
}
.slide-in-bck-center{-webkit-animation:slide-in-bck-center .10s cubic-bezier(.25,.46,.45,.94)
both;animation:slide-in-bck-center .7s cubic-bezier(.25,.46,.45,.94) both}

@-webkit-keyframes slide-in-bck-center{0%{-webkit-transform:translateZ(600px);transform:translateZ(600px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes slide-in-bck-center{0%{-webkit-transform:translateZ(600px);transform:translateZ(600px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}
:root{
  font-size: 20px;
  font-family: Helvetica;
}
#greeting{
  margin: 0 0;
  padding-bottom: -10px;
  padding-left: 30px;
  font-size: 55px;
  opacity: var(--opacity);
  transform: translateX(calc(var(--scrolled) * 10px)); /* 转换为 px 单位 */
}
.box {
  margin-top: -10px;
  padding-bottom: 10px;
  /*padding-left: 30px;*/
  width: 100%;
  height: 100%;
  border-radius: 9px;
  /*margin: 0;*/
  min-height: 100vh;
  background-image:
    radial-gradient(closest-side,rgba(235,105,78,1),rgba(235,105,78,0)),
    radial-gradient(closest-side,rgba(243,11,164,1),rgba(243,11,164,0)),
    radial-gradient(closest-side,rgba(254,234,131,1),rgba(254,234,131,0)),
    radial-gradient(closest-side,rgba(170,142,245,1),rgba(170,142,245,0)),
    radial-gradient(closest-side,rgba(248,192,147,1),rgba(248,192,147,0));
  background-size:
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    1100vmax 110vmax,
    90vmax 90vmax;
  background-position:
    -80vmax -80vmax,
    50vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
  background-repeat: no-repeat;
  background-color: #e493d0;
  animation: 10s movement linear infinite;
}
box::after {
  content: '';
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
@keyframes movement {
  0%, 100% {
    background-size:
        130vmax 130vmax,
        80vmax 80vmax,
        90vmax 90vmax,
        100vmax 110vmax,
        90vmax 90vmax;
    background-position:
        -80vmax -80vmax,
        50vmax -30vmax,
        10vmax 10vmax,
        -30vmax -10vmax,
        50vmax 50vmax;
  }
  25% {
    background-size:
        100vmax 100vmax,
        90vmax 90vmax,
        100vmax 100vmax,
        90vmax 90vmax,
        60vmax 60vmax;
    background-position:
        -60vmax -90vmax,
        50vmax -40vmax,
        0vmax -20vmax,
        -40vmax -20vmax,
        40vmax 60vmax;
  }
  50% {
    background-size:
        80vmax 80vmax,
        110vmax 110vmax,
        80vmax 80vmax,
        60vmax 60vmax,
        80vmax 80vmax;
    background-position:
        -50vmax -70vmax,
        40vmax -30vmax,
        10vmax 0vmax,
        20vmax 10vmax,
        30vmax 70vmax;
  }
  75% {
    background-size:
        90vmax 90vmax,
        90vmax 90vmax,
        100vmax 100vmax,
        90vmax 90vmax,
        70vmax 70vmax;
    background-position:
        -50vmax -40vmax,
        50vmax -30vmax,
        20vmax 0vmax,
        -10vmax 10vmax,
        40vmax 60vmax;
  }

}
.tracking-in-contract {
  -webkit-animation: tracking-in-contract 1.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: tracking-in-contract 1.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  padding-left: 30px;
  font-size: 26px;
}
@-webkit-keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

</style>