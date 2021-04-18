import { Router } from 'express';
import takeScreenshot from './screenshot.js';
import cropImage from './crop.js';
import path from 'path';

const routes = Router();

routes.use('/getscreenshot', async (req, res) => {
    try {
        const img = await takeScreenshot();

        await cropImage(img);

        const result = path.resolve('temp/result.png');

        res.sendFile(result);
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
