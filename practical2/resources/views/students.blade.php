@extends('layouts.master')

@section('content')
<h2>Student List</h2>

@if(count($students) > 0)
@foreach($students as $student)
<x-card title="Student">
    <p>{{ $student['name'] }}</p>
    <p>{{ $student['email'] }}</p>
</x-card>
@endforeach
@else
<p>No students found</p>
@endif
@endsection