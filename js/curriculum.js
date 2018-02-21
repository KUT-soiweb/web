/* ~Img  全専攻共通科目の左に出てくる学群のsvg
 * ~Curr 専攻対象科目のリスト
 * ~example 専攻者の進路例に出てくる文章と画像の部分(画像の部分はcolumnImage下のimgタグ)
 */

 /* 専攻対象科目のリストを追加したければ、下のコードをコピーし、追加する専攻の<ul>と</ul>の間に挿入し、<li>と</li>の間に専攻名を入力する*/
 /* "<li></li>" + */




var iMImg = "<img src=\"img/curriculum_iM.svg\">" + 
			"<div class=\"iMName MjName\">情報とメディア</div>"
var iMCurr = "<div class=\"majorLeft majorCurr\">" +
				"<ul>" +
					"<li>情報とメディア</li>" +
					"<li>画像処理</li>" +
					"<li>数値計算法</li>" +
					"<li>映像音響メディア</li>" +
					"<li>パターン認識と理解</li>" +
				"</ul>" +
			"</div><!-- majorLeft -->" +
			"<div class=\"majorRight majorCurr\">" +
				"<ul>" +
					"<li>コンピュータグラフィックス</li>" +
					"<li>ウェブメディア</li>" +
					"<li>HCI概論</li>" +
					"<li>情報学群実験第3i, 4i</li>" +
				"</ul>" +
			"</div><!-- majorRight -->"

var iMexample = "<div class=\"columnTitle\">" +
								"iM系3年2Q講義" +　/* 日本語大文字30文字以内が望ましい */
								"<h2>ウェブメディア</h2>" +
							"</div><!-- columnTitle -->" +
							"<div class=\"columnBox\">" +
								"<div class=\"columnText\">" +
									/* 日本語大文字100文字以内、または４行までが望ましい */
									"<p>自分たちが普段何気なく利用しているインターネットに使われている技術がどう作用しているのか、概念だけでなくその詳細なども知ることができました。先生による実演もあり理解しやすかったです。</p>" +
								"</div><!-- columnText -->" +
								"<div class=\"columnImage\">" +
									"<img src=\"img/iM_woman.svg\">" +
								"</div><!-- columnImage -->" +
							"</div><!-- columnBox -->"


var iHImg = "<img src=\"img/curriculum_iH.svg\">" + 
			"<div class=\"iHName MjName\">情報と人間</div>"
var iHCurr = "<div class=\"majorLeft majorCurr\">" +
				"<ul>" +
					"<li>情報と倫理</li>"　+
					"<li>情報と職業</li>"　+
					"<li>感覚・神経生物学</li>"　+
					"<li>知識と認識</li>"　+
					"<li>認知心理学</li>"　+
				"</li>" +
			"</div><!-- majorLeft -->" +
			"<div class=\"majorRight majorCurr\">" +
				"<ul>" +
					"<li>人工知能基礎</li>"　+
					"<li>学習と推論</li>"　+
					"<li>脳情報学</li>"　+
					"<li>HCI概論</li>"　+
					"<li>情報学群実験第3i, 4i</li>"　+
				"</ul>" +
			"</div><!-- majouiRight -->"

var iHexample = "<div class=\"columnTitle\">" +
								"iH系3年1Q講義" +
								"<h2>認知心理学</h2>" +
							"</div><!-- columnTitle -->" +
							"<div class=\"columnBox\">" +
								"<div class=\"columnText\">" +
									"<p>人間のことについてより深く、また、違った角度から学ぶことができて良い機会になったと思っています。人間が限られた情報処理能力を用いてどのような決定や選択をするのかを学ぶことでUI設計につながる知識を身に着けることができました。</p>" +
								"</div><!-- columnText -->" +
								"<div class=\"columnImage\">" +
									"<img src=\"img/iH_man.svg\">" +
								"</div><!-- columnImage -->" +
							"</div><!-- columnBox -->"


var CCImg = "<img src=\"img/curriculum_CC.svg\">" + 
			"<div class=\"CCName MjName\">情報通信</div>"
var CCCurr = "<div class=\"majorLeft majorCurr\">" +
				"<ul>" +
					"<li>通信網概論</li>" +
					"<li>信号理論基礎</li>" +
					"<li>オートマトンと形式言語</li>" +
					"<li>通信方式</li>" +
					"<li>アナログ・ディジタル通信</li>" +
				"</ul>" +
			"</div><!-- majourLeft -->" +
			"<div class=\"majorRight majorCurr\">" +
				"<ul>" +
					"<li>計算機ネットワーク</li>" +
					"<li>情報セキュリティ</li>" +
					"<li>ワイヤレスアクセスNW</li>" +
					"<li>情報ネットワーク設計</li>" +
					"<li>情報学群実験第3C, 4C</li>" +
				"</ul>" +
			"</div><!-- majourRight -->"

