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
            "<dd>アイビーシステム株式会社</dd>" +
 			  		"<dd>アスカ株式会社</dd>" +
 			  		"<dd>株式会社石川コンピュータ・センター</dd>" +
 			  		"<dd>小林クリエイト株式会社</dd>" +
 			  		"<dd>シブヤ精機株式会社</dd>" +
            "<dd>鈴木楽器製作所</dd>" +
            "<dd>株式会社スターインフォテック</dd>" +
            "<dd>株式会社第一システムエンジニアリング</dd>" +
            "<dd>株式会社大一商会</dd>" +
            "<dd>タック株式会社</dd>" +
            "<dd>デンソーテクノ株式会社</dd>" +
            "<dd>株式会社中央図研</dd>" +
            "<dd>株式会社トヨタコミュニケーションシステム</dd>" +
            "<dd>日本インフォメーション株式会社</dd>" +
 			  		"<dd>日本興運株式会社</dd>" +
            "<dd>株式会社日本テクシード</dd>" +
            "<dd>服部製紙株式会社</dd>" +
            "<dd>株式会社ブレイン・ゲート</dd>" +
            "<dd>株式会社ロジック</dd>" +
 			  	"</dl>" +//19社
 			  "</div>"

var kanto = "<div class=\"areaTitle\">関東エリア</div>" +
			"<div class=\"border\"></div>" +
 			"<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社アルファシステムズ</dd>" +
            "<dd>ＮＲＩシステムテクノ株式会社</dd>" +
            "<dd>ＮＴＴアドバンステクノロジ株式会社</dd>" +
            "<dd>エヌ・ティ・ティ・ソフトサービス株式会社</dd>" +
            "<dd>株式会社シーイーシー</dd>" +
            "<dd>株式会社システムデザイン</dd>" +
 			  		"<dd>株式会社図研</dd>" +
 			  		"<dd>日本データスキル株式会社</dd>" +
 			  		"<dd>株式会社ハイマックス</dd>" +
 			  		"<dd>日立情報通信エンジニアリング株式会社</dd>" +
            "<dd>株式会社富士通エフサス</dd>" +
            "<dd>三井造船システム技研株式会社</dd>" +
 			  	"</dl>" +//12社
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
            "<dd>株式会社サイバーリンクス</dd>" +
 			  	  "<dd>株式会社システムディ</dd>" +
 			  		"<dd>株式会社ステップワン</dd>" +
 			  		"<dd>ダックエンジニアリング株式会社</dd>" +
 			  		"<dd>通菱テクニカ株式会社</dd>" +
            "<dd>株式会社トータルエンジニアリング</dd>" +
 			  		"<dd>株式会社トータルシステムエンジニアリング</dd>" +
            "<dd>株式会社日新システムズ</dd>" +
            "<dd>日本ソフト開発株式会社</dd>" +
            "<dd>パナソニックデバイスシステムテクノ株式会社</dd>" +
            "<dd>株式会社ハマダ</dd>" +
 			  		"<dd>兵庫県庁</dd>" +
            "<dd>三菱電機コントロールソフトウェア株式会社</dd>" +
 			  	"</dl>" +//20社
 			  "</div>"

