<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable =['name', 'email_address','created_at'];
    public $timestamps = false;
}