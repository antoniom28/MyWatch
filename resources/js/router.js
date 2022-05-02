import Vue from "vue";
        import VueRouter from "vue-router";

        Vue.use(VueRouter);
        
        import Home from "./pages/Home";
        import NotFound from "./pages/NotFound";
        /*import MainPage from "./pages/MainPage";
        import CardUser from "./pages/CardUser";
        import Payment from "./pages/Payment";
        import SuccessPayment from "./pages/SuccessPayment";*/

        const router = new VueRouter({
            mode: "history",
            routes: [
                {
                    path: "/",
                    name: "Home",
                    component: Home
                },
                /*{
                    path: "/main/:address",
                    name: "main",
                    component: MainPage
                },
                {
                    path: "/card-user/:activity",
                    name: "CardUser",
                    component: CardUser
                },
                {
                    path: "/payment",
                    name: "Payment",
                    component: Payment
                },
                {
                    path: "/payment/success",
                    name: "SuccessPayment",
                    component: SuccessPayment
                },*/
				{
		            path: "*",
		            name: "Not-Found",
		            component: NotFound
		        },
            ]
        });

        export default router