var osaka = "<div class=\"areaTitle\">大阪エリア</div>" +
			"<div class=\"border\"></div>" +
 			"<div class=\"companyName\">" +
 			  	"<dl>" +
            "<dd>アプライアンス&デジタルソリューション株式会社</dd>" +
 			  		"<dd>株式会社エアー</dd>" +
            "<dd>ＮＲＩネットコム株式会社</dd>" +
 			  		"<dd>ＮＲＩネットワークコミュニケーションズ株式会社</dd>" +
 			  		"<dd>株式会社ＮＴＴネオメイト</dd>" +
            "<dd>株式会社ＮＴＴフィールドテクノ</dd>" +
            "<dd>関電システムソリューションズ株式会社</dd>" +
            "<dd>株式会社Ｋ−ｂｉｔ</dd>" +
            "<dd>株式会社三位恒産</dd>" +
            "<dd>サントリーシステムテクノロジー株式会社</dd>" + 
            "<dd>株式会社システムプランニング</dd>" +
            "<dd>株式会社乗馬クラブクレイン</dd>" +
            "<dd>株式会社精工</dd>" +
            "<dd>株式会社セキュアヴェイル</dd>" +
            "<dd>株式会社ソフトウェア・サービス</dd>" +
            "<dd>中央コンピューター株式会社</dd>" +
            "<dd>西日本高速道路ファシリティーズ株式会社</dd>" +
            "<dd>ノバシステム株式会社</dd>" +
            "<dd>株式会社パイオン</dd>" +
            "<dd>パナソニック株式会社</dd>" +
            "<dd>株式会社バルテス</dd>" +
 			  		"<dd>株式会社ミライト・テクノロジーズ</dd>" +
            "<dd>株式会社大和産業</dd>" +
            "<dd>ユニバーサルコンピューター株式会社</dd>" +
            "<dd>株式会社ラウンドワン</dd>" +
            "<dd>株式会社立体駐車場サービス</dd>" +
 			      "</dl>" +
 			  "</div>"//19社

