<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


use App\Http\Controllers\StudentController;

Route::get('/register', [StudentController::class, 'create']);
Route::post('/register', [StudentController::class, 'store']);