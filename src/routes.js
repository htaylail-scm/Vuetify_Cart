import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About"
export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        props: true
    }
]