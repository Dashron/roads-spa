import * as React from 'react';
import { Index, title as IndexPageTitle } from './index';
import { RouterMiddleware, Response } from 'roads';
import { StoreValsContext } from 'roads/types/middleware/storeVals';

export const addRoutes = (router: RouterMiddleware.Router<StoreValsContext>) => {
	router.addRoute('GET', '/', async function () {
		this.storeVal('title', IndexPageTitle);
		return new Response(<Index />);
	});

};