var CCexample = "<div class=\"columnTitle\">" +
								"CC系3年2Q講義" +　/* 日本語大文字30文字以内が望ましい */
								"<h2>計算機ネットワーク</h2>" +
							"</div><!-- columnTitle -->" +
							"<div class=\"columnBox\">" +
								"<div class=\"columnText\">" +
									/* 日本語大文字100文字以内、または４行までが望ましい */
									"<p>市販のルーターの製品情報が理解できるようになる等、具体的にどのようなことができればよいか明示してくださったおかげで目標意識と興味を持って授業に臨むことができました。</p>" +
								"</div><!-- columnText -->" +
								"<div class=\"columnImage\">" +
									"<img src=\"img/CC_man.svg\">" +
								"</div><!-- columnImage -->" +
							"</div><!-- columnBox -->"


var CSImg = "<img src=\"img/curriculum_CS.svg\">" +
			"<div class=\"CSName MjName\">コンピュータ<br>サイエンス</div>"
var CSCurr = "<div class=\"majorLeft majorCurr\">" +
				"<ul>" +
					"<li>計算機システム</li>" +
					"<li>オートマトンと形式言語</li>" +
					"<li>アルゴリズムとデータ構造</li>" +
					"<li>論理回路</li>" +
					"<li>計算機アーキテクチャ</li>" +
				"</ul>" +
			"</div><!-- majourLeft -->" +
			"<div class=\"majorRight majorCurr\">" +
				"<ul>" +
					"<li>符号理論</li>" +
					"<li>コンパイラ</li>" +
					"<li>データベースシステム</li>" +
					"<li>オペレーティングシステム</li>" +
					"<li>情報学群実験第3C, 4C</li>" +
				"</ul>" +
			"</div><!-- majourRight -->"

var CSexample = "<div class=\"columnTitle\">" +
								"CS系3年3Q講義" +　/* 日本語大文字30文字以内が望ましい */
								"<h2>コンパイラ</h2>" +
							"</div><!-- columnTitle -->" +
							"<div class=\"columnBox\">" +
								"<div class=\"columnText\">" +
									"<p>コンパイラを中心にプログラミング言語処理系の役割と仕組みについての座学だけでなく、演習で実際にコンパイラを作成してみることで理解が深まったと思いました。</p>" +
									/* 日本語大文字100文字以内、または４行までが望ましい */
								"</div><!-- columnText -->" +
								"<div class=\"columnImage\">" +
									"<img src=\"img/CS_woman.svg\">" +
								"</div><!-- columnImage -->" +
							"</div><!-- columnBox -->"
flg = 1;
flgBuf = 1;

function change(button, image, curr, state, example) {
	if (flgBuf != state) {
		flg = (flg == 0)? 1 : 0;
		if (flg == 0) {
			document.getElementById("image02").innerHTML = image;
			document.getElementById("image01").className = "fadeOut majorList";
			document.getElementById("image02").className = "fadeIn majorList";
			document.getElementById("exampleColumn01").className = "fadeOut exampleColumn";
			document.getElementById("exampleColumn02").className = "fadeIn exampleColumn";
			document.getElementById("majorList01").className = "fadeOut majorList";
			document.getElementById("majorList02").className = "fadeIn majorList";
			document.getElementById("majorList01").innerHTML = "";
			document.getElementById("majorList02").innerHTML = curr;
			document.getElementById("exampleColumn01").innerHTML = "";
			document.getElementById("exampleColumn02").innerHTML = example;
		} else {
			document.getElementById("image01").innerHTML = image;
			document.getElementById("image01").className = "fadeIn majorList";
			document.getElementById("image02").className = "fadeOut majorList";
			document.getElementById("exampleColumn01").className = "fadeIn exampleColumn";
			document.getElementById("exampleColumn02").className = "fadeOut exampleColumn";
			document.getElementById("majorList01").className = "fadeIn majorList";
			document.getElementById("majorList02").className = "fadeOut majorList";
			document.getElementById("majorList01").innerHTML = curr;
			document.getElementById("majorList02").innerHTML = "";
			document.getElementById("exampleColumn01").innerHTML = example;
			document.getElementById("exampleColumn02").innerHTML = "";
		}
	flgBuf = state;
	}
}