var tokyo = "<div class=\"areaTitle\">東京エリア</div>" +
			"<div class=\"border\"></div>" +
			"<div class=\"companyName\">" +
        "<dl>" +
          "<dd>株式会社ＩＩＪエンジニアリング</dd>" +
          "<dd>株式会社ＩＩＪグローバルソリューションズ</dd>" +
          "<dd>アイウェイズ株式会社</dd>" +
          "<dd>株式会社ＩＳＩＤインターテクノロジー</dd>" +
          "<dd>株式会社ＩＳＩＤインターナショナル</dd>" +
          "<dd>株式会社アイソルート</dd>" +
          "<dd>株式会社Ｉ２Ｃ</dd>" +
          "<dd>株式会社アクティオ</dd>" +
          "<dd>旭情報サービス株式会社</dd>" +
          "<dd>株式会社アドバンストラフィックシステムズ</dd>" +
          "<dd>アライドテレシス株式会社</dd>" +
          "<dd>アルカディア・システムズ株式会社</dd>" +
          "<dd>アルファテクノロジー株式会社</dd>" +
          "<dd>株式会社インクスエンジニアリング</dd>" +
          "<dd>株式会社インテリジェンスビジネスソリューションズ</dd>" +
          "<dd>株式会社インフォメーション・ディベロプメント</dd>" +
          "<dd>株式会社ヴィクサス</dd>" +
          "<dd>株式会社ウィットスタジオ</dd>" +
          "<dd>株式会社エイワイシステム</dd>" +
          "<dd>エキサイト株式会社</dd>" +
          "<dd>株式会社エスユーエス</dd>" +
          "<dd>ＮＲＩデータ i テック株式会社</dd>" +
          "<dd>ＮＲＩネットワークコミュニケーションズ株式会社</dd>" +
          "<dd>ＮＥＣソリューションイノベータ株式会社</dd>" +
          "<dd>ＮＥＣネッツエスアイ株式会社</dd>" +
          "<dd>ＮＥＣフィールディング株式会社</dd>" +
          "<dd>株式会社ＮＴＣ</dd>" +
          "<dd>ＮＴＴコミュニケーションズ株式会社</dd>" +
          "<dd>株式会社ＮＴＴデータ・アイ</dd>" +
          "<dd>株式会社ＮＴＴデータＳＭＳ</dd>" +
          "<dd>ＮＴＴデータ・カスタマーサービス株式会社</dd>" +
          "<dd>ＮＴＴ・データ先端技術株式会社</dd>" +
          "<dd>株式会社ＮＴＴデータ・フィナンシャルコア</dd>" +
          "<dd>ＮＴＴラーニングシステムズ株式会社</dd>" +
          "<dd>株式会社オールアバウト</dd>" +
          "<dd>株式会社キールスタッフィング</dd>" +
          "<dd>株式会社北電子ホールディングスグループ</dd>" +
          "<dd>キヤノンＩＴソリューションズ株式会社</dd>" +
          "<dd>株式会社キューブシステム</dd>" +
          "<dd>共栄火災海上保険株式会社</dd>" +
          "<dd>共同通信電設株式会社</dd>" +
          "<dd>株式会社クエスト</dd>" +
          "<dd>ＫＤＤＩ株式会社</dd>" +
          "<dd>厚生労働省東京労働局</dd>" +
          "<dd>コムチュア株式会社</dd>" +
          "<dd>コモタ株式会社</dd>" +
          "<dd>株式会社コロプラ</dd>" +
          "<dd>サイボウズ株式会社</dd>" +
          "<dd>株式会社サテライト</dd>" +
          "<dd>株式会社ＣＩＪネクスト</dd>" +
          "<dd>ＧＭＯクラウド株式会社</dd>" +
          "<dd>株式会社ＪＳＯＬ</dd>" +
          "<dd>株式会社ジェイテック</dd>" +
          "<dd>ＪＦＥスチール株式会社</dd>" +
          "<dd>株式会社システナ</dd>" +
          "<dd>株式会社システムフロンティア</dd>" +
          "<dd>株式会社情報システム工学</dd>" +
          "<dd>株式会社シンクスクエア</dd>" +
          "<dd>株式会社スノウロビン</dd>" +
          "<dd>株式会社セレス</dd>" +
          "</dl>" + //60社
        "<dl>" +
          "<dd>株式会社セントラル情報センター</dd>" +
          "<dd>ソニービジネスソリューション株式会社</dd>" +
          "<dd>株式会社ソフテック</dd>" +
          "<dd>株式会社ソフトウェア・サイエンス</dd>" +
          "<dd>株式会社ソフトクリエイトホールディングス</dd>" +
          "<dd>ソフトバンク株式会社</dd>" +
          "<dd>ソフトバンクグループ</dd>" +
          "<dd>ソフトバンクモバイル株式会社</dd>" +
          "<dd>ＳＯＬＩＺＥ Ｅｎｇｉｎｅｅｒｉｎｇ株式会社</dd>" +
          "<dd>株式会社第一情報システムズ</dd>" +
          "<dd>株式会社ダイナム</dd>" +
          "<dd>ＴＩＳ株式会社</dd>" +
          "<dd>ＴＩＳソリューションリンク株式会社</dd>" +
          "<dd>株式会社ＤＴＳ</dd>" +
          "<dd>株式会社デザインネットワーク</dd>" +
          "<dd>デジタル・インフォメーション・テクノロジー株式会社</dd>" +
          "<dd>東京コンピュータサービス株式会社</dd>" +
          "<dd>東京都教育委員会</dd>" +
          "<dd>東芝システムテクノロジー株式会社</dd>" +
          "<dd>ドコモエンジニアリング株式会社</dd>" +
          "<dd>凸版印刷株式会社</dd>" +
          "<dd>株式会社トリオン</dd>" +
          "<dd>株式会社ドン・キホーテ</dd>" +
          "<dd>日商エレクトロニクス株式会社</dd>" +
          "<dd>日本アイ・ビー・エム株式会社</dd>" +
          "<dd>株式会社日本コンピュータ開発</dd>" +
          "<dd>日本電子計算株式会社</dd>" +
          "<dd>日本ビジネスシステムズ株式会社</dd>" +
          "<dd>株式会社Ｎｅｘｔｒｅｍｅｒ</dd>" +
          "<dd>株式会社ハタダ</dd>" +
          "<dd>ＰＣＩソリューションズ株式会社</dd>" +
          "<dd>株式会社柊ソフト開発</dd>" +
          "<dd>東日本電信電話株式会社</dd>" +
          "<dd>株式会社日立公共システム</dd>" +
          "<dd>株式会社日立システムズ</dd>" +
          "<dd>株式会社日立ソリューションズ・クリエイト</dd>" +
          "<dd>ビップシステムズ株式会社</dd>" +
          "<dd>株式会社ヒューマンシステム</dd>" +
          "<dd>株式会社ファインデックス</dd>" +
          "<dd>株式会社フォーラムエンジニアリング</dd>" +
          "<dd>富士通エフ・アイ・ビー・システムズ株式会社</dd>" +
          "<dd>株式会社富士通システムズ・イースト</dd>" +
          "<dd>株式会社富士通ビー・エス・シー</dd>" +
          "<dd>扶桑電信株式会社</dd>" +
          "<dd>ポート株式会社</dd>" +
          "<dd>本田技研工業株式会社</dd>" +
          "<dd>株式会社ミクロ情報サービス</dd>" +
          "<dd>三菱電機インフォメーションネットワーク株式会社</dd>" +
          "<dd>三菱電機エンジニアリング株式会社</dd>" +
          "<dd>三菱電機ビルテクノサービス株式会社</dd>" +
          "<dd>株式会社ミライト</dd>" +
          "<dd>株式会社メディアドゥ</dd>" +
          "<dd>株式会社メルファム</dd>" +
          "<dd>ヤフー株式会社</dd>" +
          "<dd>株式会社ユー・エス・イー</dd>" +
          "<dd>ユニバーサル・インフォメーション・サービス株式会社</dd>" +
          "<dd>株式会社夢テクノロジー</dd>" +
          "<dd>株式会社リクルート</dd>" +
          "<dd>株式会社菱友システムズ</dd>" +
          "<dd>株式会社レピカ</dd>" +
        "</dl>" +//60社
			"</div>"

