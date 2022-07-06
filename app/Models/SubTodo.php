<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubTodo extends Model
{
    use HasFactory;

    protected $fillable = [
      'todo_id',
      'title',
      'status',
    ];

    public function todo()
    {
      return $this->belongsTo(Todo::class, 'todo_id');
    }
}
