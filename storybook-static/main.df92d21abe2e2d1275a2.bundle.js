(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1119:function(module,exports,__webpack_require__){"use strict";__webpack_require__(4),__webpack_require__(53),__webpack_require__(44),__webpack_require__(34),__webpack_require__(46),__webpack_require__(1120),__webpack_require__(1121),__webpack_require__(7),__webpack_require__(45);var _clientApi=__webpack_require__(60),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1122);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1123:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(381).configure)([__webpack_require__(1124)],module,!1)}).call(this,__webpack_require__(114)(module))},1124:function(module,exports,__webpack_require__){var map={"./vendingMachine/VendingMachine.stories.js":1133};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1124},1133:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(275),__webpack_require__(5);var jsx_runtime=__webpack_require__(32),react=__webpack_require__(0),Container=(__webpack_require__(15),__webpack_require__(14),__webpack_require__(21),__webpack_require__(6),__webpack_require__(1126),__webpack_require__(199),__webpack_require__(7),__webpack_require__(11),__webpack_require__(17),__webpack_require__(142),__webpack_require__(1156)),Card=__webpack_require__(1158),Button=__webpack_require__(1159),Accordion=__webpack_require__(1160),ListItem=__webpack_require__(1161),ListItemText=__webpack_require__(1162);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var vendingMachine_VendingMachine=function VendingMachine(){var products=[{price:125,name:"Air Max Plus"},{price:150,name:"Air Max 270"},{price:150,name:"Epic React Flyknit"},{price:350,name:"My Shoe"}],_useState2=_slicedToArray(Object(react.useState)(0),2),moneyIn=_useState2[0],setMoneyIn=_useState2[1],_useState4=_slicedToArray(Object(react.useState)({100:0,50:0,25:0,10:0,5:0,1:0}),2),moneyObj=_useState4[0],updateMoneyObj=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(),2),selectedIndex=_useState6[0],setSelectedIndex=_useState6[1],_useState8=_slicedToArray(Object(react.useState)(!1),2),expanded=_useState8[0],_useState10=(_useState8[1],_slicedToArray(Object(react.useState)("Insert some money"),2)),caption=_useState10[0],setCaption=_useState10[1],handleClick=function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(e){var updateBill;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,setMoneyIn(moneyIn+e);case 2:return console.log("moneyIn + e:",moneyIn),_context.next=5,setCaption("You've inserted: ");case 5:updateBill=moneyObj[e]=moneyObj[e]+1,updateMoneyObj(Object.assign({},moneyObj,updateBill));case 7:case"end":return _context.stop()}}),_callee)})));return function handleClick(_x){return _ref.apply(this,arguments)}}(),handleListItemClick=function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(e,idx){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:setSelectedIndex(idx);case 1:case"end":return _context2.stop()}}),_callee2)})));return function handleListItemClick(_x2,_x3){return _ref2.apply(this,arguments)}}(),handleMoneyBack=function handleMoneyBack(e){if(console.log("e:",e),setCaption("reset"),console.log("products[selectedIndex]:",products[selectedIndex]),"cancel"===e&&setCaption("Your refund amount:"),products[selectedIndex]){setCaption("nothing selected");var _products$selectedInd=products[selectedIndex],price=_products$selectedInd.price;_products$selectedInd.name;console.log("price:",price);var change=moneyIn-price;console.log("change:",change),moneyObj[100]=0!==change?Math.trunc(change/100):0,change-=100*moneyObj[100],moneyObj[50]=0!==change?Math.trunc(change/50):0,change-=50*moneyObj[50],moneyObj[25]=0!==change?Math.trunc(change/25):0,change-=25*moneyObj[25],moneyObj[10]=0!==change?Math.trunc(change/10):0,change-=10*moneyObj[10],moneyObj[5]=0!==change?Math.trunc(change/5):0,change-=5*moneyObj[5],moneyObj[1]=0!==change?Math.trunc(change/1):0,change-=1*moneyObj[1]}setCaption("your change is"),console.log("moneyObj:",moneyObj)},MoneyList=function MoneyList(props){var values=props.values;return Object.keys(values).map((function(o){return Object(jsx_runtime.jsxs)("div",{children:["$",Number(o)," : ",moneyObj[Number(o)]]})}))};return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsxs)(Container.a,{children:[Object(jsx_runtime.jsxs)(Card.a,{children:[Object(jsx_runtime.jsxs)("div",{children:["Insert payment:",Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(v){return handleClick(1)},color:"primary",children:"$1"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(v){return handleClick(5)},color:"secondary",children:"$5"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(v){return handleClick(10)},color:"secondary",children:"$10"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(v){return handleClick(25)},color:"secondary",children:"$25"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(v){return handleClick(50)},color:"secondary",children:"$50"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(v){return handleClick(100)},color:"secondary",children:"$100"})]}),Object(jsx_runtime.jsx)(Accordion.a,{expanded:expanded,children:Object(jsx_runtime.jsx)("div",{children:products.length>0&&products.map((function(n,idx){if(n.price<=moneyIn)return Object(jsx_runtime.jsx)(ListItem.a,{selected:selectedIndex===idx,button:!0,onClick:function onClick(event){return handleListItemClick(event,idx)},children:Object(jsx_runtime.jsxs)(ListItemText.a,{children:[n.name," - $",n.price]})},idx)}))})}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(e){return handleMoneyBack("purchase")},color:"secondary",children:"Purchase"}),Object(jsx_runtime.jsx)(Button.a,{variant:"contained",onClick:function onClick(e){return handleMoneyBack("cancel")},color:"secondary",children:"Cancel"})]}),Object(jsx_runtime.jsxs)(Card.a,{children:[caption,moneyObj&&Object(jsx_runtime.jsx)(MoneyList,{values:moneyObj},"1")]})]})})},VendingMachine_stories_VendingMachineTemplate=(__webpack_exports__.default={title:"VendingMachine",component:vendingMachine_VendingMachine},function VendingMachineTemplate(args){return Object(jsx_runtime.jsx)(vendingMachine_VendingMachine,Object.assign({},args))});VendingMachine_stories_VendingMachineTemplate.displayName="VendingMachineTemplate";var Default=VendingMachine_stories_VendingMachineTemplate.bind({});Default.parameters=Object.assign({storySource:{source:"args => <VendingMachine {...args}/>"}},Default.parameters)},507:function(module,exports,__webpack_require__){__webpack_require__(508),__webpack_require__(672),__webpack_require__(673),__webpack_require__(838),__webpack_require__(1057),__webpack_require__(1090),__webpack_require__(1098),__webpack_require__(1110),__webpack_require__(1112),__webpack_require__(1117),__webpack_require__(1119),module.exports=__webpack_require__(1123)},581:function(module,exports){},673:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(381)}},[[507,1,2]]]);
//# sourceMappingURL=main.df92d21abe2e2d1275a2.bundle.js.map