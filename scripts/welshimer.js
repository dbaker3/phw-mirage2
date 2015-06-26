if (document.getElementById('sidemenu')) {
    $("#ds-search-option").appendTo("#file_news_div_news");
    $('#ds-search-option').css('max-width', '400px');
    $('#ds-options').empty(); 
    $('#sidemenu').appendTo('#ds-options');
    $('#sidebar').prependTo('.horizontal-slider');
}
