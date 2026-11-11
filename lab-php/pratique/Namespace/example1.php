<?php
namespace App\Models {
    class User {
        public function __construct(public string $name) {}
    }
}

namespace App\Services {
    class Mailer {
        public function send(): string { return 'App Mailer: order email sent'; }
    }
}

namespace Vendor\Lib {
    class Mailer {
        public function send(): string { return 'Vendor Mailer: external email sent'; }
    }
}

namespace {
    use App\Models\User;
    use App\Services\Mailer;
    use Vendor\Lib\Mailer as ExternalMailer;   // alias avoids the clash

    $user   = new User('Sara');
    $mailer = new Mailer();
    $other  = new ExternalMailer();

    echo $user->name . PHP_EOL;
    echo $mailer->send() . PHP_EOL;
    echo $other->send() . PHP_EOL;
}