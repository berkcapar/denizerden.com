const { default: Navigation } = require("./Navigation")

const Layout = ({children}) => {
    return (
        <div>
            <Navigation/>
            <main>
            {children}
            </main>
        </div>
    )
}
export default Layout