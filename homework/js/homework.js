
var silderPage = (function(){
    var slidePageFrom = function(direction){
        pagingSlider.slidePageFrom('.myPageContainerClass', direction);
        $("#nav-num").val(pagingSlider._currentPage.attr("page"));
    };
    var setPage = function(pageNumber){
        pageNumber = parseInt(pageNumber);
        if (pageNumber > pagingSlider._pageCount || pageNumber <= 0){
            alert("无效页面！");
            return;
        }
        pagingSlider.setPage('.myPageContainerClass', pageNumber);
        $("#nav-num").val(pageNumber);

    }

    return {
        slidePageFrom : slidePageFrom,
        setPage : setPage

    }
})();

$(document).ready(function(){
    pagingSlider.loop = false;
    pagingSlider._pageCount = 3;

    $$('#wrapper').swipeLeft(function(){
        silderPage.slidePageFrom('right');
    });

    $$('#wrapper').swipeRight(function(){
        silderPage.slidePageFrom('left');
    });
});


