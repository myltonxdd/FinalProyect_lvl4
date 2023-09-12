<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bitacora extends Model
{
    use HasFactory;
    public function usuario(): BelongsTo
    {
        return $this->BelongsTo(Usuario::class,'user_id');
    }
}
