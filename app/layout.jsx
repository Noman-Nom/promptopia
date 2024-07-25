import '@styles/globals.css'

export const metadata = {

    title: "Promptopia",
    description: "Discover and Shear AI Prompts"
}
const RootLayout = () => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradiant' />
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout
