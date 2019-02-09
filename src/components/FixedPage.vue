<template>
<div class="fixed">
<!-- fixed -->
<div class="show-weather">
    <div class="weather"></div>
    <div class="weather-three">
        <div @click="today_weather" class="today">
            <div class="up">
                <span>今天</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{{weather.daily_forecast[0].cond_txt_d}}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{{weather.basic.location}}</span>
            </div>
            <div class="down">
                <span>{{weather.daily_forecast[0].tmp_min}}~{{weather.daily_forecast[0].tmp_max}} &#8451;</span>
                &nbsp;
                <span>风速 {{weather.daily_forecast[0].wind_spd}}km/h</span>
            </div>
        </div>
        <div @click="tomorrow_weather" class="tomorrow">
            <div class="up">
                <span>明天</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{{weather.daily_forecast[1].cond_txt_d}}</span>
            </div>
            <div class="down">
                <span>{{weather.daily_forecast[1].tmp_min}}~{{weather.daily_forecast[1].tmp_max}}&#8451;</span>
                &nbsp;
                <span>风速 {{weather.daily_forecast[1].wind_spd}}km/h</span>
            </div>
        </div>
        <div @click="close_detail" class="lat-lon">
            <span class="lat">经度 {{location.x}}</span>
            <br>
            <span class="lon">纬度 {{location.y}}</span>
        </div>
    </div>
</div>
<transition name="weatherdetail">
<div v-show="detail_show" class="alert">
    <ul>
        <li>{{weather.basic.location}} ({{weather.basic.cid}})</li>
        <li>{{weather.basic.cnty}} {{weather.basic.admin_area}} {{weather.basic.parent_city}} (时区 {{weather.basic.tz}})</li>
        <li>预报日期 {{detail.date}}</li>
        <li>日出时间 {{detail.sr}}</li>
        <li>日落时间 {{detail.ss}}</li>
        <li>月升时间 {{detail.mr}}</li>
        <li>月落时间 {{detail.ms}}</li>
        <li>最高温度 {{detail.tmp_max}}</li>
        <li>最低温度 {{detail.tmp_min}}</li>
        <li>白天天气状况 {{detail.cond_txt_d}}</li>
        <li>晚间天气状况 {{detail.cond_txt_n}}</li>
        <li>风向360角度 {{detail.wind_deg}}</li>
        <li>风向 {{detail.wind_dir}}</li>
        <li>风力 {{detail.wind_sc}}</li>
        <li>风速 {{detail.wind_spd}}公里/小时</li>
        <li>相对湿度 {{detail.hum}}</li>
        <li>降水量 {{detail.pcpn}}</li>
        <li>降水概率 {{detail.pop}}</li>
        <li>大气压强 {{detail.pres}}</li>
        <li>紫外线强度指数 {{detail.uv_index}}</li>
        <li>能见度 {{detail.vis}}公里</li>
    </ul>
    <button @click="close_detail" class="yes">确定</button>
</div>
</transition>
<div @click="back_to_top()" class="back-top">
    <a><i class="material-icons">keyboard_arrow_up</i></a>
</div>
</div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            location:'',
            weather:{},
            detail:{},
            detail_show:false,
        }
    },
    created:function(){
        this.get_weather()
    },
    methods:{
        get_weather(){
            var url = "http://api.map.baidu.com/location/ip?ak=4B276MB7K1r4kI85zWmNKYvzVq5aNBz4&coor=bd09ll"
            this.$jsonp(url).then(res=>{
                url = "https://free-api.heweather.net/s6/weather/forecast?location="+res.content.point.x+","+res.content.point.y+"&key=16d66503791847d7a1e97756599c95a4"
                this.$http({
                    url:url,
                    methods:'GET',
                }).then(function(res){
                    this.weather = res.body.HeWeather6[0]
                },function(err){})
                this.location = res.content.point
            }).catch(err=>{})
        },
        today_weather(){
            this.detail = this.weather.daily_forecast[0]
            this.detail_show = true
        },
        tomorrow_weather(){
            this.detail = this.weather.daily_forecast[1]
            this.detail_show = true
        },
        close_detail(){
            this.detail_show = false
        },
        back_to_top(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}
</script>


<style scoped>
/* fixed */
.back-top{
    background-color: #4242423f;
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 40px;
    right: 44px;
    transition:background-color 1s;
	-webkit-transition:background-color 1s;
}
.back-top:hover{
    background-color: #424242;
}
.back-top i{
    font-size: 45px;
    color: #ffffff;
}

.weather{
    background-color: #4242423f;
    width: 3px;
    height: 50px;
    position: fixed;
    top: 0px;
    left: 0;
}
.weather-three{
    background-color: #ccc;
    position: fixed;
    top: 0;
    left: 0;
    width: 9.8%;
    font-size: 10px;
    color: #555;
    display: none;
}
.show-weather{
    transition: display .5s;
	-webkit-transition: display .5s;
}
.show-weather .today{
    padding-top: 3px;
}
.show-weather .today,.show-weather .tomorrow{
    border-bottom: 1px solid #999;
    padding-left: 2px;
    transition:background-color 1s;
	-webkit-transition:background-color 1s;
}
.show-weather .today:hover,.show-weather .tomorrow:hover,.show-weather .lat-lon:hover{
    background-color: #999;
}
.weather-three hr{
    border:.5px solid #777;
}
.show-weather:hover .weather-three{
    display: block;
}
.weatherdetail-enter-active, .weatherdetail-leave-active {
  transition: opacity 1s;
}
.weatherdetail-enter, .weatherdetail-leave-to{
  opacity: 0;
}
.alert{
    position: fixed;
    top: 0;
    left: 35%;
    width: 30%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    box-shadow: 1px 1px .5px#ccc;
}
.alert ul{
    padding: 0%;
    list-style: none;
    margin: auto;
    font-size: 15px;
    color: #555;
    border: 1px solid #ccc;
    border-bottom: 2px solid #ccc;
}
.alert ul li{
    border: 1px solid #ccc;
    border-bottom: none;
    padding: 1px 5px;
}
.alert .yes{
    float: right;
    border: none;
    padding: 2px 16px;
    outline: none;
    color: #555;
    margin-top: 6px;
    transition:background-color 1s;
	-webkit-transition:background-color 1s;
}
.alert .yes:hover{
    background-color: #555;
    color: #ffffff;
}
</style>
