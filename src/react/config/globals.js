import express from 'express';

const server = express();

const entryPoint = ['/root.jsx'];

const shellError = "<!doctype html><p>Loading...</p>";
const startMessage = `app is running on http://${HOST}:${PORT}`