var chugoku = "<div class=\"areaTitle\">中国エリア</div>" +
			  "<div class=\"border\"></div>" +
 			  "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社アクトシステムズ</dd>" +
 			  		"<dd>株式会社アミパラ</dd>" +
 			  		"<dd>株式会社エネ・グリーン</dd>" +
 			  		"<dd>岡山県立岡山工業高等学校</dd>" +
            "<dd>学校法人淳和学園 岡山龍谷高等学校</dd>" +
            "<dd>学校法人興譲館 興譲館高等学校</dd>" +
 			  		"<dd>株式会社サンエイコンサルティング</dd>" +
            "<dd>株式会社サンネット</dd>" +
            "<dd>株式会社ジェイ・エム・エス</dd>" +
            "<dd>株式会社システムタイズ</dd>" +
 			  		"<dd>新倉敷リサイクルおるてっく</dd>" +
 			  		"<dd>株式会社ソフィア</dd>" +
            "<dd>株式会社大創産業</dd>" +
            "<dd>ティーエスケイ情報システム株式会社</dd>" +
 			  		"<dd>株式会社ティピカル</dd>" +
 			  		"<dd>株式会社天満屋ハピーマート</dd>" +
            "<dd>東和ハイシステム株式会社</dd>" +
            "<dd>株式会社西日本システムサービス</dd>" +
            "<dd>ヒルタ工業株式会社</dd>" +
            "<dd>広島県立芦品まなび学園高等学校</dd>" +
            "<dd>株式会社富士通山口情報</dd>" +
            "<dd>三菱電機コントロールソフトウェア株式会社</dd>" +
            "<dd>メルココントロールパネルアンドコンポーネント株式会社</dd>" +
            "<dd>株式会社両備システムソリューションズ</dd>" +
 			  	"</dl>" +//24社
 			  "</div>"

