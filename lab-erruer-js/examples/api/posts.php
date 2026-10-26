<?php
declare(strict_types=1);

// Working API: JSON output, CORS for the front end on port 5500, GET and POST.
$allowed = ['http://localhost:5500', 'http://127.0.0.1:5500'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$file = __DIR__ . '/posts.json';
$posts = is_file($file)
    ? json_decode((string) file_get_contents($file), true)
    : [
        ['id' => 1, 'title' => 'Hello world', 'content' => 'My first post'],
        ['id' => 2, 'title' => 'Learning to debug', 'content' => 'Read the error message'],
        ['id' => 3, 'title' => 'Using DevTools', 'content' => 'Console and Network tabs'],
    ];

if ($method === 'POST') {
    $data = json_decode((string) file_get_contents('php://input'), true);
    if (empty($data['title']) || empty($data['content'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Title and content are required']);
        exit;
    }
    $id = count($posts) + 1;
    $posts[] = ['id' => $id, 'title' => $data['title'], 'content' => $data['content']];
    file_put_contents($file, json_encode($posts));
    http_response_code(201);
    echo json_encode(['id' => $id]);
    exit;
}

echo json_encode(['data' => $posts, 'total' => count($posts)]);
