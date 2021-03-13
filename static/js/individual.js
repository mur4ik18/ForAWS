function articleMain() {
    $(document).on('click', '#dirleft', function(){
        var csp = $('.aPanel:visible');
        var nsp = nsp = $('.aPanel:visible').parent().prev().children();
        if (nsp.length == 0) {
            nsp = $('.aPanel:visible').parent().children().last();
        }
        csp.hide();
        nsp.show();
    });

    $(document).on('click', '#dirright', function(){
        var csp = $('.aPanel:visible');
        var nsp = nsp = $('.aPanel:visible').parent().next().children();
        if (nsp.length == 0) {
            nsp = $('.aPanel:visible').parent().children().first();
        }
        csp.hide()
        nsp.show();
    });
}
$(document).ready(articleMain());