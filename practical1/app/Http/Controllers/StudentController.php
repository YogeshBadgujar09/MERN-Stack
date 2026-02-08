<?php

namespace App\Http\Controllers;


class StudentController extends Controller
{
    public function showInformation($studentId, $studentName)
    {
        return view('student', [
            'studentId' => $studentId,
            'studentName' => $studentName
        ]);
    }
}
