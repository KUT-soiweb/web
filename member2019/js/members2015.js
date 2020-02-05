$(function(){

//グローバル変数
var nowModalSyncer = null ;		//現在開かれているモーダルコンテンツ
var modalClassSyncer = "modalSyncer" ;		//モーダルを開くリンクに付けるクラス名

//モーダルのリンクを取得する
var modals = document.getElementsByClassName( modalClassSyncer ) ;

//モーダルウィンドウを出現させるクリックイベント
for(var i=0,l=modals.length; l>i; i++){

	//全てのリンクにタッチイベントを設定する
	modals[i].onclick = function(){
		//ボタンからフォーカスを外す
		this.blur() ;

		//ターゲットとなるコンテンツを確認
		var target = this.getAttribute( "data-target" ) ;

		//ターゲットが存在しなければ終了
		if( typeof( target )=="undefined" || !target || target === null ){
			return false ;
		}

		//コンテンツとなる要素を取得
		nowModalSyncer = document.getElementById( target ) ;

		//ターゲットが存在しなければ終了
		if( nowModalSyncer === null ){
			return false ;
		}

		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		if( $( "#modalOverlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない
		//if($("#modalOverlay")[0]) $("#modalOverlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する

		//オーバーレイを出現させる
		$( "#baseContents" ).append( '<div id="modalOverlay"></div>' ) ;
		$( "#modalOverlay" ).fadeIn( "fast" ) ;

		//コンテンツをセンタリングする
		centeringModalSyncer() ;

		//コンテンツをフェードインする
		$( nowModalSyncer ).fadeIn( "slow" ) ;

		//[#modalOverlay]、またはcloseをクリックしたら…
		$( "#modalOverlay,.modalClose" ).unbind().click( function() {

			//[#modal-content]と[#modalOverlay]をフェードアウトした後に…
			$( "#" + target + ",#modalOverlay" ).fadeOut( "fast" , function() {

				//[#modalOverlay]を削除する
				$( '#modalOverlay' ).remove() ;

			} ) ;

			//現在のコンテンツ情報を削除
			nowModalSyncer = null ;

		} ) ;

	};

}

	//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//モーダルウィンドウが開いてなければ終了
		if( nowModalSyncer === null ) return false ;

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		//コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( nowModalSyncer ).outerWidth( {margin:true} ) ;
//		var ch = $( nowModalSyncer ).outerHeight( {margin:true} ) ;
		var cw = $( nowModalSyncer ).outerWidth() ;
		var ch = $( nowModalSyncer ).outerHeight() ;

		//センタリングを実行する
		$( nowModalSyncer ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

		var childs = nowModalSyncer.childNodes;
		var imgw = $( childs[7] ).outerWidth() ;
		var imgh = $( childs[7] ).outerHeight() ;
		$( childs[7] ).css( {"left": ((w + cw - imgw)/2) - 10 + "px","top": ((h + ch)/2) - 10 + "px"} );

	}

} ) ;
