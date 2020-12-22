import React, { lazy, Suspense } from "react"
import { Loading } from "@/components/"
const LoginModal = lazy(() => import("@/components/LoginModal"))

function GlobalModal(props) {
    const params = new URLSearchParams(props.location.search)

    let component = null

    if (params.get("login")) {
        component = <LoginModal />
    } else if (props.location.pathname === "/hedefler") {
        if (params.get("yeni")) {
            component = "yeni hedef"
        } else if (params.get("filtrele")) {
            component = "<Filter />"
        }
    }
    return (
        <Suspense fallback={<Loading />}>
            {component}
        </Suspense>
    )
}

export default GlobalModal