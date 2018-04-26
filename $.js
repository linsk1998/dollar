
var $=function(){
	return $.overload(arguments,this);
};
(function(){
	var rules=[];
	function ckeck(ckeckFunc,index){
		return ckeckFunc(this[index]);
	}
	function compare(x, y){//比较函数
		return x.checks.length-y.checks.length;
	}
	$.overload=function(checks,func,target){
		if(target){
			rules.push({
				'checks':checks,
				'func':func,
				'target':target
			});
			rules.sort(compare);
		}else{
			var args=checks;
			var thisVal=func;
			var i=rules.length;
			while(i--){
				var rule=rules[i];
				if(args.callee===rule.func){
					if(rule.checks.length>=args.length){
						if(rule.checks.every(ckeck,args)){
							return rule.target.apply(thisVal,args);
						}
					}
				}
			}
			return $;
		}
	};
})();
$.isArray=function(a){
	return Array.isArray(a);
};
Sky.isDate=function(obj){
	return Object.prototype.toString.call(obj)==='[object Date]';
};
Sky.isRegExp=function(obj){
	return Object.prototype.toString.call(obj)==='[object RegExp]';
};
$.isString=function(obj){
	return Object.prototype.toString.call(obj)==='[object String]';
};
$.isFunction=function(obj){
	return Object.prototype.toString.call(obj)==='[object Function]';
};
$.isNumber=function(obj){
	return Object.prototype.toString.call(obj)==='[object Number]';
};
$.is=function(obj,Clazz){
	obj=Object(obj);
	return obj instanceof Clazz;
};
$.isObject=function(obj){
	var type=typeof obj;
	if(type!=="object"){
		return false;
	}
	type=Object.prototype.toString.call(obj);
	switch(type){
		case '[object String]':
		case '[object Number]':
		case '[object Function]':
		case '[object Boolean]':
			return false;
	}
	return true;
};
$.isDefined=function(obj){
	return obj!==void 0;
};
$.isPlainObject=function(obj){
	var key;
	if(typeof obj !=="object"){
		return false;
	}
	if(obj.toString()!=='[object Object]'){
		return false;
	}
	var hasOwn=Object.prototype.hasOwnProperty;
	try{
		if(obj.constructor && obj.constructor!=Object){
			return false;
		}
	}catch(e){
		return false;
	}
	for( key in obj ){
		if(!hasOwn.call(obj,key)){
			return false;
		}
	}
	return true;
};
$.isArrayLike=function(obj){
	var length=obj.length;
	if(typeof length !="number" || length<0 || isNaN(length) || Math.ceil(length)!=length){
		return false;
	}
	return true;
};
$.isNumeric=function(obj){
	var n=parseFloat(obj);
	return !isNaN(n);
};
if(this.HTMLElement){
	$.isElement=function(obj){
		return obj instanceof HTMLElement;
	};
}else{
	$.isElement=function(obj){
		return obj?obj.nodeType===1:false;
	};
}
$.isDocument=function(obj){
	return obj===document;
};