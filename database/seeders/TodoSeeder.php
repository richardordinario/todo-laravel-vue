<?php

namespace Database\Seeders;

use App\Models\SubTodo;
use App\Models\Todo;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $todo = Todo::create([
        'user_id' => 1,
        'title' => 'Grocery',
      ]);
      $todo->sub_todos()->create([
        'title' => 'Eggs'
      ]);
      $todo->sub_todos()->create([
        'title' => 'Chicken'
      ]);
    }
}
