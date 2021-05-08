import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Notification({ variant, message }) {
  return (
    <>
      <Alert variant={variant}>
        {message}
      </Alert>
    </>
  )
}