var chikoku = "<div class=\"areaTitle\">四国エリア</div>" +
			  "<div class=\"border\"></div>" +
 			  "<div class=\"companyName\">" +
 			  	"<dl>" +
            "<dd>株式会社阿波林材</dd>" +
            "<dd>池川木材工業有限会社</dd>" +
            "<dd>株式会社ＳＴＮｅｔ</dd>" +
            "<dd>愛媛県生活協同組合連合会</dd>" +
            "<dd>えひめ中央農業協同組合（ＪＡえひめ中央）</dd>" +
            "<dd>株式会社エレバ</dd>" +
            "<dd>大倉工業株式会社</dd>" +
            "<dd>株式会社オサシ・テクノス</dd>" +
            "<dd>香川県信用組合</dd>" +
            "<dd>有限会社がんばりや</dd>" +
            "<dd>株式会社キョーエイ</dd>" +
            "<dd>クイックソフト株式会社</dd>" +
            "<dd>兼松エンジニアリング株式会社</dd>" +
            "<dd>航空自衛隊</dd>" +
            "<dd>株式会社高知銀行</dd>" +
            "<dd>高知県教育委員会</dd>" +
            "<dd>株式会社高知電子計算センター</dd>" +
            "<dd>株式会社高知県農協電算センター</dd>" +
            "<dd>株式会社高知システムズ</dd>" +
            "<dd>高知信用金庫</dd>" +
            "<dd>高知精工メッキ株式会社</dd>" +
            "<dd>株式会社コスモス薬品</dd>" +
            "<dd>株式会社サンプラザ</dd>" +
            "<dd>四国ガス産業株式会社</dd>" +
            "<dd>四国情報管理センター株式会社</dd>" +
            "<dd>四国大陽日酸株式会社</dd>" +
            "<dd>四国通建株式会社</dd>" +
            "<dd>四国旅客鉄道株式会社</dd>" +
            "<dd>四電エンジニアリング株式会社</dd>" +
            "<dd>新高知重工株式会社</dd>" +
            "<dd>伸興電線株式会社</dd>" +
          "</dl>" + //30社
          "<dl>" +
            "<dd>新和機型工業有限会社</dd>" +
            "<dd>株式会社スズキ自動車高知</dd>" +
            "<dd>関株式会社</dd>" +
            "<dd>セキスイハイム東四国株式会社</dd>" +
            "<dd>株式会社ソフトウェア・サービス</dd>" +
            "<dd>株式会社大昌鉄工所</dd>" +
            "<dd>高松市役所</dd>" +
            "<dd>宝田電産株式会社</dd>" +
            "<dd>株式会社中四国丸和ロジスティック</dd>" +
            "<dd>株式会社ティーネットジャパン</dd>" +
            "<dd>株式会社テレビ高知</dd>" +
            "<dd>特定非営利活動法人新極真空手三好道場</dd>" +
            "<dd>ドコモエンジニアリング四国株式会社</dd>" +
            "<dd>トヨタカローラ高知株式会社</dd>" +
            "<dd>西日本高速道路エンジニアリング四国株式会社</dd>" +
            "<dd>日亜化学工業株式会社</dd>" +
            "<dd>日和崎グループ</dd>" +
            "<dd>日本興業株式会社</dd>" +
            "<dd>株式会社ハタダ</dd>" +
            "<dd>株式会社パルソフトウェアサービス</dd>" +
            "<dd>播多信用金庫</dd>" +
            "<dd>ヒワサキコンピュータシステム株式会社</dd>" +
            "<dd>株式会社フォワイエ</dd>" +
            "<dd>株式会社富士通四国インフォテック</dd>" +
            "<dd>株式会社丸昇農材</dd>" +
            "<dd>丸和林業株式会社</dd>" +
            "<dd>株式会社レディ薬局</dd>" +
            "<dd>ワールドビジネス高知センター株式会社</dd>" +
            "<dd>ワールドビジネスシスコム株式会社</dd>" +
          "</dl>" + //29社
 			  "</div>"

var kyusyu = "<div class=\"areaTitle\">九州エリア</div>" +
			 "<div class=\"border\"></div>" +
 			 "<div class=\"companyName\">" +
 			  	"<dl>" +
 			  		"<dd>株式会社エイビス</dd>" +
            "<dd>オオノ工業株式会社</dd>" +
            "<dd>大分キャノン株式会社</dd>" +
            "<dd>学校法人旭進学園　宮崎第一中学高等学校</dd>" +
            "<dd>協栄工業株式会社</dd>" +
            "<dd>株式会社ＫＩＳ</dd>" +
            "<dd>株式会社ＳＹＳＫＥＮ</dd>" +
            "<dd>株式会社システム開発</dd>" +
            "<dd>株式会社翔薬</dd>" +
            "<dd>セキスイハイム九州株式会社</dd>" +
            "<dd>株式会社ゼンリン</dd>" +
            "<dd>株式会社ヒューマンテクノシステム</dd>" +
            "<dd>学校法人豊国学園 豊国学園高等学校</dd>" +
            "<dd>三菱商事太陽株式会社</dd>" +
            "<dd>株式会社南日本情報処理センター</dd>" +
 			  	"</dl>" +//13社
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
