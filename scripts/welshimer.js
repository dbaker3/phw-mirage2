// MCStor homepage
if (window.location.pathname == "/") {
    $('#home-search').after($('#ds-search-option'));
    $('#ds-search-option').css('max-width', '500px');
}

$('#ds-search-option form').after('<a href="/discover" id="adv-search-link">Advanced Search</a>');

// Pages defined in xsl/core/page-structure.xsl
/*if (window.location.pathname.substring(0,5) == "/page") {
    $.get('/sidemenu.html', function(sidemenu) {
        $(sidemenu).appendTo('#sidebar');
        $('#ds-search-option').prependTo('#sidemenu');
    });
    $('#ds-options').hide();
}*/

