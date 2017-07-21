"use strict";

PageInfo.register({ "type": "Obj", "info": function info() {

		var PageObj = {};

		PageObj.require = {
			"$": "jquery",
			"layui": "layui",
			"api": "/src/js/components/common/data-api"
		};

		PageObj.page = function () {

			var FunUtil = {};
			var HtmUtil = {};
			var Page = {};

			HtmUtil.layout = function () {
				var result = '<div id="ntq-index"><div class="ntq-index-apply"><div class="ntq-index-apply-btn">我要求职</div></div><div class="ntq-index-employ"><div class="ntq-index-employ-btn">我要招聘</div></div></div>';return result;
			};

			Page.data = function () {
				var param = {};param.HtmUtil = HtmUtil;return param;
			};

			Page.show = function () {
				console.log(this);

				var $btn4apply = $("div.ntq-index-apply-btn");
				var $btn4employ = $("div.ntq-index-employ-btn");

				$btn4apply.unbind("click").bind("click", function () {
					PageInfo.FunUtil.common4openUrl({ "url": 'apply/index?uuid=123' });
				});

				$btn4employ.unbind("click").bind("click", function () {
					PageInfo.FunUtil.common4openUrl({ "url": 'employ/index' });
				});
			};

			return Page;
		};

		return PageObj;
	} });
//# sourceMappingURL=index.js.map
