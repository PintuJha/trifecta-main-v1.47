import React from 'react'

// import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';





export default class AddInventory extends React.Component {

    render() {
        return (
            <>
                <div className="addinventory">
                    {/* =============BREAD CRUMBS SECTION CODE START==================== */}
                    <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
                        <Link color="inherit" href="/RoomCategory">Room Category</Link>
                        <Link color="inherit" href="/Floor">Floor</Link>
                        <Link color="inherit" href="/RoomNo">Room No</Link>
                        <Link color="inherit" href="/ViewTariff">Tariff plan</Link>
                    {/* <Link color="inherit" href="/AddInventory">Inventory</Link> */}

                        <Link color="inherit" href="/ViewInventory">Inventory</Link>
                    </Breadcrumbs>

                    {/* =============BREAD CRUMBS SECTION CODE START==================== */}
                    <div>
                    <h5 className="mb-3">Add Inventory</h5>

        

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormGroup row>
                                    <label className="chanel-heading"><span>CHANELS</span></label>

                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="MASTER"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="BCOM"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="AGODA"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="BCOM"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="BCOM"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="BCOM"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" />}
                                        label="BCOM"
                                    />


                                </FormGroup>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField className="w-100"
                                    id="date"
                                    label="Form Date"
                                    type="date"
                                    defaultValue="2021-04-11"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField className="w-100"
                                    id="date"
                                    label="To"
                                    type="date"
                                    defaultValue="2021-04-11"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>


                            {/* ============TABLE CODE START========= */}
                            <Grid item xs={12}>
                                <Paper>
                                    <table class="table mt-4">
                                        <thead>
                                            <tr>
                                                <th>Room Category</th>
                                                <th>Availability</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >STANDARD</td>
                                                <td><input style={{color: "12%"}} type="number" className="form-control"></input></td>
                                            </tr>
                                            <tr>
                                                <td>DELUXE</td>
                                                <td><input style={{color: "12%"}} type="number" className="form-control"></input></td>
                                      
                                            </tr>
                                            <tr>
                                                <td>ROLAY</td>
                                                <td><input style={{color: "12%"}} type="number" className="form-control"></input></td>
                                      
                                            </tr>

                                        </tbody>
                                    </table>
                                </Paper>
                            </Grid>

                            <div className="text-center m-auto">
                                <Button variant="contained" color="primary" className="mr-3"> Save </Button>
                                <Button variant="contained" color="secondary">Reset   </Button>
                            </div>
                            {/* ============TABLE CODE START========= */}
                        </Grid>
                    </div>

                </div>
            </>
        )
    }
}