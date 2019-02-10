<template>
    <div class="sticky-page">
        <div class="extension">
            <div class="extension-head">
                Extension
            </div>
            <hr>
            <div class="extension-item">
                <ul>
                    <li><router-link to="/translate">有道minQ</router-link></li>
                    <li><router-link to="/mdeditor">MdEditor</router-link></li>
                    <li><router-link to="/calculator">Calculator</router-link></li>
                </ul>
            </div>
        </div>
        <div class="clock-container">
            <article class="clock">
                <div class="hours-container">
                    <div class="hours"></div>
                </div>
                <div class="minutes-container">
                    <div class="minutes"></div>
                </div>
                <div class="seconds-container">
                    <div class="seconds"></div>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    mounted:function(){
        this.initLocalClocks()
        this.setUpMinuteHands()
        this.moveSecondHands()
    },
    methods:{
        initLocalClocks() {
            var date = new Date;
            var seconds = date.getSeconds();
            var minutes = date.getMinutes();
            var hours = date.getHours();
            var hands = [
                {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
                },
                {
                hand: 'minutes',
                angle: (minutes * 6)
                },
                {
                hand: 'seconds',
                angle: (seconds * 6)
                }
            ];
            for (var j = 0; j < hands.length; j++) {
                var elements = document.querySelectorAll('.' + hands[j].hand);
                for (var k = 0; k < elements.length; k++) {
                    elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                    elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
                    if (hands[j].hand === 'minutes') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                    }
                }
            }
        },
        setUpMinuteHands() {
            var containers = document.querySelectorAll('.minutes-container');
            var secondAngle = containers[0].getAttribute("data-second-angle");
            if (secondAngle > 0) {
                var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
                setTimeout(function() {
                    // vue函数间调用moveMinuteHands(还没解决)
                    for (var i = 0; i < containers.length; i++) {
                        containers[i].style.webkitTransform = 'rotateZ(6deg)';
                        containers[i].style.transform = 'rotateZ(6deg)';
                    }
                    setInterval(function() {
                        for (var i = 0; i < containers.length; i++) {
                        if (containers[i].angle === undefined) {
                            containers[i].angle = 12;
                        } else {
                            containers[i].angle += 6;
                        }
                        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
                        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
                        }
                    }, 60000);
                    // 
                }, delay);
            }
        },
        moveMinuteHands(containers) {
            for (var i = 0; i < containers.length; i++) {
                containers[i].style.webkitTransform = 'rotateZ(6deg)';
                containers[i].style.transform = 'rotateZ(6deg)';
            }
            setInterval(function() {
                for (var i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 12;
                } else {
                    containers[i].angle += 6;
                }
                containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
                containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
                }
            }, 60000);
        },
        moveSecondHands() {
            var containers = document.querySelectorAll('.seconds-container');
            setInterval(function() {
                for (var i = 0; i < containers.length; i++) {
                if (containers[i].angle === undefined) {
                    containers[i].angle = 6;
                } else {
                    containers[i].angle += 6;
                }
                containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
                containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
                }
            }, 1000);
        }
    }
}
</script>

<style scoped>
.sticky-page{
    clear:left;
    float: left;
    position:sticky;
    top:0;
    width: 216.16px;
    padding-top: 8px;
}
/*fixed extension */
.extension{
    padding: 0px 10px;
    padding-bottom: 0px;
    text-align: center;
    box-shadow: 1px 1px 1px #bbb;
    background-color: #ffffff;
}
.extension .extension-head{
    padding: 5px;
    font-size: 15px;
    color: #222;
    font-weight: 600;
}
.extension hr{
    margin: 0% 10%;
}
.extension .extension-item ul{
    padding: 0% 22%;
    margin-top: 5px;
    padding-bottom: 10px;
    list-style: none;
}
.extension .extension-item ul li{
    padding: 2px;
    border: 1px solid #ffffff;
    transition: border 1s;
    -webkit-transition: border 1s;
}
.extension .extension-item ul li:hover{
    border: 1px solid #555;
}
.extension .extension-item ul li a{
    display: block;
    width: 100%;
    color: #555;
    padding-bottom: 2px;
    text-decoration: none;
    transition: color 0.5s;
    -webkit-transition: color 0.5s;
}
/* clock */
.clock-container{
    background-color: #ffffff;
    overflow: hidden;
    margin-top: 20px;
}
.clock {
  border-radius: 50%;
  background: #fff url(../assets/images/station_clock.svg) no-repeat center;
  background-size: 88%;
  height: 12em;
  width: 12em;
  position: relative;
  margin: auto;
}

.clock:after {
  background: red;
  border-radius: 100%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
}
.minutes-container, .hours-container, .seconds-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.hours {
  background: #000;
  width: 3.5%;
  height: 35%;
  position: absolute;
  left: 47.9%;
  top: 24%;
  -webkit-transform-origin: 50% 71%;
  transform-origin: 50% 71%;
}
.minutes {
  background: #000;
  width: 3%;
  height: 49%;
  position: absolute;
  left: 48.201%;
  top: 11.7%;
  -webkit-transform-origin: 50% 78.5%;
  transform-origin: 50% 78.5%;
}
.seconds {
  background: red;
  width: 1.5%;
  height: 42%;
  position: absolute;
  left: 49.25%;
  top: 20%;
  -webkit-transform-origin: 50% 71%;
  transform-origin: 50% 71%;
  z-index: 8;
}
.seconds::before {
  background: red;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -9%;
  left: -200%;
  height: 18%;
  width: 500%;
}
@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
.hours-container {
  animation: rotate 43200s infinite linear;
}
.minutes-container {
  transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
}
.seconds-container {
  transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
}
@media screen and (max-width:1000px) {
    .sticky-page{
        float: none;
        position:static;
        width: 100%;
        padding-top: 8px;
        padding-bottom: 20px;
    }
    .clock-container{
       display: none;
    }
    .extension hr{
        margin: 0;
    }
}
</style>
