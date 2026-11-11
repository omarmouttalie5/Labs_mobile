<?php
trait Loggable {
    public function log(string $message): void {
        echo '[' . static::class . '] ' . $message . PHP_EOL;
    }
}

class User  { use Loggable; }
class Order { use Loggable; }

(new User())->log('User created');
(new Order())->log('Order placed');