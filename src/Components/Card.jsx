import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = () => {
    return (
        <div className="card">
            <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5wT5R7vumVlrrcVIzxKqoqNYtNmpJqwMIQ&s" alt="Amazon-Icon" />
                <button>Save <Bookmark /></button>
            </div>
            <div className="center">
                <h3>Amazon <span>% dayd ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className='tag'>
                    <h4>Part Time</h4>
                    <h4>Senior Level</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card