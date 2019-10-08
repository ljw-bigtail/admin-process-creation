var tools = {
    getURLParam: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return '';
	},
    toast: function(msg, type){
        toastr.options = {
            "closeButton": true,
            "positionClass": "toast-top-right",
            "showDuration": "1000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "msg": msg,
            "title": '提示',
          }
          toastr[type || 'warning'](msg, '提示'); // Wire up an event handler to a button in the toast, if it exists
    },
    initTable: function(domSelect){
        $(domSelect).dataTable({
            "language": {
                "aria": {
                    "sortAscending": ": 升序排列",
                    "sortDescending": ": 降序排列"
                },
                "emptyTable": "暂无数据",
                "info": "显示 _TOTAL_ 条记录中的 _START_ 至 _END_ ",
                "infoEmpty": "没有找到记录",
                "infoFiltered": "从 _MAX_ 个总记录中过滤",
                "lengthMenu": "查看 _MENU_ 记录",
                "search": "查询:",
                "zeroRecords": "未找到匹配的记录",
                "paginate": {
                    "previous":"上一页",
                    "next": "上一页",
                    "last": "最后一页",
                    "first": "第一页"
                }
            },
            "dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
            "deferRender": true,
            "lengthMenu": [
                [20, 50, 100, -1],
                [20, 50, 100, "All"]
            ],
            "pageLength": 20,
            "scrollY": "300",
            "order": [
                [0, "asc"]
            ]
        });
    },
    initSelectThemes: function(){
        function setColor (color) {
            var color_ = (Metronic.isRTL() ? color + '-rtl' : color);
            $('#style_color').attr("href", './css/themes/' + color_ + ".css");
        };

        var panel = $('.theme-panel');
        $('.theme-colors > li', panel).click(function () {
            var color = $(this).attr("data-theme");
            setColor(color);
            $('ul > li', panel).removeClass("active");
            $(this).addClass("active");

            if (color === 'dark') {
                $('.page-actions .btn').removeClass('red-haze').addClass('btn-default btn-transparent');
            } else {
                $('.page-actions .btn').removeClass('btn-default btn-transparent').addClass('red-haze');
            }
        });
    }
}