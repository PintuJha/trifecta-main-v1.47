import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  Dialog,
  TextField,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function TravelAgentThirdParty() {
  const classes = useStyles();
  const [isPop, setPop] = useState(false);
  const [bookingRef, setBookingRef] = useState("n");
  const [acType,setAcType] = useState("s");

  const columns = ["Sr.No.", "Company Name", "Ref.", "GSTIN", "Email", "Mob", "Action"];

  const data = [];

  const options = {
    filterType: "checkbox",
  };

  const reset = () => {
    setPop(false);
    setBookingRef('n');
    setAcType('s');
  };

  const getBookingRef = (event) => {
    setBookingRef(event.target.value);
  };

  const getAcType = (event) =>{
    setAcType(event.target.value);
  }

  return (
    <Box>
      {/* =============BREAD CRUMBS SECTION CODE START==================== */}
  <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
  demo.trifectahms.in
          </Breadcrumbs>
         
 
{/* =============BREAD CRUMBS SECTION CODE START==================== */}
      <Typography variant="h6">Booking Reference</Typography>
      <Tooltip title="Add" aria-label="add">
        <IconButton aria-label="Add">
          <AddCircleOutlineTwoToneIcon onClick={() => setPop(true)} />
        </IconButton>
      </Tooltip>
      <MUIDataTable
        title={"Booking Ref. List"}
        data={data}
        columns={columns}
        options={options}
      />
      <Dialog
        onClose={() => this.setPop(false)}
        aria-labelledby="add-category-title"
        open={isPop}
      >
        <MuiDialogTitle disableTypography>
          <Typography variant="h6">Add Booking Reference</Typography>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Booking Ref.
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={bookingRef}
                onChange={getBookingRef}
                label="Room Category"
              >
                <MenuItem value="n">None</MenuItem>
                <MenuItem value="TA">Travel Agent</MenuItem>
                <MenuItem value="TP">Third Party</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <Box>
            <Typography variant="h6">Basic Details</Typography>
            <Typography gutterBottom>
              <TextField id="name" label="Name" variant="outlined" />
              &nbsp;&nbsp;
              <TextField id="compname" label="Comp. Name" variant="outlined" />
            </Typography>
            <Typography gutterBottom>
            <TextField id="gstin" label="GSTIN" variant="outlined" />
              &nbsp;&nbsp;
              <TextField id="mobno" label="Mobile No." variant="outlined" />
            </Typography>
            <Typography gutterBottom>
              <TextField id="email" label="Email" variant="outlined" />              
              &nbsp;&nbsp;
              <TextField
                id="Address"
                label="Address"
                variant="outlined"
              />
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Bank Details</Typography>
            <Typography gutterBottom>
                <TextField id="acname" label="A/c Name" variant="outlined" />
                &nbsp;&nbsp;
                <TextField id="acnumber" label="A/c Number" variant="outlined" />
            </Typography>
            <Typography gutterBottom>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                A/c Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={acType}
                onChange={getAcType}
                label="A/c Type"
              >
                <MenuItem value="s">Saving</MenuItem>
                <MenuItem value="c">Current</MenuItem>
              </Select>
            </FormControl>
                &nbsp;&nbsp;
                <TextField id="bank" label="Bank" variant="outlined" />
            </Typography>
            <Typography gutterBottom>
                <TextField id="ifsc" label="IFSC" variant="outlined" />
                &nbsp;&nbsp;
                <TextField id="branch" label="Branch" variant="outlined" />
            </Typography>
            <Typography gutterBottom>
            <TextField id="bankAdress" label="Bank Address" variant="outlined" />
            </Typography>
          </Box>
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
  );
}
