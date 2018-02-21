/*
	会社名を追加する際は、下記のコードをコピーし、<dl>と</dl>の間の任意の場所に挿入して、
	<dd>と</dd>の間に会社名を入れてください。
	---------------
	"<dd></dd>" +
	---------------

	新しくリストを追加する場合は、一番最後の</dl> + の下に、下記のコードを追加してください。
	---------------
	"<dl>" +
	"</dl>" +
	---------------

	データがない場合、下記のコードを<dl>と</dl>の間に挿入してください。また、データが入力された場合は削除してください。
	---------------
	"<dd class=\"noData\"><span>N</span>o <span>D</span>ata</dd>" +
	---------------
 */

 var hokkaido = "<div class=\"areaTitle\">北海道エリア</div>" +
 				"<div class=\"border\"></div>" +
 			  	"<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd class=\"noData\"><span>N</span>o <span>D</span>ata</dd>" +
 			  	"</dl>" +
 			  "</div>"

var tohoku = "<div class=\"areaTitle\">東北エリア</div>" +
			 "<div class=\"border\"></div>" +
 			 "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>川嶋印刷株式会社</dd>" +
 			  		"<dd>株式会社セラテック</dd>" +
 			  	"</dl>" +//2社
 			  "</div>"

var chubu = "<div class=\"areaTitle\">中部エリア</div>" +
			"<div class=\"border\"></div>" +
 			"<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>アスカ株式会社</dd>" +
 			  		"<dd>株式会社石川コンピュータ・センター</dd>" +
 			  		"<dd>小林クリエイト株式会社</dd>" +
 			  		"<dd>シブヤ精機株式会社</dd>" +
 			  		"<dd>株式会社大一商会</dd>" +
 			  		"<dd>株式会社中央図研</dd>" +
 			  		"<dd>株式会社日本テクシード</dd>" +
 			  		"<dd>日本興運株式会社</dd>" +
 			  		"<dd>株式会社ロジック</dd>" +
 			  	"</dl>" +//10社
 			  "</div>"

var kanto = "<div class=\"areaTitle\">関東エリア</div>" +
			"<div class=\"border\"></div>" +
 			"<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社アルファシステムズ</dd>" +
 			  		"<dd>エヌ・ティ・ティ・ソフトサービス株式会社</dd>" +
 			  		"<dd>株式会社図研</dd>" +
 			  		"<dd>日本データスキル株式会社</dd>" +
 			  		"<dd>株式会社ハイマックス</dd>" +
 			  		"<dd>日立情報通信エンジニアリング株式会社</dd>" +
 			  	"</dl>" +//6社
 			  "</div>"

var kinki = "<div class=\"areaTitle\">近畿エリア</div>" +
			"<div class=\"border\"></div>" +
 			"<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社ＩＪＣ</dd>" +
 			  		"<dd>アイピーシステム株式会社</dd>" +
 			  		"<dd>アイベステクノ株式会社</dd>" +
 			  		"<dd>株式会社エスユーエス</dd>" +
 			  		"<dd>株式会社演算工房</dd>" +
 			  		"<dd>京セラコミュニケーションシステム株式会社</dd>" +
 			  		"<dd>有限会社グッドアシスト</dd>" +
 			  		"<dd>株式会社晃商</dd>" +
 			  		"<dd>株式会社システムディ</dd>" +
 			  		"<dd>株式会社ステップワン</dd>" +
 			  		"<dd>ダックエンジニアリング株式会社</dd>" +
 			  		"<dd>通菱テクニカ株式会社</dd>" +
 			  		"<dd>株式会社トータルシステムエンジニアリング</dd>" +
 			  		"<dd>日本ソフト開発株式会社</dd>" +
 			  		"<dd>兵庫県庁</dd>" +
 			  	"</dl>" +//15社
 			  "</div>"

var osaka = "<div class=\"areaTitle\">大阪エリア</div>" +
			"<div class=\"border\"></div>" +
 			"<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社エアー</dd>" +
 			  		"<dd>ＮＲＩネットワークコミュニケーションズ株式会社</dd>" +
 			  		"<dd>株式会社エヌ・ティ・ティネオメイト</dd>" +
 			  		"<dd>株式会社三位恒産</dd>" +
 			  		"<dd>株式会社精工</dd>" +
 			  		"<dd>株式会社ソフトウェア.サービス</dd>" +
 			  		"<dd>株式会社大和産業</dd>" +
 			  		"<dd>株式会社パイオン</dd>" +
 			  		"<dd>株式会社ミライト・テクノロジーズ</dd>" +
 			  	"</dl>" +
 			  "</div>"//9社

