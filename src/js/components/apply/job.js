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

			HtmUtil.common4list = function (data) {
				var buf = [];

				var len = data.length;

				for (var i = -0; i < len; i++) {

					var obj = data[i];

					buf.push('<tr>                  ');
					buf.push('     <td><span class="ntq-apply-job-condition-compy" data-po="' + obj.companyInfosId + '">' + obj.companyName + '</td> ');
					buf.push('     <td><span class="ntq-apply-job-condition-num" data-po="' + obj.companyInfosId + '">' + obj.positionNo + '</span></td> ');
					buf.push('     <td>' + obj.positionName + '</td> ');
					buf.push('     <td>' + FunUtil.common4typeMap({ "type": "dealStatus", "val": obj.dealStatus }) + '</td> ');
					buf.push('     <td>' + FunUtil.common4time({ "type": "model1", "str": obj.serverCreateDate }) + '</td> ');
					buf.push(' </tr>         		');
				}

				return buf.join("");
			};
			HtmUtil.common4companyInfo = function (data) {
				var buf = [];
				var obj = data.data;
				buf.push('<form class="layui-form" action="">                                                                                                                                  ');
				buf.push('    <div class="layui-form-item">                                                                                                                                    ');
				buf.push('                                                                                                                                                                     ');
				buf.push('        <div class="layui-inline">                                                                                                                                   ');
				buf.push('            <label class="layui-form-label">企业名称</label>                                                                                                         ');
				buf.push('            <div class="layui-input-inline">                                                                                                                         ');
				buf.push('                <input type="text" name="companyName" value="' + obj.companyName + '" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">                             ');

				buf.push('            </div>                                                                                                                                                   ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('                                                                                                                                                                     ');
				buf.push('        <div class="layui-inline">                                                                                                                                   ');
				buf.push('            <label class="layui-form-label">招聘类型</label>                                                                                                         ');
				buf.push('            <div class="layui-input-inline">                                                                                                                         ');

				buf.push('                <input type="text" name="recruitType" value="' + obj.recruitType + '" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">                             ');

				buf.push('            </div>                                                                                                                                                   ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('                                                                                                                                                                     ');
				buf.push('    </div>                                                                                                                                                           ');
				buf.push('                                                                                                                                                                     ');
				buf.push('    <div class="layui-form-item">                                                                                                                                    ');
				buf.push('        <div class="layui-inline">                                                                                                                                   ');
				buf.push('            <label class="layui-form-label">企业类型</label>                                                                                                         ');
				buf.push('            <div class="layui-input-inline">                                                                                                                         ');

				buf.push('                <input type="text" name="recruitType" value="' + obj.companyType + '" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">                             ');

				buf.push('            </div>                                                                                                                                                   ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('        <div class="layui-inline">                                                                                                                                   ');
				buf.push('            <label class="layui-form-label">公司福利</label>                                                                                                         ');
				buf.push('            <div class="layui-input-inline">                                                                                                                         ');
				buf.push('                <input type="text" name="companyBenefit" value="' + obj.companyBenefit + '"  lay-verify="required" autocomplete="off" placeholder="" class="layui-input">                                ');

				buf.push('            </div>                                                                                                                                                   ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('        <div class="layui-inline">                                                                                                                                   ');
				buf.push('            <label class="layui-form-label">融资情况</label>                                                                                                         ');
				buf.push('            <div class="layui-input-inline" style="width: 100px;">                                                                                                   ');

				buf.push('                <input type="text" name="companyBenefit" value="' + obj.financingType + '"  lay-verify="required" autocomplete="off" placeholder="" class="layui-input">                                ');

				buf.push('            </div>                                                                                                                                                   ');
				buf.push('                                                                                                                                                                     ');
				buf.push('            <div class="layui-input-inline">                                                                                                                         ');
				buf.push('                                                                                                                                                                     ');

				buf.push('                <input type="text" name="isNewlyEstablished" value="' + obj.isNewlyEstablished + '"  lay-verify="required" autocomplete="off" placeholder="" class="layui-input">                                ');

				buf.push('            </div>                                                                                                                                                   ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('    </div>                                                                                                                                                           ');
				buf.push('                                                                                                                                                                     ');
				buf.push('    <div class="layui-form-item">                                                                                                                                    ');
				buf.push('        <label class="layui-form-label">公司地址</label>                                                                                                             ');
				buf.push('        <div class="layui-input-block">                                                                                                                              ');
				buf.push('            <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="" class="layui-input">                                             ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('    </div>                                                                                                                                                           ');
				buf.push('                                                                                                                                                                     ');
				buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                    ');
				buf.push('        <label class="layui-form-label">公司简介</label>                                                                                                             ');
				buf.push('        <div class="layui-input-block">                                                                                                                         ');
				buf.push('            <textarea placeholder="" name="companySynopsis"  class="layui-textarea">' + obj.companySynopsis + '</textarea>                                                                       ');
				buf.push('        </div>                                                                                                                                                       ');
				buf.push('    </div>                                                                                                                                                           ');
				buf.push('                                                                                                                                                                     ');
				buf.push('</form>																																								');

				return buf.join("");
			};

			HtmUtil.common4update = function (data) {
				var obj = data.data;
				var buf = [];
				buf.push('<div id="ntq-employ-job-update">');
				buf.push('<form class="layui-form"  >');
				buf.push('<div class="layui-form-item"> <label class="layui-form-label">职位编号</label> <div class="layui-input-inline"> <input type="text" disabled="" name="positionNo" lay-verify="title" autocomplete="off" value="' + obj.positionNo + '" class="layui-input"></div> </div>');
				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">有效期</label>                                                                                                                                   ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('                <input type="text" name="deadline" id="date" lay-verify="date"  value="' + obj.deadline + '" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">            ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">职位名称</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('                <input type="text" name="positionName" lay-verify="title" autocomplete="off" value="' + obj.positionName + '" placeholder="请输入标题" class="layui-input">                                                          ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">薪水范围(k)</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ');
				buf.push('                <input type="text" name="lowSalary" placeholder="￥"  value="' + obj.lowSalary + '" autocomplete="off" class="layui-input">                                                                                 ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('            <div class="layui-form-mid">-</div>                                                                                                                                              ');
				buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ');
				buf.push('                <input type="text" name="highSalary" placeholder="￥" value="' + obj.highSalary + '" autocomplete="off" class="layui-input">                                                                                 ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ');
				buf.push('                <input type="checkbox" name="isDiscussPersonally" title="面议" ' + (obj.isDiscussPersonally == 1 ? "checked" : "") + '>                                                                                                                      ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');
				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">学历要求</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('<select name="qualificationsType" lay-filter="aihao">   ');
				buf.push('     <option value="1"  ' + (obj.qualificationsType == 1 ? 'selected=""' : false) + '">高中</option>        ');
				buf.push('     <option value="2"  ' + (obj.qualificationsType == 2 ? 'selected=""' : false) + '">高中</option>                    ');
				buf.push('     <option value="3"  ' + (obj.qualificationsType == 3 ? 'selected=""' : false) + '">本科</option>                    ');
				buf.push('     <option value="4"  ' + (obj.qualificationsType == 4 ? 'selected=""' : false) + '">硕士</option>                    ');
				buf.push('     <option value="5"  ' + (obj.qualificationsType == 5 ? 'selected=""' : false) + '">博士</option>                    ');
				buf.push('     <option value="6"  ' + (obj.qualificationsType == 6 ? 'selected=""' : false) + '">其他</option>                    ');
				buf.push('     <option value="7"  ' + (obj.qualificationsType == 7 ? 'selected=""' : false) + '">不限</option>                    ');
				buf.push(' </select>                                              ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">职位性质</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('                <select name="positionType" lay-filter="aihao">                                                                                                                                  ');
				buf.push('                    <option value="1"  ' + (obj.positionType == 1 ? 'selected=""' : false) + '>全职</option>    ');
				buf.push('                    <option value="2"  ' + (obj.positionType == 2 ? 'selected=""' : false) + '>兼职</option>  		');
				buf.push('                    <option value="3"  ' + (obj.positionType == 3 ? 'selected=""' : false) + '>实习</option>  			');
				buf.push('                </select>                                                                                                                                                                    ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('<div class="layui-inline">                                                                                      ');
				buf.push('    <label class="layui-form-label">工作经验(年)</label>                                                        ');
				buf.push('     <div class="layui-input-inline" style="width: 75px;">                                                      ');
				buf.push('        <input type="number" name="lowWorkingLife" value="' + obj.lowWorkingLife + '" placeholder="最低" autocomplete="off" class="layui-input">   ');
				buf.push('    </div>                                                                                                      ');
				buf.push('    <div class="layui-form-mid">-</div>                                                                         ');
				buf.push('    <div class="layui-input-inline" style="width: 75px;">                                                       ');
				buf.push('        <input type="number" name="highWorkingLife" value="' + obj.highWorkingLife + '" placeholder="最高" autocomplete="off" class="layui-input">  ');
				buf.push('    </div>                                                                                                      ');
				buf.push('</div>');

				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');
				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('        <label class="layui-form-label">工作地址</label>                                                                                                                                     ');
				buf.push('        <div class="layui-input-block">                                                                                                                                                      ');
				buf.push('            <input type="text" value="' + obj.workAddress + '" name="workAddress" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">                                                              ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');
				buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ');
				buf.push('        <label class="layui-form-label">职责描述</label>                                                                                                                                     ');
				buf.push('        <div class="layui-input-block">                                                                                                                                                      ');
				buf.push('            <textarea placeholder="" name="positionDesc" class="layui-textarea">' + obj.positionDesc + '</textarea>                                                                                                               ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ');
				buf.push('        <label class="layui-form-label">任职要求</label>                                                                                                                                     ');
				buf.push('        <div class="layui-input-block">                                                                                                                                                      ');
				buf.push('           <textarea placeholder=" " name="positionRequirements" class="layui-textarea">' + obj.positionRequirements + '</textarea>                                                                                                         ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');

				buf.push('</form>																																														');
				buf.push('</div>');

				return buf.join("");
			};

			FunUtil.Global = {
				"pageNo": 1,
				"pageSize": 2
			};

			FunUtil.common4time = function (data) {

				/* *
     *  格式
     * model 1 : yyyy/MM/dd
     * 
     * 
     * */

				if (!String.HasText(data.str)) return "无";

				var execuFun = {};
				var result = "";
				execuFun.model1 = function () {
					var d = new Date(data.str);

					result = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
				};

				execuFun[data.type]();

				return result;
			};

			FunUtil.common4search = function (data) {

				var param = {};
				var execuFun = {};

				execuFun.init = function () {
					FunUtil.Global.pageNo = 1;
					FunUtil.Global.pageSize = 2;
				};
				execuFun.next = function () {
					FunUtil.Global.pageNo += 1;
					FunUtil.Global.pageSize = 2;
				};

				execuFun[data.type]();
			};

			FunUtil.update4evet = function (request) {
				var $cinfo = $("span.ntq-apply-job-condition-num");
				var $compy = $("span.ntq-apply-job-condition-compy");

				$cinfo.unbind("click").bind("click", function () {

					request.getCompanyPositionInfoById({ "positionId": $(this).data("po") }, function (cdata) {

						layer.open({
							type: 1,
							content: HtmUtil.common4update({ "data": cdata.data }),
							area: ['1080px', '578px'], //宽高
							skin: 'layui-layer-demo',
							success: function success() {

								layui.use(['form', 'layedit', 'laydate', 'laypage', 'layer'], function () {
									var form = layui.form(),
									    layer = layui.layer,
									    layedit = layui.layedit,
									    laydate = layui.laydate,
									    laypage = layui.laypage,
									    layer = layui.layer;
									form.render('');
								});
							}
						});
					});
				});

				$compy.unbind("click").bind("click", function () {

					request.getCompanyInfoById({ "companyInfoId": $(this).data("po") }, function (cdata) {

						layer.open({
							type: 1,
							content: HtmUtil.common4companyInfo({ "data": cdata.data }),
							area: ['1080px', '578px'], //宽高
							skin: 'layui-layer-demo',
							success: function success() {

								layui.use(['form', 'layedit', 'laydate', 'laypage', 'layer'], function () {
									var form = layui.form(),
									    layer = layui.layer,
									    layedit = layui.layedit,
									    laydate = layui.laydate,
									    laypage = layui.laypage,
									    layer = layui.layer;
									form.render('');
								});
							}
						});
					});
				});
			};

			FunUtil.common4typeMap = function (data) {

				var result = "";
				var execuFun = {};

				execuFun.dealStatus = function () {
					switch (data.val) {
						case 1:
							result = "待处理";break;
						case 2:
							result = "内推圈简历筛选未通过";break;
						case 3:
							result = "已投递至企业";break;
						case 4:
							result = "企业筛选未通过";break;
						case 5:
							result = "企业筛选通过";break;
						case 6:
							result = "面试未通过";break;
						default:
							result = "面试成功";break;
					}
				};

				execuFun[data.type]();
				return result;
			};

			HtmUtil.layout = function () {
				var result = '<div id="ntq-apply-job" class="common-box"><div id="ntq-apply-job-search"><form class="layui-form" action=""><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">职位编号</label><div class="layui-input-inline"><input type="text" name="positionNo" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">职位名称</label><div class="layui-input-inline"><input type="text" name="positionName" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">公司名称</label><div class="layui-input-inline"><input type="text" name="companyName" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">投递时间</label><div class="layui-input-inline"><input type="text" name="serverCreateDate" id="date" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})"></div><div class="layui-inline"><label class="layui-form-label">状态</label><div class="layui-input-inline"><select name="dealStatus" lay-filter="aihao"><option value="1" selected="">待处理</option><option value="2">内推圈简历筛选未通过</option><option value="3">已投递至企业</option><option value="4">企业筛选未通过</option><option value="5">企业筛选通过</option><option value="6">面试未通过</option><option value="7">面试成功</option></select></div></div><div class="layui-inline"><label class="layui-form-label"><button class="layui-btn" lay-submit="" lay-filter="ntq-apply-job-condition-sbtn">搜索</button></label><div class="layui-input-inline"></div></div></div></div></form></div><div id="ntq-apply-job-condition"><table class="layui-table" lay-even="" lay-skin="row"><colgroup><col width="150"><col width="150"><col width="200"><col></colgroup><thead><tr><th>公司名称</th><th>职位编号</th><th>职位名称</th><th>当前状态</th><th>投递时间</th></tr></thead><tbody id="ntq-apply-job-condition-table"></tbody></table><div id="ntq-apply-job-condition-pag"></div></div></div>';return result;
			};

			Page.data = function () {
				var param = {};param.HtmUtil = HtmUtil;return param;
			};

			Page.show = function () {
				var request = this.api.rq();
				layui.use(['form', 'layedit', 'laydate', 'laypage', 'layer'], function () {
					var form = layui.form(),
					    layer = layui.layer,
					    layedit = layui.layedit,
					    laydate = layui.laydate,
					    laypage = layui.laypage,
					    layer = layui.layer;
					form.render('');

					form.on('submit(ntq-apply-job-condition-sbtn)', function (data) {
						FunUtil.common4search({ "type": "init" });
						var obj = data.field;
						var $table = $("#ntq-apply-job-condition-table");

						//obj.serverCreateDate ="";
						var param = {
							"pageNo": FunUtil.Global.pageNo,
							"pageSize": FunUtil.Global.pageSize,
							"params": {
								"companyName": obj.companyName,
								"positionName": obj.positionName,
								"serverCreateDate": obj.serverCreateDate,
								"positionNo": obj.positionNo
							}
						};

						var Fun4Help = function Fun4Help(type) {
							request.queryJobSeekerPositionVoList(JSON.stringify(param), function (cdata) {
								var pages = cdata.totalRecord;
								pages = parseInt(pages / 2) + (pages % 2 > 0 ? 1 : 0);

								$table.html(HtmUtil.common4list(cdata.results));
								FunUtil.update4evet(request);

								if (type == "init") {
									laypage({ cont: 'ntq-apply-job-condition-pag', pages: pages, jump: function jump(obj, first) {
											if (!first) {
												FunUtil.Global.pageNo = obj.curr;
												param.pageNo = obj.curr;;
												Fun4Help("next");
											}
										}
									});
								}
							});
						};

						Fun4Help("init");

						return false;
					});
				});
			};

			return Page;
		};

		return PageObj;
	} });
//# sourceMappingURL=job.js.map
