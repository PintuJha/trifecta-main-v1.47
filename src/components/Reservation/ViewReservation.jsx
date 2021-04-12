import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
export default class ViewReservation extends React.Component {
    render() {
        return (
            <>
                {/* =============BREAD CRUMBS SECTION CODE START==================== */}



                {/* =============BREAD CRUMBS SECTION CODE START==================== */}
                <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
                    {/* <Link color="inherit" href="/NewReservation">New Reservation</Link> */}
                    <Link color="inherit" href="/ViewReservation">Reservation</Link>
                    <Link color="inherit" href="/CancelList">Cancel List</Link>
                    <Link color="inherit" href="/TravelAgentThirdParty">Booking Reference</Link>
                </Breadcrumbs>


                {/* =============BREAD CRUMBS SECTION CODE START==================== */}

                {/* <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
  demo.trifectahms.in
          </Breadcrumbs> */}


                {/* =============BREAD CRUMBS SECTION CODE START==================== */}

                <Tooltip title="Add">
                    <IconButton aria-label="add" href="/NewReservation">
                        <AddIcon />
                    </IconButton>
                </Tooltip>


                <h5>Reservation List</h5>

                <div className="reservation-table-section">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>SR. No</th>
                                <th>B_id</th>
                                <th>NAME</th>
                                <th>ROOMNO.</th>
                                <th>CHECKIN DATE</th>
                                <th>CHECK OUT DATE</th>
                                <th>ROOM PRICE</th>
                                <th>EXTRA BED CHARGES</th>
                                <th>TOTAL CHARGES</th>
                                <th>ADV PAYMENT</th>
                                <th>NET CHARGES</th>
                                <th>PAX</th>
                                <th> CHILD</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>Vijay</td>
                                <td>123</td>
                                <td>13-04-2021</td>
                                <td>14-04-2021</td>
                                <td>2000</td>
                                <td>500</td>
                                <td>2500</td>
                                <td>1000</td>
                                <td>1500</td>
                                <td>2</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}