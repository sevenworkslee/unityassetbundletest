System.register("bundle://minigame/_virtual/minigame",["./TestMiniGame.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("bundle://minigame/_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(o,r){return(e=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(o,r)}t({inheritsLoose:function(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,e(t,o)},setPrototypeOf:e})}}}));

System.register("bundle://minigame/_virtual/TestMiniGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,i,o;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,i=e._decorator,o=e.Component}],execute:function(){var r;t._RF.push({},"8e77dgPfl1PzKEKT+f8UYEO","TestMiniGame",void 0);var c=i.ccclass;i.property,e("TestMiniGame",c("TestMiniGame")(r=function(e){function t(){return e.apply(this,arguments)||this}return n(t,e),t.prototype.onClickReturnToMain=function(){console.log("onClickReturnToMain")},t}(o))||r);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/minigame', 'bundle://minigame/_virtual/minigame'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});