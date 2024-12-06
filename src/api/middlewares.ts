import {MedusaNextFunction, MedusaRequest, MedusaResponse} from "@medusajs/framework/http";
import {defineMiddlewares} from "@medusajs/medusa";

export default defineMiddlewares({
    routes: [
        {
            matcher: "/admin/custom/*",
            middlewares: [
                (
                    req: MedusaRequest,
                    res: MedusaResponse,
                    next: MedusaNextFunction
                ) => {
                    console.log("Received a request!")

                    next()
                },
            ],
        },
    ],
});