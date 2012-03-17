/**
 * Unwatch from watchlist
 * Unwatchlink per item on watchlist (adds " | unwatch" for each entry)
 * Rewritten by Krinkle (2011-01-31)
 *
 * @source: [[mw:Snippets/Unwatch_from_watchlist]]
 * @rev: 1
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/UnwatchFromWatchlist.js]] ([[File:User:Helder.wiki/Tools/UnwatchFromWatchlist.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( $, mw /* , undefined */ ) {
'use strict';

function addUnwatchlink(){
	// Get the links
	var $wlHistLinks = $( '#content' ).find( 'ul.special > li > a[href$="action=history"]');
	$.each( $wlHistLinks, function() {
		/*jslint unparam: true*/
		var	$el = $( this ), // Cache the result instead of calling $() again
			$unwatch = $el.clone()
				.text( 'unwatch' )
				.css('color', 'gray')
				.attr( 'href', function( i, val ) {
					return val.replace( 'action=history', 'action=unwatch' );
				} );
		/*jslint unparam: false*/
		$el.after( $unwatch ).after( ' | ' );
	});
}

if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Watchlist' && window.location.href.indexOf( '/edit' ) === -1 && window.location.href.indexOf( '/raw' ) === -1 ) {
	// Only on Watchlist and not in the /edit or /raw mod
	$( addUnwatchlink );
}

}( jQuery, mediaWiki ) );