$(function() {

    let turn = 0;

    $('.board').on('click', '.open', e=>{
        let cell = $(e.target);
        cell.addClass('occupied');
        cell.removeClass('open');
        cell.text(turn?'X':'O');
        turn = !turn;
    });
});