var tokyo = "<div class=\"areaTitle\">東京エリア</div>" +
			"<div class=\"border\"></div>" +
			"<div class=\"companyName\">" +
				"<dl>" +
					"<dd>アイウェイズ株式会社</dd>" +
			 		"<dd>株式会社ＩＳＩＤインターテクノロジー</dd>" +
			 		"<dd>株式会社アイソルート</dd>" +
			 		"<dd>株式会社Ｉ２Ｃ</dd>" +
				 	"<dd>株式会社アクティオ</dd>"+
				 	"<dd>旭情報サービス株式会社</dd>" +
				 	"<dd>アライドテレシス株式会社</dd>" +
				 	"<dd>アルファテクノロジー株式会社</dd>" +
				 	"<dd>株式会社インテリジェンスビジネスソリューションズ</dd>" +
				 	"<dd>株式会社ヴィクサス</dd>" +
				 	"<dd>株式会社エスユーエス</dd>" +
				 	"<dd>ＮＲＩネットワークコミュニケーションズ株式会社</dd>" +
				 	"<dd>ＮＥＣネッツエスアイ株式会社</dd>" +
				 	"<dd>ＮＴＴコミュニケーションズ株式会社</dd>" +
				 	"<dd>エヌ・ティ・ティ・データ先端技術株式会社</dd>" +
				 	"<dd>ＮＴＴラーニングシステムズ株式会社</dd>" +
				 	"<dd>株式会社キールスタッフィング</dd>" +
				 	"<dd>株式会社キューブシステム</dd>" +
				 	"<dd>株式会社クエスト</dd>" +
				 	"<dd>コモタ株式会社</dd>" +
				 	"<dd>株式会社ＣＩＪネクスト</dd>" +
				 	"<dd>ＧＭＯクラウド株式会社</dd>" +
				 	"<dd>株式会社ジェイテック</dd>" +
				 	"<dd>株式会社シンクスクエア</dd>" +
				 	"<dd>株式会社セントラル情報センター</dd>" +
				"</dl>" + //25社
				"<dl>" +
					"<dd>ソニービジネスソリューション株式会社</dd>" +
				 	"<dd>株式会社ソフテック</dd>" +
				 	"<dd>ソフトバンクグループ</dd>" +
				 	"<dd>ソフトバンクモバイル株式会社</dd>" +
				 	"<dd>ＳＯＬＩＺＥ　Ｅｎｇｉｎｅｅｒｉｎｇ株式会社</dd>" +
				 	"<dd>株式会社第一情報システムズ</dd>" +
				 	"<dd>株式会社ダイナム</dd>" +
				 	"<dd>株式会社デザインネットワーク</dd>" +
				 	"<dd>東芝システムテクノロジー株式会社</dd>" +
				 	"<dd>ドコモエンジニアリング株式会社</dd>" +
				 	"<dd>株式会社ドン・キホーテ</dd>" +
				 	"<dd>株式会社日本コンピュータ開発</dd>" +
				 	"<dd>日本電子計算株式会社</dd>" +
				 	"<dd>日本ビジネスシステムズ株式会社</dd>" +
				 	"<dd>株式会社ハタダ</dd>" +
				 	"<dd>東日本電信電話株式会社</dd>" +
				 	"<dd>株式会社日立システムズ</dd>" +
				 	"<dd>株式会社フォーラムエンジニアリング</dd>" +
				 	"<dd>扶桑電通株式会社</dd>" +
				 	"<dd>株式会社ミロク情報サービス</dd>" +
				 	"<dd>株式会社メルファム</dd>" +
				 	"<dd>ユニバーサル・インフォメーション・サービス株式会社</dd>" +
				 	"<dd>株式会社夢テクノロジー</dd>" +
				 	"<dd>株式会社リクルート</dd>" +
				"</dl>"//24社
			"</div>"

var chugoku = "<div class=\"areaTitle\">中国エリア</div>" +
			  "<div class=\"border\"></div>" +
 			  "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社アクトシステムズ</dd>" +
 			  		"<dd>株式会社アミパラ</dd>" +
 			  		"<dd>株式会社エネ・グリーン</dd>" +
 			  		"<dd>岡山県立岡山工業高等学校</dd>" +
 			  		"<dd>株式会社サンエイコンサルティング</dd>" +
 			  		"<dd>新倉敷リサイクルおるてっく</dd>" +
 			  		"<dd>株式会社ソフィア</dd>" +
 			  		"<dd>株式会社ティピカル</dd>" +
 			  		"<dd>株式会社天満屋ハピーマート</dd>" +
 			  	"</dl>" +//9社
 			  "</div>"

