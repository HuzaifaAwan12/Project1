import React, { useState } from 'react';
import './Signin.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setIsSignedIn(true);
    } else {
      alert('Please enter both email and password.');
    }
  };
