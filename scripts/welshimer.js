/*if (document.getElementById('sidemenu')) {
    $("#ds-search-option").appendTo("#file_news_div_news");
    $('#ds-search-option').css('max-width', '400px');
    $('#ds-options').empty(); 
    $('#sidemenu').appendTo('#ds-options');
    $('#sidebar').prependTo('.horizontal-slider');
}*/

// sidemenu.html resides in [source]\dspace\modules\xmlui\src\main\webapp\static\

// MCStor homepage
if (window.location.pathname == "/") {
    $.get('/sidemenu.html', function(sidemenu) {
        $(sidemenu).appendTo('#sidebar');
        $('#ds-search-option').appendTo('#file_news_div_news');
        $('#ds-search-option').css('max-width', '400px');
    });
    $('#ds-options').hide();
}

// Pages defined in xsl/core/page-structure.xsl
if (window.location.pathname.substring(0,5) == "/page") {
    $.get('/sidemenu.html', function(sidemenu) {
        $(sidemenu).appendTo('#sidebar');
        $('#ds-search-option').prependTo('#sidemenu');
    });
    $('#ds-options').hide();
}
