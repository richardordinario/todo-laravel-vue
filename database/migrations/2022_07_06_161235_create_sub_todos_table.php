<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_todos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('todo_id');
            $table->foreign('todo_id')->references('id')->on('todos')->onDelete('cascade');
            $table->string('title');
            $table->boolean('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sub_todos');
    }
}
