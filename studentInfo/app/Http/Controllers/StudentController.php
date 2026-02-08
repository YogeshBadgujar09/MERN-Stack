<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class StudentController extends Controller
{
    // Show registration form
    public function create()
    {
        return view('student.register');
    }
    // Handle form submission
    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required|min:3',
            'email'    => 'required|email',
            'password' => 'required|min:6'
        ]);
        $students = [
            ['name' => 'Nandani', 'email' => 'nandani@gmail.com'],
            ['name' => 'Dinal', 'email' => 'dinal@gmail.com'],
            ['name' => 'Kruti', 'email' => 'Kruti@gmail.com'],
             ['name' => 'Kashish', 'email' => 'Kashish@gmail.com'],
        ];
        return view('student.show', [
            'data' => $request->all(),
            'students' => $students
        ]);
    }
}