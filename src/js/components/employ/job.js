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

			HtmUtil.common4num = function (data) {
				var buf = [];
				data = data.results;
				var len = data.length;
				buf.push('<div id="ntq-employ-job-num">');

				buf.push('<table class="layui-table" lay-even="" lay-skin="row">');
				buf.push('	<thead>');
				buf.push('		<tr>');
				buf.push('			<th>姓名</th>');
				buf.push('			<th>学历</th>');
				buf.push('			<th>电话</th>');
				buf.push('			<th>工作年限</th>');
				buf.push('		</tr>');
				buf.push('	</thead>');
				buf.push('	<tbody>');

				for (var i = 0; i < len; i++) {
					var obj = data[i];

					buf.push('		<tr>');
					buf.push('			<td>' + obj.jobSeekerName + '</td>');
					buf.push('			<td>高级JAVA</td>');
					buf.push('			<td>' + obj.jobSeekerPhone + '</td>');
					buf.push('			<td>' + obj.recordOfFormalSchooling + '</td>');
					buf.push('		</tr>');
				}

				buf.push('	 </tbody>');
				buf.push('</table>');
				buf.push('</div>');

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

				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('      <div class="layui-input-block">                                                                                                                                                        ');
				buf.push('        <button class="layui-btn" lay-submit lay-filter="ntq-employ-job-btn">立即提交</button>                                                                                                         ');
				buf.push('        <button type="reset" class="layui-btn layui-btn-primary">重置</button>                                                                                                               ');
				buf.push('      </div>                                                                                                                                                                                 ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('</form>																																														');
				buf.push('</div>');

				return buf.join("");
			};

			HtmUtil.common4add = function () {
				var buf = [];
				buf.push('<div id="ntq-employ-job-update">');
				buf.push('<form class="layui-form"  >');
				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">有效期</label>                                                                                                                                   ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('                <input type="text" name="deadline" id="date" lay-verify="date"   placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">            ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">职位名称</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('                <input type="text" name="positionName" lay-verify="title" autocomplete="off"   placeholder="请输入标题" class="layui-input">                                                          ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">薪水范围(k)</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ');
				buf.push('                <input type="text" name="lowSalary" placeholder="￥"    autocomplete="off" class="layui-input">                                                                                 ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('            <div class="layui-form-mid">-</div>                                                                                                                                              ');
				buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ');
				buf.push('                <input type="text" name="highSalary" placeholder="￥"   autocomplete="off" class="layui-input">                                                                                 ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ');
				buf.push('                <input type="checkbox" name="isDiscussPersonally" title="面议" >                                                                                                                      ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');
				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">学历要求</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('<select name="qualificationsType" lay-filter="aihao">   ');
				buf.push('     <option value="1"  >高中</option>        ');
				buf.push('     <option value="2"  >高中</option>                    ');
				buf.push('     <option value="3"  >本科</option>                    ');
				buf.push('     <option value="4"  >硕士</option>                    ');
				buf.push('     <option value="5"  >博士</option>                    ');
				buf.push('     <option value="6"  >其他</option>                    ');
				buf.push('     <option value="7"  >不限</option>                    ');
				buf.push(' </select>                                              ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('        <div class="layui-inline">                                                                                                                                                           ');
				buf.push('            <label class="layui-form-label">职位性质</label>                                                                                                                                 ');
				buf.push('            <div class="layui-input-inline">                                                                                                                                                 ');
				buf.push('                <select name="positionType" lay-filter="aihao">                                                                                                                                  ');
				buf.push('                    <option value="1"  >全职</option>    ');
				buf.push('                    <option value="2"  >兼职</option>  		');
				buf.push('                    <option value="3"  >实习</option>  			');
				buf.push('                </select>                                                                                                                                                                    ');
				buf.push('            </div>                                                                                                                                                                           ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('<div class="layui-inline">                                                                                      ');
				buf.push('    <label class="layui-form-label">工作经验(年)</label>                                                        ');
				buf.push('     <div class="layui-input-inline" style="width: 75px;">                                                      ');
				buf.push('        <input type="number" name="lowWorkingLife"  placeholder="最低" autocomplete="off" class="layui-input">   ');
				buf.push('    </div>                                                                                                      ');
				buf.push('    <div class="layui-form-mid">-</div>                                                                         ');
				buf.push('    <div class="layui-input-inline" style="width: 75px;">                                                       ');
				buf.push('        <input type="number" name="highWorkingLife"   placeholder="最高" autocomplete="off" class="layui-input">  ');
				buf.push('    </div>                                                                                                      ');
				buf.push('</div>');

				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');
				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('        <label class="layui-form-label">工作地址</label>                                                                                                                                     ');
				buf.push('        <div class="layui-input-block">                                                                                                                                                      ');
				buf.push('            <input type="text"   name="workAddress" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">                                                              ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');
				buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ');
				buf.push('        <label class="layui-form-label">职责描述</label>                                                                                                                                     ');
				buf.push('        <div class="layui-input-block">                                                                                                                                                      ');
				buf.push('            <textarea placeholder="" name="positionDesc" class="layui-textarea"></textarea>                                                                                                               ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ');
				buf.push('        <label class="layui-form-label">任职要求</label>                                                                                                                                     ');
				buf.push('        <div class="layui-input-block">                                                                                                                                                      ');
				buf.push('           <textarea placeholder=" " name="positionRequirements" class="layui-textarea"></textarea>                                                                                                         ');
				buf.push('        </div>                                                                                                                                                                               ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('                                                                                                                                                                                             ');

				buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
				buf.push('      <div class="layui-input-block">                                                                                                                                                        ');
				buf.push('        <button class="layui-btn" lay-submit lay-filter="ntq-employ-job-btn">立即提交</button>                                                                                                         ');
				buf.push('        <button type="reset" class="layui-btn layui-btn-primary">重置</button>                                                                                                               ');
				buf.push('      </div>                                                                                                                                                                                 ');
				buf.push('    </div>                                                                                                                                                                                   ');
				buf.push('</form>																																														');
				buf.push('</div>');

				return buf.join("");
			};

			FunUtil.Global = {
				"pageNo": 1,
				"pageSize": 2,
				"type": 0
			};

			HtmUtil.common4list = function (data) {

				var buf = [];
				var len = data.length;

				for (var i = 0; i < len; i++) {

					var obj = data[i];
					buf.push('<tr>      ');

					buf.push('  <th><input class="ntq-employ-job-condition-checked" type="checkbox" name="" title="" lay-skin="primary" data-po="' + obj.id + '" ></th>');
					buf.push('	<td><span class="ntq-employ-job-condition-po" data-po="' + obj.id + '">' + obj.positionNo + '<span></td>   ');
					buf.push('	<td>' + obj.positionName + '</td>  ');
					buf.push('	<td>' + FunUtil.common4time({ "type": "model1", "str": obj.serverCreateDate }) + '</td>   ');
					buf.push('	<td><span class="ntq-employ-job-condition-num">' + (String.HasText(obj.resumeCount) ? obj.resumeCount : 0) + '</span></td>  ');
					buf.push('	<td>' + FunUtil.common4time({ "type": "model1", "str": obj.publishTime }) + '</td> ');
					buf.push('</tr>        ');
				}

				return buf.join("");
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

			FunUtil.update4evet = function (request) {

				var $inputs = $("input.ntq-employ-job-condition-checked");

				$("span.ntq-employ-job-condition-num").unbind("click").bind("click", function () {

					var callback = function callback(data) {

						layer.open({
							type: 1,
							skin: 'layui-layer-demo',
							area: ['420px', '240px'], //宽高
							content: HtmUtil.common4num(data),
							success: function success() {}
						});
					};

					var param = {
						"pageNo": 1,
						"pageSize": 15,
						"params": {
							"positionId": 13
						}
					};

					request.queryJobSeekerInfoVoList(JSON.stringify(param), callback);
				});

				$("span.ntq-employ-job-condition-po").unbind("click").bind("click", function () {

					var $this = $(this);

					request.getCompanyPositionInfoById({ "positionId": $this.data("po") }, function (cdata) {

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

									form.on('submit(ntq-employ-job-btn)', function (data) {
										console.log(data);

										var obj = data.field;
										delete obj.deadline;

										obj.isDiscussPersonally = obj.isDiscussPersonally == "on" ? 1 : 2;
										obj.postionStatus = FunUtil.Global.type;

										request.updateOrInsertCompanyPositionInfo(JSON.stringify(obj), function (ddata) {
											layer.msg(ddata.message);
											$("a.layui-layer-close").trigger("click");
											//needs 请求当前分页 update

											return false;
										});

										return false;
									});
								});
							}
						});
					});
				});

				$inputs.unbind("click").bind("click", function () {
					var $this = $(this);

					$inputs.each(function () {
						$(this).attr('checked', true);
					});

					/*var isChecked = $this.attr("checked");
     $this.attr('checked',true);*/
				});
			};

			HtmUtil.layout = function () {
				var result = '<div id="ntq-employ-job"><div id="ntq-employ-job-search" class="common-box"><form class="layui-form" action=""><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">职位名称</label><div class="layui-input-inline"><input type="text" name="positionName" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">处理状态</label><div class="layui-input-inline"><select name="postionStatus" lay-filter="aihao"><option value="1" selected="">待审核</option><option value="2">已发布</option><option value="3">拒绝</option><option value="4">已下架</option><option value="5">待下架</option></select></div><button class="layui-btn" lay-submit="" lay-filter="ntq-employ-job-condition-sbtn">搜索</button></div></div></form></div><div class="layui-form"><div id="ntq-employ-job-condition" class="common-box"><button class="layui-btn layui-btn-normal" id="ntq-employ-job-condition-add">新增职位</button> <button class="layui-btn layui-btn-warm" id="ntq-employ-job-condition-update">重新发布</button> <button id="ntq-employ-job-condition-down" class="layui-btn layui-btn-danger">下架</button><table class="layui-table" lay-even="" lay-skin="row"><colgroup><col width="150"><col width="150"><col width="200"><col></colgroup><thead><tr><th></th><th>职位编号</th><th>职位名称</th><th>创建时间</th><th>求职投放数量</th><th>发布时间</th></tr></thead><tbody id="ntq-employ-job-condition-table"></tbody></table><div id="ntq-employ-job-condition-pag"></div></div></div></div>';return result;
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

					form.on('submit(ntq-employ-job-btn)', function (data) {
						var param = data.field;
						param.isDiscussPersonally = data.field.isDiscussPersonally == "on" ? 1 : 2;

						request.addCompanyPositionInfo(JSON.stringify(data.field), function (cdata) {});

						return false;
					});

					form.on('submit(ntq-employ-job-condition-sbtn)', function (data) {
						FunUtil.common4search({ "type": "init" });
						var obj = data.field;
						var $table = $("#ntq-employ-job-condition-table");
						obj.positionName = "a";

						var param = {
							"pageNo": FunUtil.Global.pageNo,
							"pageSize": FunUtil.Global.pageSize,
							"params": {
								"positionName": obj.positionName,
								"publishTime": obj.publishTime,
								"postionStatus": obj.postionStatus
							}
						};
						FunUtil.Global.type = obj.postionStatus;

						var Fun4Help = function Fun4Help(type) {
							request.queryCompanyPositionInfoListByCondition(JSON.stringify(param), function (cdata) {
								var pages = cdata.totalRecord;
								pages = parseInt(pages / 2) + (pages % 2 > 0 ? 1 : 0);

								$table.html(HtmUtil.common4list(cdata.results));
								FunUtil.update4evet(request);

								form.render('');

								if (type == "init") {
									laypage({ cont: 'ntq-employ-job-condition-pag', pages: pages, jump: function jump(obj, first) {
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

				$("#ntq-employ-job-condition-add").unbind("click").bind("click", function () {

					layer.open({
						type: 1,
						content: HtmUtil.common4add(),
						area: ['1080px', '511px'], //宽高
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

								form.on('submit(ntq-employ-job-btn)', function (data) {
									console.log(data.field);
									var param = data.field;
									param.isDiscussPersonally = data.field.isDiscussPersonally == "on" ? 1 : 2;
									request.addCompanyPositionInfo(JSON.stringify(data.field), function (ddata) {
										layer.msg(ddata.message);
										$("a.layui-layer-close").trigger("click");
									});

									return false;
								});
							});
						}
					});
				});

				$("#ntq-employ-job-condition-down").unbind("click").bind("click", function () {

					var param = {
						"positionId": 2
					};
					request.withDrawCompanyPositionInfo(param, function (cdata) {
						console.log(cdata);
					});
				});
			};

			return Page;
		};

		return PageObj;
	} });
//# sourceMappingURL=job.js.map
