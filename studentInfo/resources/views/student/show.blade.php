@extends('layouts.master')
@section('title', 'Student Details')
@section('content')

<x-card title="Submitted Data">
    <p><strong>Name:</strong> {{ $data['name'] }}</p>
    <p><strong>Email:</strong> {{ $data['email'] }}</p>

    @if(strlen($data['name']) > 5)
    <p>Name length is greater than 5</p>
    @else
    <p>Name length is less than or equal to 5</p>
    @endif@extends('layouts.master')
@section('title', 'Student Details')

@section('content')

<style>
    /* Card text */
    .card p {
        font-size: 15px;
        color: #374151;
        margin: 6px 0;
    }

    /* Conditional message */
    .status {
        margin-top: 10px;
        font-weight: bold;
        color: #2563eb;
    }

    /* Student list */
    .student-list {
        list-style: none;
        padding: 0;
    }

    .student-list li {
        background-color: #f9fafb;
        margin-bottom: 8px;
        padding: 10px;
        border-radius: 6px;
        font-size: 14px;
    }

    /* Numbers section */
    .number-box {
        display: inline-block;
        margin: 5px;
        padding: 8px 12px;
        background-color: #e0e7ff;
        color: #1e3a8a;
        border-radius: 6px;
        font-weight: bold;
    }

    h3 {
        text-align: center;
        margin-top: 30px;
        color: #1f2937;
    }
</style>

<x-card title="Submitted Data">
    <p><strong>Name:</strong> {{ $data['name'] }}</p>
    <p><strong>Email:</strong> {{ $data['email'] }}</p>

    @if(strlen($data['name']) > 5)
        <p class="status">Name length is greater than 5</p>
    @else
        <p class="status">Name length is less than or equal to 5</p>
    @endif
</x-card>

<x-card title="Student List">
    <ul class="student-list">
        @foreach($students as $student)
            <li>{{ $student['name'] }} – {{ $student['email'] }}</li>
        @endforeach
    </ul>
</x-card>

<h3>Numbers using @@for loop</h3>

@for($i = 1; $i <= 5; $i++)
    <span class="number-box">{{ $i }}</span>
@endfor

@endsection

</x-card>
<x-card title="Student List">
    <ul>
        @foreach($students as $student)
        <li>{{ $student['name'] }} - {{ $student['email'] }}</li>
        @endforeach
    </ul>
</x-card>
<h3>Numbers using @@for loop</h3>

@for($i = 1; $i <= 5; $i++) <span>{{ $i }}</span>
    @endfor

    @endsection