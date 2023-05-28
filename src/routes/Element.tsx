import { Suspense, lazy, ElementType, } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

// loading screen

const Loadable = (Component: ElementType) => (props: any) =>
(
    <Suspense fallback={<LoadingSpinner/>}>
        <Component {...props} />
    </Suspense>
);

export const Admin = Loadable(
    
 lazy(()=>import('../pages/home'))
);

