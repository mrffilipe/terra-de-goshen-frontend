import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout