"use strict";

PageInfo.register({
	"type": "Obj",
	"info": function info() {

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
				var result = '<div id="ntq-employ-add" class="common-box"><form class="layui-form" action=""><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">招聘电话</label><div class="layui-input-inline"><input type="tel" name="companyPhone" lay-verify="phone" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">企业名称</label><div class="layui-input-inline"><input type="text" name="companyName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">招聘人姓名</label><div class="layui-input-inline"><input type="text" name="recruiterName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">企业类型</label><div class="layui-input-inline"><select name="companyType" lay-filter="aihao"><option value=""></option><option value="1">民营</option><option value="2" selected="">国企</option><option value="3">外企</option></select></div></div><div class="layui-inline"><label class="layui-form-label">公司福利</label><div class="layui-input-inline"><input type="text" name="companyBenefit" lay-verify="required" autocomplete="off" placeholder="" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">融资情况</label><div class="layui-input-inline" style="width: 100px"><select name="financingType" lay-filter="aihao"><option value=""></option><option value="1" selected="">是</option><option value="2">否</option></select></div><div class="layui-input-inline"><input type="checkbox" name="isNewlyEstablished" title="創業"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">简历投递邮箱</label><div class="layui-input-inline"><input type="text" name="resumeMail" lay-verify="email" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">招聘人微信</label><div class="layui-input-inline"><input type="text" name="contactWeixinId" lay-verify="required" autocomplete="off" placeholder="" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">招聘类型</label><div class="layui-input-inline"><select name="recruitType" lay-filter="aihao"><option value=""></option><option value="0">写作</option><option value="1" selected="">内推</option><option value="2">HR招聘</option></select></div></div></div><div class="layui-form-item"><label class="layui-form-label">公司地址</label><div class="layui-input-block"><input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="" class="layui-input"></div></div><div class="layui-form-item layui-form-text"><label class="layui-form-label">公司简介</label><div class="layui-input-block"><textarea placeholder="" name="companySynopsis" class="layui-textarea"></textarea></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">有效期</label><div class="layui-input-inline"><input type="text" name="deadline" id="date" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})"></div></div><div class="layui-inline"><label class="layui-form-label">职位名称</label><div class="layui-input-inline"><input type="text" name="positionName" lay-verify="title" autocomplete="off" placeholder="" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">薪水范围(k)</label><div class="layui-input-inline" style="width: 32px"><input type="text" name="highSalary" placeholder="￥" autocomplete="off" class="layui-input"></div><div class="layui-form-mid">-</div><div class="layui-input-inline" style="width: 32px"><input type="text" name="lowSalary" placeholder="￥" autocomplete="off" class="layui-input"></div><div class="layui-input-inline" style="width: 32px" data-name="isDiscussPersonally"><input type="checkbox" name="isDiscussPersonally" title="面议"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">职位性质</label><div class="layui-input-inline"><select name="positionType" lay-filter="aihao"><option value=""></option><option value="1">全职</option><option value="2" selected="">兼职</option><option value="3">实习</option></select></div></div><div class="layui-inline"><label class="layui-form-label">学历要求</label><div class="layui-input-inline"><select name="qualificationsType" lay-filter="aihao"><option value=""></option><option value="0">写作</option><option value="1" selected="">高中</option><option value="2">高中</option><option value="3">本科</option><option value="4">硕士</option><option value="5">博士</option><option value="6">其他</option><option value="7">不限</option></select></div></div><div class="layui-inline"><label class="layui-form-label">工作经验(年)</label><div class="layui-input-inline" style="width: 75px"><input type="number" name="lowWorkingLife" placeholder="最低" autocomplete="off" class="layui-input"></div><div class="layui-form-mid">-</div><div class="layui-input-inline" style="width: 75px"><input type="number" name="highWorkingLife" placeholder="最高" autocomplete="off" class="layui-input"></div></div></div><div class="layui-form-item"><label class="layui-form-label">工作地址</label><div class="layui-input-block"><input type="text" name="workAddress" lay-verify="title" autocomplete="off" placeholder="" class="layui-input"></div></div><div class="layui-form-item layui-form-text"><label class="layui-form-label">职责描述</label><div class="layui-input-block"><textarea placeholder="" name="positionDesc" class="layui-textarea"></textarea></div></div><div class="layui-form-item layui-form-text"><label class="layui-form-label">任职要求</label><div class="layui-input-block"><textarea placeholder="" name="positionRequirements" class="layui-textarea"></textarea></div></div><div class="layui-form-item"><div class="layui-input-block"><button class="layui-btn" lay-submit lay-filter="ntq-employ-add-btn">立即提交</button> <button type="reset" class="layui-btn layui-btn-primary">重置</button></div></div></form></div>';return result;
			};

			Page.data = function () {
				var param = {};param.HtmUtil = HtmUtil;return param;
			};

			Page.show = function () {

				var request = this.api.rq();

				layui.use(['form', 'layedit', 'laydate'], function () {
					var form = layui.form(),
					    layer = layui.layer,
					    layedit = layui.layedit,
					    laydate = layui.laydate;
					form.render('');

					//自定义验证规则
					form.verify({
						title: function title(value) {
							if (value.length < 5) {
								return '标题至少得5个字符啊';
							}
						},
						pass: [/(.+){6,12}$/, '密码必须6到12位'],
						content: function content(value) {
							layedit.sync(editIndex);
						}
					});

					//监听指定开关
					form.on('switch(switchTest)', function (data) {
						layer.msg('开关checked：' + (this.checked ? 'true' : 'false'), {
							offset: '6px'
						});
						layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis);
					});

					//监听提交
					form.on('submit(ntq-employ-add-btn)', function (data) {

						var obj = data.field;
						var param = {
							"companyInfo": {

								"companyName": obj.companyName,
								"companyPhone": obj.companyPhone,
								"resumeMail": obj.resumeMail,
								"contactWeixinId": obj.contactWeixinId,
								"recruitType": obj.recruitType,
								"companyType": obj.companyType,
								"serverCreateDate": obj.serverCreateDate, //
								"serverUpdateDate": obj.serverUpdateDate, //
								"isNewlyEstablished": obj.isNewlyEstablished == "on" ? 1 : 2, //
								"financingType": obj.financingType,
								"isValid": obj.isValid, //
								"recruiterName": obj.recruiterName,
								"companySynopsis": obj.companySynopsis,
								"companyBenefit": obj.companyBenefit //
							},
							"companyPositionInfosWithBlobList": [{

								"positionName": obj.positionName,
								"highSalary": obj.highSalary,
								"lowSalary": obj.lowSalary,
								"positionType": obj.positionType,
								"qualificationsType": obj.qualificationsType, //
								"lowWorkingLife": obj.lowWorkingLife,
								"highWorkingLife": obj.highWorkingLife,
								"workAddress": obj.workAddress,
								"isValid": obj.isValid, //
								"serverCreateDate": obj.serverCreateDate, //
								"serverUpdateDate": obj.serverUpdateDate, //
								"deadline": obj.deadline, //
								"isDiscussPersonally": obj.isDiscussPersonally == "on" ? 1 : 2, //
								"postionStatus": obj.postionStatus, //
								"publishTime": obj.publishTime, //
								"positionDesc": obj.positionDesc,
								"positionRequirements": obj.positionRequirements

							}]

							//	param ={"companyInfo":{"id":6,"companyName":"测试公司名称11","companyPhone":15123247202,"resumeMail":"247677858@qq.com","contactWeixinId":"weChat","recruitType":1,"companyType":1,"serverCreateDate":1491537753077,"serverUpdateDate":1491537753077,"isNewlyEstablished":1,"financingType":1,"isValid":1,"recruiterName":"杨爽","companySynopsis":"简介","companyBenefit":"公司福利"},"companyPositionInfosWithBlobList":[{"id":"","companyInfosId":"","positionNo":20170411000001,"positionName":"高级开发","highSalary":300,"lowSalary":200,"positionType":1,"qualificationsType":1,"lowWorkingLife":1,"highWorkingLife":3,"workAddress":"天府新区xxx大道","isValid":1,"serverCreateDate":1491894272290,"serverUpdateDate":1491894272290,"deadline":null,"isDiscussPersonally":1,"postionStatus":1,"publishTime":null,"positionDesc":"职位信息","positionRequirements":"具备xxx技能,从入门到放弃"}]};

						};request.addCompanyInfoWithPositionInfoList(JSON.stringify(param), function (cdata) {

							console.log(cdata);
							return false;
						});

						return false;
					});
				});
			};

			return Page;
		};

		return PageObj;
	}
});
//# sourceMappingURL=add.js.map
