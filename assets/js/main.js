$(document).ready(function(){
    $(document).ready(function() {
        $('select').material_select();
        // $('select').material_select('destroy');
    });
    $(document).ready(function() {
        Materialize.updateTextFields();
    });
    $(".button-collapse").sideNav();
    $(document).ready(function(){
        $('ul.tabs').tabs('select_tab', 'tab_id');
    });
});


