window.ait = window.ait || {};
(function() {
    function getScript(src) {
        document.write('<script src=\"' + src + '"' + ' type="text/javascript" charset="utf-8"></script>');
    }
    ait.service_base = ait.service_base || '//vnz.osvita.net';

    getScript("//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.4.2.min.js");
    getScript("//ajax.aspnetcdn.com/ajax/jquery.ui/1.8.18/jquery-ui.min.js");
    getScript('js/schedule.min.js');
})();