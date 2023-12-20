import dynamic from "next/dynamic";

export const AboutAsyncPage = dynamic(() => import("./page"));