var chikoku = "<div class=\"areaTitle\">四国エリア</div>" +
			  "<div class=\"border\"></div>" +
 			  "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社阿波林材</dd>" +
 			  		"<dd>株式会社ＳＴＮｅｔ</dd>" +
 			  		"<dd>愛媛県生活協同組合連合会</dd>" +
 			  		"<dd>大倉工業株式会社</dd>" +
 			  		"<dd>株式会社オサシ・テクノス</dd>" +
 			  		"<dd>香川県信用組合</dd>" +
 			  		"<dd>兼松エンジニアリング株式会社</dd>" +
 			  		"<dd>株式会社キョーエイ</dd>" +
 			  		"<dd>株式会社高知銀行</dd>" +
 			  		"<dd>高知信用金庫</dd>" +
 			  		"<dd>高知精工メッキ株式会社</dd>" +
 			  		"<dd>株式会社サンプラザ</dd>" +
		        "<dd>四国ガス産業株式会社</dd>" +
            "<dd>四国情報管理センター株式会社</dd>" +
 			  		"<dd>四国大陽日酸株式会社</dd>" +
 			  		"<dd>四国通建株式会社</dd>" +
 			  		"<dd>特定非営利活動法人新極真空手三好道場</dd>" +
 			  		"<dd>伸興電線株式会社</dd>" +
 			  		"<dd>新和機型工業有限会社</dd>" +
 			  		"<dd>株式会社スズキ自販高知</dd>" +
 			  		"<dd>関株式会社</dd>" +
 			  	"</dl>" +//20社
 			  	"<dl>" +
 			  		"<dd>セキスイハイム東四国株式会社</dd>" +
 			  		"<dd>株式会社大昌鉄工所</dd>" +
 			  		"<dd>宝田電産株式会社</dd>" +
 			  		"<dd>株式会社中四国丸和ロジスティクス</dd>" +
 			  		"<dd>株式会社ティーネットジャパン</dd>" +
 			  		"<dd>株式会社テレビ高知</dd>" +
 			  		"<dd>ドコモエンジニアリング四国株式会社</dd>" +
 			  		"<dd>西日本高速道路エンジニアリング四国株式会社</dd>" +
 			  		"<dd>日亜化学工業株式会社</dd>" +
 			  		"<dd>日本興業株式会社</dd>" +
 			  		"<dd>新高知重工株式会社</dd>" +
 			  		"<dd>幡多信用金庫</dd>" +
 			  		"<dd>株式会社ハタダ</dd>" +
 			  		"<dd>株式会社パルソフトウェアサービス</dd>" +
 			  		"<dd>ヒワサキコンピュータシステム株式会社</dd>" +
 			  		"<dd>株式会社丸昇農材</dd>" +
 			  		"<dd>丸和林業株式会社</dd>" +
 			  		"<dd>四電エンジニアリング株式会社</dd>" +
 			  		"<dd>ワールドビジネス高知センター株式会社</dd>" +
				"</dl>" +//19社
 			  "</div>"

var kyusyu = "<div class=\"areaTitle\">九州エリア</div>" +
			 "<div class=\"border\"></div>" +
 			 "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社エイビス</dd>" +
 			  		"<dd>オオノ工業株式会社</dd>" +
 			  		"<dd>協栄工業株式会社</dd>" +
 			  	"</dl>" +//3社
 			  "</div>"

var okinawa = "<div class=\"areaTitle\">沖縄エリア</div>" +
			  "<div class=\"border\"></div>" +
 			  "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd class=\"noData\"><span>N</span>o <span>D</span>ata</dd>" +
 			  	"</dl>" +
 			  "</div>"

flg = 1;
areaBuf = 0;

function infoChange(area, button, state) {
	flg = (flg == 0) ? 1 : 0;
	if(areaBuf != state) {
		if (flg == 0) {
			document.getElementById("areaInfo01").innerHTML = area;
			document.getElementById("areaInfo02").innerHTML = "";
			document.getElementById("areaInfo01").className = "areaInfo fadeIn";
			document.getElementById("areaInfo02").className = "areaInfo fadeOut";
			document.getElementById(button).checked = true;
		} else {
			document.getElementById("areaInfo02").innerHTML = area;
			document.getElementById("areaInfo01").innerHTML = "";
			document.getElementById("areaInfo01").className = "areaInfo fadeOut";
			document.getElementById("areaInfo02").className = "areaInfo fadeIn";
			document.getElementById(button).checked = true;
		}
	}
	areaBuf = state;
}
