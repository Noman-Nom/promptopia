import '@styles/globals.css'
import Nav from '@components/Nav'
import Profile from '@components/Profile'

export const metadata = {

    title: "Promptopia",
    description: "Discover and Shear AI Prompts"
}
const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradiant' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout
