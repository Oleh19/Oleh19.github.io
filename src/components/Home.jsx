import React from 'react'
import Layout from './layout/Layout'

function Home() {
    return (
        <>
            <Layout />
            <div className="text-customsq text-white bg-opacity-0 font-semibold absolute top-2/4 left-10 text-center z-50 px-2">
                You can choouse one options from above
            </div>
        </>
    )
}

export default Home