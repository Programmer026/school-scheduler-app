import React from 'react';
  
export default class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-large blue" style={{color:'white', fontSize:17, backgroundColor:'#4fc3f7'}}>

                <div className="footer-copyright text-center py-3">
                    All Rights Reserved © 2022 Bille Emmanuel
                </div>

            </footer>
        );        
    }
};