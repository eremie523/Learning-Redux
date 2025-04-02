"use client"
import CakeContainer from "@/components/CakeContainer";
import CakeContainerHookMethod from "@/components/CakeContainerHookMethod";
import IceCreamContainer from "@/components/IceCreamContainer";
import IceCreamHookMethod from "@/components/IceCreamHookMethod";
import store from "@/redux/store";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <CakeContainer />
        {/* <CakeContainerHookMethod /> */}
        <IceCreamContainer />
        {/* <IceCreamHookMethod /> */}
      </Provider>
    </main>
  );
}
