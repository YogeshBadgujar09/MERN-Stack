@extends('layouts.app')

@section('content')

<x-card title="Registration Details">
    Name: {{ $name }} <br>
    Email: {{ $email }}
</x-card>

@endsection