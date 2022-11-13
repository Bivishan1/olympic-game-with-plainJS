$(function () { "use strict"; Morris.Area({ element: "extra-area-chart", data: [{ y: "2022-02", a: 0, b: 0, c: 0 }, { y: "2022-03", a: 150, b: 45, c: 15 }, { y: "2022-05", a: 60, b: 150, c: 195 }, { y: "2022-05", a: 180, b: 36, c: 21 }, { y: "2022-05", a: 190, b: 36, c: 21 }, { y: "2022-07", a: 75, b: 240, c: 120 }, { y: "2022-08", a: 30, b: 30, c: 30 }], lineColors: ["#009688", "#fdb93e", "#148cca"], xkey: "y", ykeys: ["a", "b", "c"], labels: ["a", "b", "c"], pointSize: 0, lineWidth: 0, resize: !0, fillOpacity: .8, behaveLikeLine: !0, gridLineColor: "rgba(108, 120, 151, 0.2)", hideHover: "auto" }), Morris.Bar({ element: "morris-bar-chart", data: [{ y: "Jan-March", a: 1e4, b: 8e3, c: 7800 }, { y: "April-June", a: 8500, b: 7e3, c: 6500 }, { y: "Jul-Sep", a: 9e3, b: 7500, c: 7e3 }, { y: "Oct-Dec", a: 9500, b: 8500, c: 7500 }], barGap: 8, barSizeRatio: .3, barShape: "soft", barRadius: [5, 5, 5, 5], xkey: "y", ykeys: ["a", "b", "c"], labels: ["Maximum", "Average", "Minimum"], barColors: ["#44a2d2", "#98d4ce", "#c1d1de"], hideHover: "auto", preUnits: "", gridLineColor: "rgba(108, 120, 151, 0.2)", resize: !0 }), $(".knob").knob({ format: function (e) { return e + "%" } }), $(".knob").each(function () { var e = $(this), a = e.attr("rel"); e.knob(), $({ value: 0 }).animate({ value: a }, { duration: 2e3, easing: "swing", step: function () { e.val(Math.ceil(this.value)).trigger("change") } }) }), $(".live-tile, .flip-list").not(".exclude").liveTile(), Morris.Donut({ element: "donut-example", data: [{ label: "M3", value: 50 }, { label: "M2", value: 114 }, { label: "M1", value: 230 }], resize: !0, colors: ["#e3eaef", "#ff679b", "#777edd"], labelColor: "#888", backgroundColor: "transparent", fillOpacity: .1, formatter: function (e) { return e + "h" } }), $(function () { var t = $(".todo-list"), o = $(".todo-list-input"); $(".add-new-todo-btn").on("click", function (e) { e.preventDefault(); var a = $(this).prevAll(".todo-list-input").val(); a && (t.append("<div class='todo-box'><i class='remove far fa-trash-alt'></i><div class='todo-task'><label class='ckbox'><input type='checkbox'/><span>" + a + "</span><i class='input-helper'></i></label></div></div>"), o.val("")) }), t.on("change", ".ckbox", function () { $(this).attr("checked") ? $(this).removeAttr("checked") : $(this).attr("checked", "checked"), $(this).closest(".todo-box").toggleClass("completed") }), t.on("click", ".remove", function () { $(this).parent().remove() }) }) });