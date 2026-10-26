<?php
// Broken endpoint: the SQL query uses a column that does not exist.
// Used to reproduce Error 5. Requires the pdo_sqlite extension.
ini_set('display_errors', '1');
error_reporting(E_ALL);

$pdo = new PDO('sqlite::memory:');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('CREATE TABLE posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT)');

$data = json_decode((string) file_get_contents('php://input'), true);

// BUG: the table column is called "content", not "body".
$stmt = $pdo->prepare('INSERT INTO posts (title, body) VALUES (:title, :body)');
$stmt->execute([':title' => $data['title'], ':body' => $data['content']]);

echo json_encode(['id' => $pdo->lastInsertId()]);
