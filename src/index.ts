import express from 'express';
import App from './app';
import { morganMiddleware } from './middlewares/morganMiddleware';
import { Logger } from './utils/logger';

const app = new App();

app.listen();
