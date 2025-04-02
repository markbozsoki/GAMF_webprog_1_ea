<?php
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    $time = date('r');
    echo "data: DEBUG-Server ping-{$time}\n\n";
    usleep(0,5 * 1000 * 1000);
    flush();
?>