import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Box, Typography, Button, Tooltip, Dialog, TextField, RadioGroup, FormControlLabel } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function User() {
    const classes = useStyles();

    const [isAddPop, setAddUserPop] = useState(false);
    const [isCUAPop, setCUAPop] = useState(false);
    const [designation,setDesignation] = useState("n");
    const [userAccount, setUserAccount] = useState("n");
    const [status,setStatus] = useState("y");

    const data = [];

    const options = {
        filterType: 'checkbox',
    };
    const UserColumns = ["Sr.No", "Name", "Gender", "Email", "Mobile", "Designation", "User Type", "User Name", "Password", "Status", "Action"];

    const CUAColumns = ["Sr.No.", "Designation", "Action"]

    const getDesignation = (e) => {
        setDesignation(e.target.value);
    }

    const getUserAccount = (e) => {
        setUserAccount(e.target.value);
    }

    const getStatus = (e) => {
        setStatus(e.target.value);
    }

    const resetUser = () => {
        setAddUserPop(false);
    }

    const resetCUA = () => {
        setCUAPop(false);
    }

    return (
        <Box>
     {/* =============BREAD CRUMBS SECTION CODE START==================== */}
          <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
             <Link color="inherit" href="/User">User</Link>
             <Link color="inherit" href="/StaffRecord">Staff Record</Link>
             <Link color="inherit" href="/AccessReport">Access Report</Link>
          </Breadcrumbs>
     {/* =============BREAD CRUMBS SECTION CODE START==================== */}


            <Typography variant="h6">User</Typography>
            <Tooltip title="Add User" aria-label="AddUser">
                <IconButton aria-label="AddUser">
                    <PersonAddTwoToneIcon onClick={() => setAddUserPop(true)} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Control User Access" aria-label="CUA">
                <IconButton aria-label="CUA">
                    <AccessibilityNewTwoToneIcon onClick={() => setCUAPop(true)} />
                </IconButton>
            </Tooltip>
            <MUIDataTable
                title={"User List"}
                data={data}
                columns={UserColumns}
                options={options}
            />

            <Dialog onClose={() => this.setAddUserPop(false)} aria-labelledby="add-category-title" open={isAddPop}>
                <MuiDialogTitle disableTypography >
                    <Typography variant="h6">Add User</Typography>
                </MuiDialogTitle>
                <MuiDialogContent dividers>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <RadioGroup aria-label="charges" name="charges" row>
                            <FormControlLabel value="M" control={<Radio />} label="Male" />
                            <FormControlLabel value="F" control={<Radio />} label="Female" />                            
                        </RadioGroup>
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Mobile No." variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Designation</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={designation}
                                onChange={getDesignation}
                                label="Designation"
                            >
                                <MenuItem value="n">-Designation-</MenuItem>
                                <MenuItem value="f">Front Office</MenuItem>
                                <MenuItem value="s">Steward</MenuItem>
                                <MenuItem value="h">House Keeping</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">User Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={userAccount}
                                onChange={getUserAccount}
                                label="User Type"
                            >
                                <MenuItem value="n">-User Type-</MenuItem>
                                <MenuItem value="AD">Admin</MenuItem>
                                <MenuItem value="AC">Accunts</MenuItem>
                                <MenuItem value="ST">Store</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>
                    <Typography gutterBottom>
                        <input
                            accept="image/*"
                            className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span">
                                Upload
                            </Button>
                        </label>
                    </Typography>
                    <Typography gutterBottom>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={status}
                                onChange={getStatus}
                                label="Status"
                            >
                                <MenuItem value="y">Active</MenuItem>
                                <MenuItem value="n">Deactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>
                </MuiDialogContent>
                <MuiDialogActions>
                    <Button autoFocus onClick={resetUser} color="primary" variant="contained">
                        Save
                    </Button>
                    <Button onClick={resetUser} color="secondary" variant="contained">
                        Close
                    </Button>
                </MuiDialogActions>
            </Dialog>


            <Dialog onClose={() => this.setCUAPop(false)} aria-labelledby="add-category-title" open={isCUAPop}>
                <MuiDialogTitle disableTypography >
                    <Typography variant="h6">Control User Access</Typography>
                </MuiDialogTitle>
                <MuiDialogContent dividers>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Add New Designation" variant="outlined" />
                    </Typography>

                    <Typography gutterBottom>
                        <MUIDataTable
                            title={"User Access List"}
                            data={data}
                            columns={CUAColumns}
                            options={options}
                        />
                    </Typography>
                </MuiDialogContent>
                <MuiDialogActions>
                    <Button autoFocus onClick={resetCUA} color="primary" variant="contained">
                        Save
                    </Button>
                    <Button onClick={resetCUA} color="secondary" variant="contained">
                        Close
                    </Button>
                </MuiDialogActions>
            </Dialog>
        </Box>
    )
}

export default User;