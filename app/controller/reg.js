const Controller = require('egg').Controller;

class RegController extends Controller {
    async index() {
        const ctx = this.ctx;
        await ctx.render('reg/index.html');
    }
}

module.exports = RegController;