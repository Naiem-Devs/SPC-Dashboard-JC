var tableOffset = $("#table-1").offset().top;
var $header = $("#table-1 > thead").clone();
var $fixedHeader = $("#table-header-fixed").append($header);

$(window).bind("scroll", function() {
  var offset = $(this).scrollTop();

  if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
    $fixedHeader.show();
  } else if (offset < tableOffset) {
    $fixedHeader.hide();
  }
});



{/* <style>
.table{
    overflow: auto;
    height: 500px;
}
#table-header-fixed {
    position: fixed;
    top: 0px;
    display: none;
    background-color: white;
}
.table thead th {
    font-weight: 400;
    position: sticky;
    top: 10px;
    background: #fff;
    padding-top: 20px;
    z-index: 99;
}
</style>


<div class="table">  <!-- Set fixed Hight -->
<table id="table-1">
</table>


<table id="table-header-fixed"></table>
</div>  */}