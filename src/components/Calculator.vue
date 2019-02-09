<template>
<div class="calculator">
<div class="cal">
	<div class="expression">
		{{ expression_display }}
	</div>
	<div class="display">
		<span>{{ display }}</span>
	</div>

	<div class="select_div">
		<select id="select" @change="select_change()" class="select">
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option selected="selected" value="decimal">Decimal</option>
            <option value="hexadecimal">Hexadecimal</option>
		</select>
	</div>

	<div class="values">
		<div class="oct val">OCT<span>{{ octal }}</span></div>
		<div class="dec val">DEC<span>{{ decimal }}</span></div>
		<div class="hex val">HEX<span>{{ hexadecimal }}</span></div>
		<div class="bin val">BIN<span>{{ binary }}</span></div>
	</div>

	<div class="keyboard">
		<div class="line one">
			<button @click="keypress($event)" id="btn_ce">CE</button>
			<button @click="keypress($event)" id="btn_add">&</button>
			<button @click="keypress($event)" id="btn_or">|</button>
			<button @click="keypress($event)" id="btn_cl">C</button>
			<button disabled="disabled">null</button>
			<button @click="keypress($event)" id="btn_div">/</button>
		</div>
		<div class="line two">
			<button @click="keypress($event)" id="btn_a">A</button>
			<button @click="keypress($event)" id="btn_b">B</button>
			<button @click="keypress($event)" id="btn_7">7</button>
			<button @click="keypress($event)" id="btn_8">8</button>
			<button @click="keypress($event)" id="btn_9">9</button>
			<button @click="keypress($event)" id="btn_mul">*</button>
		</div>
		<div class="line three">
			<button @click="keypress($event)" id="btn_c">C</button>
			<button @click="keypress($event)" id="btn_d">D</button>
			<button @click="keypress($event)" id="btn_4">4</button>
			<button @click="keypress($event)" id="btn_5">5</button>
			<button @click="keypress($event)" id="btn_6">6</button>
			<button @click="keypress($event)" id="btn_sub">-</button>
		</div>
		<div class="line four">
			<button @click="keypress($event)" id="btn_e">E</button>
			<button @click="keypress($event)" id="btn_f">F</button>
			<button @click="keypress($event)" id="btn_1">1</button>
			<button @click="keypress($event)" id="btn_2">2</button>
			<button @click="keypress($event)" id="btn_3">3</button>
			<button @click="keypress($event)" id="btn_add">+</button>
		</div>
		<div class="line five">
			<button @click="keypress($event)" id="btn_bracket_l">(</button>
			<button @click="keypress($event)" id="btn_bracket_r">)</button>
			<button @click="keypress($event)" id="btn_mod">%</button>
			<button @click="keypress($event)" id="btn_0">0</button>
			<button id="btn_dot" disabled="disabled">null</button>
			<button @click="keypress($event)" id="btn_equal">=</button>
		</div>
	</div>
