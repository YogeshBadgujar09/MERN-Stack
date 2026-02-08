<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\RegistrationController;

Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\StudentController;

Route::get('/register', [StudentController::class, 'create']);
Route::post('/register', [StudentController::class, 'store'])->name('register.store');
Route::get('/students', [StudentController::class, 'index']);

?>