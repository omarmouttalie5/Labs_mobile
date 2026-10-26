<?php
// Same data as posts.php but WITHOUT CORS headers. Used to reproduce Error 3.
header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'data' => [
        ['id' => 1, 'title' => 'Hello world'],
        ['id' => 2, 'title' => 'Learning to debug'],
    ],
    'total' => 2,
]);
