<?php
class UserNotFoundException extends RuntimeException {}

function findUser(array $users, int $id): string {
    if (!isset($users[$id])) {
        throw new UserNotFoundException("User $id not found");
    }
    return $users[$id];
}

$users = [1 => 'Sara', 2 => 'Omar'];

try {
    echo findUser($users, 1) . PHP_EOL;
    echo findUser($users, 42) . PHP_EOL;
} catch (UserNotFoundException $e) {
    echo 'Error: ' . $e->getMessage() . PHP_EOL;
} finally {
    echo 'Done' . PHP_EOL;   // always executed
}