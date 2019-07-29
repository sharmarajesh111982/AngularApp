"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var cart_component_1 = require("./components/cart/cart.component");
var product_component_1 = require("./components/products/product.component");
var routes = [
    { path: '', component: product_component_1.ProductComponent },
    { path: 'products', component: product_component_1.ProductComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map