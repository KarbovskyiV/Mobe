<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductMemory extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function products()
    {
        return $this->belongsTo(Product::class);
    }
}
