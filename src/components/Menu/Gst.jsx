import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
export default class Gst extends React.Component{
    render(){
        return(
            <>
              {/* =============BREAD CRUMBS SECTION CODE START==================== */}
         <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
             <Link color="inherit" href="/GstInfo">GST Info</Link>
             <Link color="inherit" href="/GST">GST</Link>
          </Breadcrumbs>
         
 
{/* =============BREAD CRUMBS SECTION CODE START==================== */}
                <h1>GST</h1>
            </>
        )
    }
}