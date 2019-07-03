import {parse} from 'url';

import {Application} from 'express';

import {create, list} from 'controllers/send';

export = (app: Application) => {
    // Создаем маршруты для отрисовки страниц
    app.get('/', (_req, res) => res.renderPage('/list'));

    app
        .route('/api')
        .get(list)
        .post(create);

    // Если роутер не выбрал подходящий для запроса маршрут – используется этот
    app.all('*', (req, res) => {
        // Для обработки запроса используем стандартный для Next.js обработчик
        const handleRequest = req.nextApp.getRequestHandler();
        const parsedUrl = parse(req.url, true);

        return handleRequest(req, res, parsedUrl);
    });
};
