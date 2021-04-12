import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
export default class CancelList extends React.Component{
    render(){
        return(
            <>
              {/* =============BREAD CRUMBS SECTION CODE START==================== */}
  <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
             <Link color="inherit" href="/NewReservation">New Reservation</Link>
             {/* <Link color="inherit" href="/ViewReservation">View Reservation Details</Link> */}
             <Link color="inherit" href="/CancelList">Cancel List</Link>
             <Link color="inherit" href="/TravelAgentThirdParty">Booking Reference</Link>
          </Breadcrumbs>
         
 
{/* =============BREAD CRUMBS SECTION CODE START==================== */}
                <h1>Cancel List</h1>
            </>
        )
    }
}