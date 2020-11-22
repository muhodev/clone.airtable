import React, { lazy, Suspense } from "react"
import Filter from "../Filter"
import Loading from "../Loading"
import YeniHedefModal from "../YeniHedefModal"

const LoginModal = lazy(() => import("../LoginModal"))

function GlobalModal(props) {
    const params = new URLSearchParams(props.location.search)

    let component = null

    if (params.get("login")) {
        component = <LoginModal />
    } else if (props.location.pathname === "/hedefler") {
        if (params.get("yeni")) {
            component = <YeniHedefModal />
        } else if (params.get("filtrele")) {
            component = <Filter />
        }
    }
    return (
        <Suspense fallback={<Loading />}>
            {component}
        </Suspense>
    )
}

export default GlobalModal