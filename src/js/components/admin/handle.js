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
				var result = '<div id="ntq-handle-index" class="common-box"><div id="ntq-handle-index-search"><form class="layui-form" action=""><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">职位编号</label><div class="layui-input-inline"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">求职电话</label><div class="layui-input-inline"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label"><button class="layui-btn" lay-submit="" lay-filter="demo1">搜索</button></label><div class="layui-input-inline"></div></div></div></form></div><div id="ntq-handle-index-condition"><div class="layui-form"><table class="layui-table"><colgroup><col width="100"><col width="100"><col width="150"><col width="100"><col></colgroup><thead><tr><th>职位编号</th><th>职位名称</th><th>求职者电话</th><th>微信ID</th><th>学历</th><th>状态</th><th>简历附件</th><th>操作栏位</th><th>企业名称</th></tr></thead><tbody><tr><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td></tr><tr><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td></tr><tr><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td></tr><tr><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td></tr><tr><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td><td>1000110</td></tr></tbody></table><div id="ntq-handle-index-condition-pag"></div></div></div></div>';return result;
			};

			Page.data = function () {
				var param = {};param.HtmUtil = HtmUtil;return param;
			};

			Page.show = function () {
				var request = this.api.rq();


    console.log(layui);
				layui.use(['form', 'layedit', 'laydate', 'laypage', 'layer'], function () {
					var form = layui.form(),
					    layer = layui.layer,
					    layedit = layui.layedit,
					    laydate = layui.laydate,
					    laypage = layui.laypage,
					    layer = layui.layer;
					form.render('');
					 console.log(form);
				});
			};

			return Page;
		};

		return PageObj;
	} });
//# sourceMappingURL=handle.js.map
