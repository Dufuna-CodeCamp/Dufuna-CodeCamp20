<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //protected $fillable = ['name_', 'email', 'gender', 'created_at'];
    public $timestamps = false;
    protected $guarded = []; //make all fields assignable
}