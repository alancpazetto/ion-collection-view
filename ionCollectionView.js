angular.module('ionCollectioView').directive('ionCollectionView', [ '$window', function( $window ) {

	var elem;
	var rowItems = 1;

	var resize = function(){
		
		elem.find('ion-item').each(function(key){
			
			var tam = ( elem.parent().width() / rowItems );
			$(this).width( tam )
				   .height( tam );

		});

	}

	var	link = {
		pre: function(scope, element, attrs){
			
			elem = $(element);
			rowItems = scope.rowItems;

			$(window).resize(function(){
				resize();
			});

			resize();

		},
		post : function(){}
	};

	return {
		restrict: 'E',
		scope: {
			rowItems: '=rowItems'
		},
		link: link
	};
}]);