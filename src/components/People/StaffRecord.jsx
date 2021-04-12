import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Box, Typography, Button, Tooltip, Dialog, TextField, RadioGroup, FormControlLabel } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
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

function StaffReport() {
    const classes = useStyles();

    const [isPop, setPop] = useState(false);
    const [designation,setDesignation] = useState("n");
    const [status,setStatus] = useState("y");
    const [proof,setProof] = useState("n");
    const [department,setDepartment] = useState("n");

    let data = [];
    const options = {
        filterType: 'checkbox',
    };
    const columns = ["Sr.No", "Name", "Email", "Mobile", "Department", "Position", "ID Pr.", "ID No.", "Action"]

    const reset = () => {
        setPop(false);
    }

    const getDesignation = (e) => {
        setDesignation(e.target.value);
    }

    const getStatus = (e) => {
        setStatus(e.target.value);
    }

    const getProof=(e)=>{
        setProof(e.target.value);
    }

    const getDepartment = (e) =>{
        setDepartment(e.target.value);
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
            <Typography variant="h6">Staff Report</Typography>
            <Tooltip title="Add" aria-label="add">
                <IconButton aria-label="Add">
                    <AddCircleOutlineTwoToneIcon onClick={() => setPop(true)} />
                </IconButton>
            </Tooltip>
            <MUIDataTable
                title={"Staff List"}
                data={data}
                columns={columns}
                options={options}
            />

            <Dialog onClose={() => setPop(false)} aria-labelledby="add-category-title" open={isPop}>
                <MuiDialogTitle disableTypography >
                    <Typography variant="h6">Add Staff Record</Typography>
                </MuiDialogTitle>
                <MuiDialogContent dividers>
                <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <RadioGroup aria-label="gender" name="gender" row>
                            <FormControlLabel value="M" control={<Radio />} label="Male" />
                            <FormControlLabel value="F" control={<Radio />} label="Female" />                            
                        </RadioGroup>
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="Mobile No." variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">ID Proof</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={proof}
                                onChange={getProof}
                                label="ID Proof"
                            >
                                <MenuItem value="n">-none-</MenuItem>
                                <MenuItem value="a">Aadhar Card</MenuItem>
                                <MenuItem value="p">Pan Card</MenuItem>
                                <MenuItem value="v">Voter Id</MenuItem>
                                <MenuItem value="d">Driving Licence</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>
                    <Typography gutterBottom>
                        <TextField id="outlined-basic" label="ID Proof No" variant="outlined" />
                    </Typography>
                    <Typography gutterBottom>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={department}
                                onChange={getDepartment}
                                label="Department"
                            >
                                <MenuItem value="n">-Department-</MenuItem>
                                <MenuItem value="f">Front Office Department</MenuItem>
                                <MenuItem value="a">Administrative</MenuItem>
                            </Select>
                        </FormControl>
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
                        <TextField id="outlined-basic" label="Salary" variant="outlined" />
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
                    <Button autoFocus onClick={reset} color="primary" variant="contained">
                        Save
                    </Button>
                    <Button onClick={reset} color="secondary" variant="contained">
                        Close
                    </Button>
                </MuiDialogActions>
            </Dialog>
        </Box>
    )
}
export default StaffReport;