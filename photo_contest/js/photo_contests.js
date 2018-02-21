
$(function(){
		//読み込み時にリサイズを行う
		window.onload = function() {
			var ph1 = document.getElementById("ph1");
			ImgResize(ph1);
		}
		//ターゲットの取得
		function getTarget(mainimg){
			//ボタンからフォーカスを外す
			//mainimg.blur() ;
			//ターゲットとなるコンテンツを確認
			var target = mainimg.getAttribute( "data-target" ) ;
			//ターゲットが存在しなければ終了
			if( typeof( target )=="undefined" || !target || target === null ){
				return false ;
			}
			var targetDiv = null
			targetDiv = document.getElementById( target ) ;

			//ターゲットが存在しなければ終了
			if( targetDiv === null ){
				return false ;
			}
			ImgResize(targetDiv);
		}//onclick function

		//画像に合わせて表示サイズを変更する関数
		function ImgResize(targetDiv){
			//ClassNameは複数の要素として格納される　.lengthで格納要素数　　
			//var mainimg = document.getElementsByClassName("mainImage");
			var div = $(targetDiv).children("div");
			var img = div.children("img");
			var w = img.width();
			var h = img.height();
			if(w>h){
				img.css('width', '100%');
				var mW = 500 - img.height();
				img.css('margin-left', '0px');
				img.css('margin-top', mW / 2);
			}else if(w<h){
				img.css('height', '100%');
				var mH = 500 - img.width();
				img.css('margin-top', '0px');
				img.css('margin-left', mH / 2);

			}else {
				img.css('width', '100%');
				img.css('margin-left', 0); 　
				img.css('margin-top', 0);
			}
		} //ImgResize

	var targetDivClasses ="modalSyncer";//モーダルを開くリンクに付けるクラス名spring1,spring2とかにつけた

	//リンクを取得する
	var mainimgs = document.getElementsByClassName( targetDivClasses );
	//クリックイベント
	for(var i=0,l=mainimgs.length; l>i; i++){
		//全てのリンクにタッチイベントを設定
		mainimgs[i].onclick = function(){
			outContents();
			var mainimg = this;
			var idName = mainimg.getAttribute( "data-target" ) ;;
			setTimeout(function(){
		  	$(".circle").fadeIn(500);
				$("#"+idName).fadeIn(500);
				getTarget(mainimg);
			}, 495);
		}
	}//for loop

	//春をクリックした時
		$('#spring').click(function(){
			$("#suAlbum").fadeOut(500);//夏のアルバム
			$("#auAlbum").fadeOut(500);//秋のアルバム
			$("#wiAlbum").fadeOut(500);//冬のアルバム
			outContents();
			setTimeout(function(){
				$("#spTable").fadeIn(500);//春のテーブル
				$(".spring1").fadeIn(500);//春の先頭画像
				$("#spAlbum").fadeIn(500);//春のsubアルバム
		}, 495);
   });

	//夏をクリックした時
	$('#summer').click(function(){
		$("#spAlbum").fadeOut(500);//春のアルバム
		$("#auAlbum").fadeOut(500);//秋のアルバム
		$("#wiAlbum").fadeOut(500);//冬のアルバム
		outContents();
		setTimeout(function(){
			$("#suTable").fadeIn(500);
			$(".summer1").fadeIn(500);
			$("#suAlbum").fadeIn(500);
			var ph5 = document.getElementById("ph5");
			ImgResize(ph5);
	}, 495);
});

	//秋をクリックした時
		$('#autumn').click(function(){
			$("#spAlbum").fadeOut(500);//春のアルバム
			$("#suAlbum").fadeOut(500);//夏のアルバム
			$("#wiAlbum").fadeOut(500);//冬のアルバム

			outContents();
			setTimeout(function(){
				$("#auTable").fadeIn(500);
				$(".autumn1").fadeIn(500);
				$("#auAlbum").fadeIn(500);
				var ph9 = document.getElementById("ph9");
				ImgResize(ph9);
		}, 495);
		});

//冬をクリックした時
	$('#winter').click(function(){
		$("#spAlbum").fadeOut(500);//春のアルバム
		$("#suAlbum").fadeOut(500);//夏のアルバム
		$("#auAlbum").fadeOut(500);//秋のアルバム
		outContents();
		setTimeout(function(){
			$("#wiTable").fadeIn(500);
			$(".winter1").fadeIn(500);
			$("#wiAlbum").fadeIn(500);
			var ph13 = document.getElementById("ph13");
			ImgResize(ph13);
	}, 495);
	});

	//内容を消す
	function outContents(){
		$(".circle").fadeOut(500);
		setTimeout(function(){
			$(".mainContents").hide();
		}, 490);
	} //outContents
}); //$function
