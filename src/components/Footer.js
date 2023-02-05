import React from "react";

const Footer = () => {
    return (
        <div className="bg-amber-100 flex flex-wrap gap-4 py-4 justify-between">
            <div>
                <h1 className="text-gray-900 text-xl ml-4">This site is developed By: Kushagra Upadhyaya.</h1>
            </div>
            <div className="text-xl font-semibold flex gap-4 mr-5">
                <a href="https://www.github.com/kushagra23dec" target="_blank"><h1 className="">Github</h1></a>
                <a href="https://leetcode.com/Kushagra23dec/" target="_blank"><h1 className="">Leetcode</h1></a>
            </div>
        </div>
    )
}

export default Footer;