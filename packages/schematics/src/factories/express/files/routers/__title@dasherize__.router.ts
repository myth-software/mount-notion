<% if (options.debug) { %>
  <%= log.debug({ action: 'debugging', message: `controller: title ${title ? 'is ' + title : 'is not defined'}` }) %>
<% } %>

import express, { Request, Response } from 'express';
import { validateRequestBody } from 'zod-express-middleware';
import { insert<%= classify(title) %>Schema } from '<%= options.drizzle %>';

import <%= camelize(title) %>Controller from '../controllers/<%= dasherize(title) %>.controller';

import middleware from '../middleware';

export const <%= camelize(title) %>Router = express.Router();

<%= camelize(title) %>Router.use(middleware.router);

<%= camelize(title) %>Router.get('/', middleware.query, <%= camelize(title) %>Controller.query, middleware.logAfterSend);

<%= camelize(title) %>Router.get('/:id', middleware.getById, <%= camelize(title) %>Controller.getById, middleware.logAfterSend);

<%= camelize(title) %>Router.post('/', middleware.create, validateRequestBody(insert<%= classify(title) %>Schema), <%= camelize(title) %>Controller.create, middleware.logAfterSend);

<%= camelize(title) %>Router.patch('/:id',  middleware.updateById, validateRequestBody(insert<%= classify(title) %>Schema), <%= camelize(title) %>Controller.updateById, middleware.logAfterSend);

<%= camelize(title) %>Router.delete('/:id', middleware.deleteById, <%= camelize(title) %>Controller.deleteById, middleware.logAfterSend);
