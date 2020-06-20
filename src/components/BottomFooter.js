import React from 'react'

const BottomFooter = () => {
    var d = new Date();
    var n = d.getFullYear();
    return (
        <>
            <div className="footerbelow text-center">
                <p className="bg-dark">Copyright@ {n} All rights reserved | Designed by <span><a href="https://github.com/oluwatoyinn">oluwatoyinn</a> </span></p>
            </div>
        </>
    )
}
export default BottomFooter

