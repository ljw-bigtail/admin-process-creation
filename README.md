# 创建流程

包含拖拽与自定义流程 一屏显示6张卡片

## 接口文檔

### 流程查询

> GET  XX/process/list

``` javascript
// 如果需要分页，传以下参数
var params = {
	rows: 30,
	page: 0,
	sort: 'id',
	sortOrder: 'desc'
}

// 按照需求只需要4条数据，前端分页就行
var result = {
	content: [{
		id: '1',
		name: '社会投资类（核准类）',
		comments: '测试中，请勿操作',
		createAt: '2019-09-07 09:11:44',
		updateAt: '2019-09-07 09:11:44',
	},{
		id: '2',
		name: '政府投资类（不新增建设用地）',
		comments: '测试中，请勿操作',
		createAt: '2019-09-07 09:11:44',
		updateAt: '2019-09-07 09:11:44',
	},{
		id: '3',
		name: '政府投资类(新增建设用地)',
		comments: '测试中，请勿操作',
		createAt: '2019-09-07 09:11:44',
		updateAt: '2019-09-07 09:11:44',
	},{
		id: '4',
		name: '社会投资类（核准类）',
		comments: '',
		createAt: '2019-09-07 09:11:44',
		updateAt: '2019-09-07 09:11:44',
	},],
	first: true,
	last: false,
	number: 0,
	numberOfElements: 30,
	size: 30,
	sort: null,
	totalElements: 300,
	totalPages: 10,
}     
```

### 流程新增/编辑

> POST XX/process

``` javascript
// 新增
var params = {
	name: '政府投资类（不新增建设用地）',
	comments: '测试中，请勿操作',
	id: '4',// 只有编辑的时候传
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

### 流程删除

> DELETE XX/process

``` javascript
// 删除
var params = {
	id: '4',
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

### 流程详情

> GET XX/detail

``` javascript
// 新增
var params = {
	id: '4',// 只有编辑的时候传
}

var result = {
	title: '邢台市政府投资工程建设项目审批服务流程图（新增建设用地）',
	description: '1、本流程图适用于房屋建筑和市政基础设施工程建设项目，交通、水利、能源等专业领域的工程建设项目审批流程图由相关行业主管部门另行制定2、本流程图仅包括工程建设项目主要审批事项，未涵盖所有审批事项；部分事项办理时序并非法定前后置关系。3、行政审批并行办理事项、技术审查或中介服务事项与行政审批主流程事项并联或并行办理，不另行计算用时。',
	// 主流程，长度不超过8（上回说是不能太长，但是要大于6，所以建议是8）
	card_main: [{
		id: 1,
		title: '阶段1',
		state: '10', // 0 创建完 | 10 完成 | -10 挂起，  文档中暂时有这三种状态
		commits: '测试111',
		node:[{
			id: 1,
			commits: '测试111',
			text: '第一阶段可并联或并行办理事项第一阶段可并联或并行办理事项第一阶段可并联或并行办理事项',
			state: '10', // 0 创建完 | 10 完成 | -10 挂起，  文档中暂时有这三种状态
		},{
			id: 2,
			text: '测试2',
		},{
			id: 3,
			text: '测试3',
		},{
			id: 4,
			text: '测试4',
		}]
	},{
		id: 2,
		title: '阶段2',
		node:[{
			id: 11,
			text: '测试11',
		},{
			id: 21,
			text: '测试21',
		}]
	},{
		id: 3,
		title: '阶段3',
		node:[{
			id: 11,
			text: '测试11',
		},{
			id: 21,
			text: '测试21',
		},{
			id: 31,
			text: '测试31',
		}]
	}],
	// 并行流程
	card_parallel: [{
		id: 1001,
		title: '并行阶段1',
		from: 1, // 从index为1的主节点开始
		to: 4,	//  到index为4的主节点结束，（如果index不好传，那就传主流程节点id）
		node:[{
			id: 1,
			text: '测试1',
		},{
			id: 2,
			text: '测试2',
		},{
			id: 3,
			text: '测试3',
		},{
			id: 4,
			text: '测试4',
		}]
	},{
		id: 1002,
		title: '并行阶段2',
		from: 0,
		to: 2,
		node:[{
			id: 11,
			text: '测试11',
		},{
			id: 21,
			text: '测试21',
		},{
			id: 31,
			text: '测试31',
		},{
			id: 41,
			text: '测试41',
		}]
	}],
}
```


### 流程阶段 新增/编辑

> POST XX/stage

``` javascript
// 新增
var params = {
	id: '4',// 只有编辑的时候传
	type: '0 | 1',// 0：主流程 1：并行流程
	title: '测试',
	commits: '测试111',
	from: '1', // 起，流程id
	to: '2',// 止，流程id
	state: '10', // 0 创建完 | 10 完成 | -10 挂起，  文档中暂时有这三种状态
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

### 流程阶段 删除

> DELETE XX/stage

``` javascript
// 新增
var params = {
	id: '4',
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

### 节点 新增/编辑

> POST XX/node

``` javascript
// 新增
var params = {
	id: '4',// 只有编辑的时候传
	pid: '1',// 流程 id
	title: '测试',
	commits: '测试111',
	state: '10', // 0 创建完 | 10 完成 | -10 挂起，  文档中暂时有这三种状态
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

### 节点 删除

> DELETE XX/node

``` javascript
// 新增
var params = {
	id: '4',
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

### 排序（包含阶段和节点）

> DELETE XX/sort

``` javascript
// 新增
var params = {
	sort: [
		{
			node: [1,2,3,4], // 节点id
			id: 1, // 阶段id	
		},
		{
			node: [11,12,13,14], // 节点id
			id: 2, // 阶段id	
		},
	]
}

var result = {
	code : 0 ,  
	message : '成功', 
}
var result = { 
	code : 1 ,  
	message : '失败', 
}
```

