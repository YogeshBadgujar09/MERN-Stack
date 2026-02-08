@extends('layouts.master')

@section('title', 'Student Registration')

@section('content')

<style>
    /* Form container */
    .register-form {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    /* Labels */
    .register-form label {
        font-weight: 600;
        color: #374151;
    }

    /* Inputs */
    .register-form input {
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid #d1d5db;
        font-size: 14px;
        transition: 0.3s;
    }

    .register-form input:focus {
        outline: none;
        border-color: #6366f1;
        box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
    }

    /* Button */
    .register-form button {
        margin-top: 10px;
        padding: 12px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .register-form button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(99,102,241,0.3);
    }

    /* Error message */
    .error {
        color: #dc2626;
        font-size: 13px;
        margin-top: -8px;
    }
</style>

<x-card title=" Student Registration Form">

    <form class="register-form" method="POST" action="/register">
        @csrf

        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your name" value="{{ old('name') }}">
        @error('name')
            <p class="error">{{ $message }}</p>
        @enderror

        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" value="{{ old('email') }}">
        @error('email')
            <p class="error">{{ $message }}</p>
        @enderror

        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password">
        @error('password')
            <p class="error">{{ $message }}</p>
        @enderror

        <button type="submit">Register</button>
    </form>

</x-card>

@endsection
