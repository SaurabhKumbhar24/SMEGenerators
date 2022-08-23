import React from 'react';
import "../styles/e404.css";

function Error404(props) {
    return (
        <div className="mainBody">
            <div className="row">
                <div>
                    <div>
                        <h1 className="text">Error 404</h1>
                        <p className="text">Page not found</p>
                    </div>
                    <div className="mt20">
                        <a type="button" className='myBtn' href='https://www.smegenerators.com'>HOME</a>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Error404;