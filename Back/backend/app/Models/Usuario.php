<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Tymon\JWTAuth\Contracts\JWTSubject;
class Usuario extends Model implements JWTSubject
{
    use HasFactory;
    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class,'person_id');
    }
    public function rol(): BelongsTo
    {
        return $this->BelongsTo(Rol::class,'rol_id');
    }
    public function bitacora(): HasMany
    {
        return $this->HasMany(Bitacora::class, 'user_id');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}
