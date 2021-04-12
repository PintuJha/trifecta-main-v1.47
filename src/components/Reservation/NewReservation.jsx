import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Grid,
  Box,
  Typography,
  Button,
  Tooltip,
  Dialog,
  TextField,
} from "@material-ui/core";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import IconButton from "@material-ui/core/IconButton";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const NewReservation = () => {
  const classes = useStyles();

  const [isPop, setPop] = useState(false);
  const [pax, setPax] = useState(1);
  const [child, setChild] = useState(0);
  const [Reference, setReference] = useState("n");
  const [selectedDate, setSelectedDate] = useState("2021-04-06");
  const [PaymentType, setPaymentType] = useState("n");
  const [roomCategory, setRoomCategory] = useState("n");
  const [roomType, setRoomType] = useState("N");
  const [roomNo, setRoomNo] = useState(0);
  const [mealPlan, setMealPlan] = useState("n");
  const [ExtraBed, setExtraBed] = useState(0);

  let data = [];
  const options = {
    filterType: "checkbox",
  };
  const columns = ["Name","Category", "Type", "Room","MealPlan","RoomCharge","Adult","Child","ExtraBed","ExtraCharge"];

  const reset = () => {
    setPop(false);
  };

  const getReference = (e) => {
    setReference(e.target.value);
  };

  const getPaymentType = (e) => {
    setPaymentType(e.target.value);
  };

  const getRoomCategory = (event) => {
    setRoomCategory(event.target.value);
  };

  const getRoomType = (event) => {
    setRoomType(event.target.value);
  };

  const getRoomNo = (event) => {
    setRoomNo(event.target.value);
  };

  const getMealPlan = (event) => {
    setMealPlan(event.target.value);
  };

  const getExtraBed = (e) => {
    setExtraBed(e.target.value);
  };

  return (
    <Box>

  {/* =============BREAD CRUMBS SECTION CODE START==================== */}
  <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
  {/* <Link color="inherit" href="/NewReservation">New Reservation</Link> */}
             <Link color="inherit" href="/ViewReservation">Reservation</Link>
             <Link color="inherit" href="/CancelList">Cancel List</Link>
             <Link color="inherit" href="/TravelAgentThirdParty">Booking Reference</Link>
          </Breadcrumbs>
         
 
{/* =============BREAD CRUMBS SECTION CODE START==================== */}

      <Typography variant="h6">New Reservation</Typography>
      <br />
      <Grid container spacing={5}>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Check-In Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              defaultValue={selectedDate}
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Check-Out Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              defaultValue={selectedDate}
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Check-In"
              variant="outlined"
              disabled
              defaultValue="12:00"
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Check-Out"
              variant="outlined"
              disabled
              defaultValue="10:00"
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Booking Reference
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={Reference}
                onChange={getReference}
                label=">Booking Reference"
              >
                <MenuItem value="n">-Booking Reference-</MenuItem>
                <MenuItem value="ID">Individual</MenuItem>
                <MenuItem value="Re">Relatives</MenuItem>
                <MenuItem value="FR">Friends</MenuItem>
                <MenuItem value="HS">Hotel Staff</MenuItem>
                <MenuItem value="TA">Travel Agent</MenuItem>
                <MenuItem value="TP">Third Party Side</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ border: "1px dashed grey" }}>
        <Grid container spacing={5}>
          <Grid container item xs>
            <Typography gutterBottom>
              <TextField
                id="outlined-basic"
                label="Guest Name"
                variant="outlined"
              />
            </Typography>
          </Grid>
          <Grid container item xs>
            <Typography gutterBottom>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Room Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={roomCategory}
                  onChange={getRoomCategory}
                  label="Room Category"
                >
                  <MenuItem value="n">None</MenuItem>
                  <MenuItem value="s">Standered</MenuItem>
                  <MenuItem value="d">Delux</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Grid>
          <Grid container item xs>
            <Typography gutterBottom>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Room Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={roomType}
                  onChange={getRoomType}
                  label="Room Type"
                >
                  <MenuItem value="A">AC</MenuItem>
                  <MenuItem value="N">Non Ac</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Grid>
          <Grid container item xs>
            <Typography gutterBottom>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Room No
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={roomNo}
                  onChange={getRoomNo}
                  label="Room No"
                >
                  <MenuItem value="0">-Select-</MenuItem>
                  <MenuItem value="101">101</MenuItem>
                  <MenuItem value="102">102</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Grid>
          <Grid container item xs>
            <Typography gutterBottom>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Meal Plan
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={mealPlan}
                  onChange={getMealPlan}
                  label="Occupancy"
                >
                  <MenuItem value="n">None</MenuItem>
                  <MenuItem value={"e"}>E.P.</MenuItem>
                  <MenuItem value={"c"}>C.P.</MenuItem>
                  <MenuItem value={"m"}>M.A.P.</MenuItem>
                  <MenuItem value={"a"}>A.P.</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid container item xs>
            <Typography gutterBottom>
              <TextField
                id="outlined-basic"
                label="Room Charges"
                variant="outlined"
                defaultValue={0}
              />
            </Typography>
          </Grid>
          <Grid container item xs>
            <TextField
              id="outlined-number"
              type="number"
              label="Adults"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: { min: "1", step: "1" } }}
              defaultValue={pax}
            />
          </Grid>
          <Grid container item xs>
            <TextField
              id="outlined-number"
              label="Child"
              variant="outlined"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: { min: "0", step: "1" } }}
              defaultValue={child}
            />
          </Grid>
          <Grid container item xs>
            <Typography gutterBottom>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Extra Bed
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={ExtraBed}
                  onChange={getExtraBed}
                  label=">Extra Bed"
                >
                  <MenuItem value="0">-None-</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4 </MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Grid>
          <Grid container item xs>
            <Typography gutterBottom>
              <TextField
                id="outlined-basic"
                label="Extra Bed Charge"
                variant="outlined"
                defaultValue="0"
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid container item xs>
            <Typography gutterBottom>
              <Button
                autoFocus
                //onClick={reset}
                color="primary"
                variant="contained"
              >
                Add +
              </Button>
            </Typography>
            &nbsp;&nbsp;
            <Typography gutterBottom>
              <Button //onClick={reset}
                color="secondary"
                variant="contained"
              >
                Reset
              </Button>
            </Typography>
          </Grid>
        </Grid>
          <MUIDataTable
            title={"Add Guest"}
            data={data}
            columns={columns}
            options={options}
          />
        <br />
      </Box>
      <Grid container spacing={5}>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Sub Total"
              variant="outlined"
              defaultValue="0"
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Discount"
              variant="outlined"
              defaultValue="0"
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Final Amount"
              variant="outlined"
              defaultValue="0"
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Adv. Payment"
              variant="outlined"
              defaultValue="0"
            />
          </Typography>
        </Grid>
        <Grid container item xs>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Net Amount"
              variant="outlined"
              defaultValue="0"
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid container item xs>
          <Typography gutterBottom>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Advance Payment Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={PaymentType}
                onChange={getPaymentType}
                label="Advance Payment Type"
              >
                <MenuItem value="n">-None-</MenuItem>
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="Card">Card</MenuItem>
                <MenuItem value="Neft">NEFT</MenuItem>
                <MenuItem value="Paypal">PayPal</MenuItem>
                <MenuItem value="paytm">paytm</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <Tooltip title="Add Payment Mode" aria-label="add">
            <IconButton aria-label="Add">
              <AddCircleOutlineTwoToneIcon
                onClick={() => alert("Add Payment Mode")}
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item xs>
          <Typography gutterBottom>
            <Button
              //onClick={reset}
              color="primary"
              variant="contained"
            >
              Save
            </Button>
          </Typography>
          &nbsp;&nbsp;
          <Typography gutterBottom>
            <Button //onClick={reset}
              color="secondary"
              variant="contained"
            >
              Cancel
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Dialog
        onClose={() => this.setPop(false)}
        aria-labelledby="add-category-title"
        open={isPop}
      >
        <MuiDialogTitle disableTypography>
          <Typography variant="h6">Select Room</Typography>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <MUIDataTable
            title={"Room List"}
            data={data}
            columns={columns}
            options={options}
          />
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
};

export default NewReservation;