</div>
</div>
</template>
<script>
/* eslint-disable */
export default {
    data(){
        return{
            display: 'Hello Pretty Girl!',
            expression_display:'',
            expression: '',
            i:0,
            result: 0,
            binary: '0',
            octal: '0',
            decimal: '0',
            hexadecimal: '0'
        }
    },
    methods:{
        calculateExpression:function(){
			let result = this.calculateTerm();
			while(true){
				if(this.expression[this.i]==='+'||this.expression[this.i]==='-'){
					if(this.expression[this.i]==='+'){
						this.i ++;
						result += this.calculateTerm();
					}else{
						this.i ++;
						result -= this.calculateTerm();
					}
				}
				else{
					break;
				}
			}
			return result;
		},
		calculateTerm:function(){
			let result = this.calculateFactor();
			while(true){
				if(this.expression[this.i]==='*'||this.expression[this.i]==='/'||this.expression[this.i]==='&'||this.expression[this.i]==='|'||this.expression[this.i]==='%'){
					if(this.expression[this.i]==='*'){
						this.i ++;
						result *= this.calculateFactor();
					}else if(this.expression[this.i]==='/'){
						this.i ++;
						result /= this.calculateFactor();
					}else if(this.expression[this.i]==='&'){
						this.i ++;
						result = result & this.calculateFactor();
					}else if(this.expression[this.i]==='|'){
						this.i ++;
						result = result | this.calculateFactor();
					}else{
						this.i ++;
						result = result % this.calculateFactor();
					}
				}
				else{
					break;
				}
			}
			return result;
		},
		calculateFactor:function(){
			let result = 0;
			if(this.expression[this.i]==='('){
				this.i ++;
				result = this.calculateExpression();
				this.i ++;
			}else{
				while(parseInt(this.expression[this.i],16) || parseInt(this.expression[this.i],16)===0){
					if (document.getElementById("select").value === "binary"){
						result = result*2+parseInt(this.expression[this.i],2);
					}
					else if (document.getElementById("select").value === "octal"){
						result = result*8+parseInt(this.expression[this.i],8);
					}
					else if (document.getElementById("select").value === "decimal"){
						result = result*10+parseInt(this.expression[this.i],10);
					}
					else{
						result = result*16+parseInt(this.expression[this.i],16);
					}
					this.i ++;
				}
			}
			return result;
		},
		keypress:function(event){
            var key_value = event.currentTarget.innerText
            if (this.display === 'Hello Pretty Girl!'){
                this.display = ''
            }
            if(key_value === 'CE'){
                this.display = ''
				this.expression_display = this.display;
                this.result = 0
            }
            else if(key_value === 'C'){
                this.display=this.display.substring(0,this.display.length-1)
				this.expression_display = this.display;
            }
			else if(key_value === '='){
				this.i = 0;
				this.expression_display = this.display;
				if (document.getElementById("select").value === "binary"){
					this.display = this.calculateExpression().toString(2);
				}
				else if (document.getElementById("select").value === "octal"){
					this.display = this.calculateExpression().toString(8);
				}
				else if (document.getElementById("select").value === "decimal"){
					this.display = this.calculateExpression().toString();
				}
				else{
					this.display = this.calculateExpression().toString(16);
				}
            }
            else{
                this.display += key_value;
                this.result = parseInt(this.display,10);
            }
			this.i = 0;
			this.expression = this.display;
			this.result = this.calculateExpression();
            this.get_result()
        },
        get_result:function(){
            this.binary = this.result.toString(2);
            this.octal = this.result.toString(8);
            this.decimal = this.result;
            this.hexadecimal = this.result.toString(16);
        },
		select_change:function(){
			if (document.getElementById("select").value === "binary")
			{
				for(var i=0;i<30;i++){
					document.getElementsByTagName("button")[i].disabled = false;
				}
				document.getElementById("btn_a").disabled = true;
				document.getElementById("btn_b").disabled = true;
				document.getElementById("btn_c").disabled = true;
				document.getElementById("btn_d").disabled = true;
				document.getElementById("btn_e").disabled = true;
				document.getElementById("btn_f").disabled = true;

				document.getElementById("btn_9").disabled = true;
				document.getElementById("btn_8").disabled = true;
				document.getElementById("btn_7").disabled = true;
				document.getElementById("btn_6").disabled = true;
				document.getElementById("btn_5").disabled = true;
				document.getElementById("btn_4").disabled = true;
				document.getElementById("btn_3").disabled = true;
				document.getElementById("btn_2").disabled = true;
			}
			else if(document.getElementById("select").value === "octal")
			{
				for(var i=0;i<30;i++){
					document.getElementsByTagName("button")[i].disabled = false;
				}
				document.getElementById("btn_a").disabled = true;
				document.getElementById("btn_b").disabled = true;
				document.getElementById("btn_c").disabled = true;
				document.getElementById("btn_d").disabled = true;
				document.getElementById("btn_e").disabled = true;
				document.getElementById("btn_f").disabled = true;

				document.getElementById("btn_9").disabled = true;
				document.getElementById("btn_8").disabled = true;
			}
			else if(document.getElementById("select").value === "decimal")
			{
				for(var i=0;i<30;i++){
					document.getElementsByTagName("button")[i].disabled = false;
				}
				document.getElementById("btn_a").disabled = true;
				document.getElementById("btn_b").disabled = true;
				document.getElementById("btn_c").disabled = true;
				document.getElementById("btn_d").disabled = true;
				document.getElementById("btn_e").disabled = true;
				document.getElementById("btn_f").disabled = true;
			}
			else
			{
				for(var i=0;i<30;i++){
					document.getElementsByTagName("button")[i].disabled = false;
				}
			}
		}
    },
    created:function(){
        document.getElementById("btn_a").disabled = true;
		document.getElementById("btn_b").disabled = true;
		document.getElementById("btn_c").disabled = true;
		document.getElementById("btn_d").disabled = true;
		document.getElementById("btn_e").disabled = true;
		document.getElementById("btn_f").disabled = true;
    }
}
</script>
<style scoped>
.calculator{
    background-color: #ffffff;
    /* border: 1px solid black; */
    padding: 5px 0px;
    box-shadow: 1px 1px 1px #bbb;
}
.cal{
	width: 398px;
	margin: 80px auto;
	padding: 30px 20px;
	border: 1px solid #e0e0e0;
	box-shadow: 1px 1px 5px #757575;
	background-color: #bdbdbd;
}
@media only screen and (max-width:1000px){
    .cal{
        width: 90%;
        margin-top: 0%;
    }
}
@media only screen and (max-width:460px){
    .cal{
        width: 398px;
	    margin-top: 0%;
    }
}
.expression{
	text-align: right;
	color: #004d40;
	margin-bottom: 5px;
	height: 20px;
	word-break: break-all;
}
.display{
	background-color: #ffffff;
	color: #757575;
	height: 40px;
	overflow-y: auto;
	border: 1px solid #9e9e9e;
	padding: 30px 20px;
	font-size: 20px;
	word-break: break-all;
}
.select_div{
	margin: 10px 0;
}
.select{
	padding: 5px;
	font-size: 15px;
	outline: none;
	border: none;
	color: #424242;
	background-color: #9e9e9e;
}
.select:hover{
    color: #ffffff;
	background-color: #5d4037;
}
.values{
	padding: 5px;
}
.values .val{
	color: #424242;
}
.values span{
	margin-left: 10px;
	color: #757575;
	word-break: break-all;
}
.val{
	margin: 3px 0;
	font-size: 18px;
}

.keyboard{
	margin-top: 5px;
	padding: 5px;
}
.keyboard .line{
	margin: 5px 0;
}
.keyboard button{
	width: 60px;
	padding: 0px auto;
	padding-top: 8px;
	padding-bottom: 6px;
	font-size: 18px;
	background-color: #9e9e9e;
	border-radius: 5px;
	outline: none;
	border: none;
}
.keyboard button:hover{
	background-color: #004d40;
}
</style>
