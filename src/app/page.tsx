// components
"use client";
import { Navbar, Footer } from "@/components";
import { useLocation } from "react-router-dom";

// sections
import Hero from "./hero";
import Games from "./games";
import Feature from "./bank-info";
import HistoryPlay from "./history-play";
import History from "./history";
import TopRich from "./topRich";
import Rule from "@/app/rule";
import {useEffect, useState} from "react";
import Loading from "@/components/loading/loading";

export default function Campaign() {
    const [loading, setLoading] = useState(true);
    // const location = useLocation()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    },[])
  return (
    <>
        {loading? <Loading/> :
            <>
                <Navbar />
                <Hero />
                <Games />
                <Feature />
                <HistoryPlay />
                <History />
                <TopRich />
                <Rule />
                <Footer />
            </>
        }
    </>

  );
}
