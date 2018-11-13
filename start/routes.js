'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Database = use('Database')
const Route = use('Route')

Route.group(() => {
  Route.get('test', 'TestController.index')
}).prefix('api/v1')

Route.post('tours', 'TourController.index')

Route.get('getTours', async () => {
  return await Database
    .table('tours')
    .select('*')
    .limit(3)
})

Route.post('CommentController', 'CommentController.index')

Route.get('getComments', 'GetCommentController.index')

Route.post('MakeOrderController', 'MakeOrderController.index')

Route.get('SortByPriceUp', 'SortByPriceUpController.index')

Route.get('SortByPriceDown', 'SortByPriceDownController.index')

Route.get('LoadMore', 'LoadMoreController.index')