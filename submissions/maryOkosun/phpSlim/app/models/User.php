<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['title', 'description', 'status','created_by', 'created_at'];
    public $timestamps = false;
}