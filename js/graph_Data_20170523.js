
/* ここにデータを入力してください */
/* 2012データ */
shingaku01 = 32; /* 進学 */
hokaShingaku01 = 1; /* 他大学等進学 */
shushoku01 = 43; /* 就職 */
sonota01 = 7; /* その他 */
/* 2013データ */
shingaku02 = 18; /* 進学 */
hokaShingaku02 = 1; /* 他大学等進学 */
shushoku02 = 68; /* 就職 */
sonota02 = 7; /* その他 */

/* 2012グラフデータ */
var graphData01 = [
	{
		value: shingaku01,
		label: "本学進学",
		color: "#fab4b9"
	},
	{
		value: hokaShingaku01,
		label: "他大学等進学",
		color: "#f5f158"
	},
	{
		value: shushoku01,
		label: "就職",
		color: "#a4daf3"
	},
	{
		value: sonota01,
		label: "その他",
		color: "#b5d08c"
	}
];
/* 2013グラフデータ */
var graphData02 = [
	{
		value: shingaku02,
		label: "本学進学",
		color: "#fab4b9"
	},
	{
		value: hokaShingaku02,
		label: "他大学等進学",
		color: "#f5f158"
	},
	{
		value: shushoku02,
		label: "就職",
		color: "#a4daf3"
	},
	{
		value: sonota02,
		label: "その他",
		color: "#b5d08c"
	}
];

function createGraph() {
	/* グラフオプション */
	var options = {
		animation : false,
		onAnimationComplete: function(){
			this.showTooltip(this.segments, true);
		},
		tooltipEvents: [],
		showTooltips: true,
		tooltipFontSize: 14,
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%=value%>人",
	};
	/* グラフデータ描写 */
	var ctx01 = document.getElementById("Graph01").getContext("2d");
	window.myDoughnut01 = new Chart(ctx01).Doughnut(graphData01, options);
	var ctx02 = document.getElementById("Graph02").getContext("2d");
	window.myDoughnut02 = new Chart(ctx02).Doughnut(graphData02, options);
};
