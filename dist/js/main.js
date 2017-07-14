$(function() {
    $('.cell').click(e=>{
        let cell = $(e.target);
        cell.addClass('occupied');
    });
})
