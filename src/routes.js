import { Router } from 'express';
import takeScreenshot from './screenshot.js';
import path from 'path';

const routes = Router();

routes.use('/getscreenshot', async (req, res) => {
    try {
        await takeScreenshot();

        const file = path.resolve('temp/test.png');

        res.sendFile(file);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
})

routes.use('/', async (req, res) => {
    return res.json({
        status: 'server online!',
        version: process.env.npm_package_version
    });
})

export default routes;
