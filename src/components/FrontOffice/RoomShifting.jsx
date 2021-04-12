import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
export default class RoomShifting extends React.Component{
    render(){
        return(
            <>

              {/* =============BREAD CRUMBS SECTION CODE START==================== */}
         <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
             <Link color="inherit" href="/StayView">Stay View</Link>
             <Link color="inherit" href="/CheckIn">Check In</Link>
             <Link color="inherit" href="/CheckOut">Check Out</Link>
             <Link color="inherit" href="/RoomShifting">Room Shifting</Link>
             <Link color="inherit" href="/EditBooking">Edit Booking</Link>
             <Link color="inherit" href="/EarlyCheckOut">Early CheckOut</Link>
             <Link color="inherit" href="/EodSaleReport">EOD Sale Report</Link>
             <Link color="inherit" href="/MealReport">Meal Report</Link>
             <Link color="inherit" href="/OccupancyReport">Occupancy Report</Link>
             <Link color="inherit" href="/DirectBookingReport">Direct Booking Report</Link>
          </Breadcrumbs>
         
 
{/* =============BREAD CRUMBS SECTION CODE START==================== */}
                <h1>Room Shifting</h1>
            </>
        )
    }
}