<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    // a) Display registration form
    public function create()
    {
        return view('students.register');
    }

    // b) Handle form submission with validation
    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required|min:3',
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        $student = $request->all();

        return view('students.show', compact('student'));
    }

    // c) Display submitted data
    public function index()
    {
        $students = [
            ['name' => 'Rahul', 'email' => 'rahul@gmail.com'],
            ['name' => 'Nandani', 'email' => 'nandani@gmail.com'],
            ['name' => 'Amit', 'email' => 'amit@gmail.com'],
        ];

        return view('students.list', compact('students'));
    }
}