/**
 * Unwatch from watchlist
 *
 * Add an "unwatch" link near each entry on the watchlist view ([[phab:T2424]]).
 *
 * @author Krinkle, 2011-2014
 * @source: [[mw:Snippets/Unwatch_from_watchlist]]
 * @revision 2014-11-22
 */
( function ( mw, $ ) {
	'use strict';

	function addUnwatchlink( $content ) {
		// Get the links
		var $wlHistLinks = $content.find( 'ul.special > li > a[href$="action=history"]');
		$.each( $wlHistLinks, function () {
			var $el = $( this ), // Cache the result instead of calling $() again
				$unwatch = $el.clone()
					.text( 'unwatch' )
					.css('color', 'gray')
					/*jshint unused:false */
					.attr( 'href', function ( i, val ) {
						return val.replace( 'action=history', 'action=unwatch' );
					} );
					/*jshint unused:true */
			$el.after( $unwatch ).after( ' | ' );
		});
	}

	if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Watchlist'
		&& window.location.href.indexOf( '/edit' ) === -1
		&& window.location.href.indexOf( '/raw' ) === -1
	) {
		// Only on Watchlist and not in the /edit or /raw mod
		mw.hook( 'wikipage.content' ).add( addUnwatchlink );
	}

}( mediaWiki, jQuery ) );
