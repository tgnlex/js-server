import express from 'express';
import {Eta} from 'eta';
import {absolute} from 'path';

const web = express();
const router = express.Router();
const viewDir = absolute('/repos/js-server/src/web/template/view/')
const eta = new Eta({ views: viewDir });


export {web, router, eta}

