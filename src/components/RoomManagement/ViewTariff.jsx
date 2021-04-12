import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  Dialog,
  TextField,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
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
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import MealPlan from "./MealPlan";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ViewTariff() {
  const classes = useStyles();

  const [isPop, setPop] = useState(false);
  const [type, setType] = useState("");
  const [thirdParty, setThirdParty] = useState("n");
  const [roomCategory, setRoomCategory] = useState("n");
  const [occupancy, setOccupancy] = useState("n");
  const [isThird, setThird] = useState("n");
  const [roomType, setRoomType] = useState("N");
  const [mealPlan,setMealPlan] = useState("n");
  const [isMealPop,setMealPop] = useState(false);

  const columns = [
    "Sr.No",
    "Category",
    "Type",
    "Date",
    "Charge",
    "Bed Charge",
    "Breakfast",
  ];

  const data = [];

  const options = {
    filterType: "checkbox",
  };

  const reset = () => {
    setPop(false);
    setThirdParty("n");
    setRoomCategory("n");
    setOccupancy("n");
    setThird("n");
    setRoomType("N");
    setMealPlan("n");
  };

  const getMealPlan = (event) => {
    setMealPlan(event.target.value);
  }

  const getThirdParty = (event) => {
    setThirdParty(event.target.value);
  };

  const getRoomCategory = (event) => {
    setRoomCategory(event.target.value);
  };

  const getOccupancy = (event) => {
    setOccupancy(event.target.value);
  };

  const getType = (event) => {
    setType(event.target.value);

    if (event.target.value !== "p") {
      setThird("y");
    } else {
      setThird("n");
    }
  };

  const getRoomType = (event) => {
    setRoomType(event.target.value);
  };

  const closeMealType = () => {
    setMealPop(false);
  };

  return (
    <Box>
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
      {/* <Typography variant="h6">Tariff</Typography> */}
      <Tooltip title="Add" aria-label="add">
        <IconButton aria-label="Add">
          <AddCircleOutlineTwoToneIcon onClick={() => setPop(true)} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit" aria-label="Edit">
        <IconButton aria-label="Edit">
          <EditTwoToneIcon onClick={() => setPop(true)} />
        </IconButton>
      </Tooltip>
      <MUIDataTable
        title={"Tariff List"}
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
          <Typography variant="h6">Add Tariff</Typography>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            <RadioGroup aria-label="type" name="type" onChange={getType} row>
              <FormControlLabel value="c" control={<Radio />} label="C.M." />
              <FormControlLabel value="p" control={<Radio />} label="P.M.S." />
              <FormControlLabel value="b" control={<Radio />} label="Both" />
            </RadioGroup>
          </Typography>
          {isThird === "y" ? (
            <Typography gutterBottom>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Third Party
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={thirdParty}
                  onChange={getThirdParty}
                  label="Third Party"
                >
                  <MenuItem value="n">None</MenuItem>
                  <MenuItem value="M">Master</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          ) : null}
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
            &nbsp;&nbsp;
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Occupancy
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={occupancy}
                onChange={getOccupancy}
                label="Occupancy"
              >
                <MenuItem value="n">None</MenuItem>
                <MenuItem value={"s"}>Single</MenuItem>
                <MenuItem value={"d"}>Double</MenuItem>
                <MenuItem value={"a"}>Add New</MenuItem>
              </Select>
            </FormControl>
            &nbsp;&nbsp;
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
          <Typography gutterBottom>
            <RadioGroup aria-label="charges" name="charges" row>
              <FormControlLabel
                value="S"
                control={<Radio />}
                label="Single Day Charge"
              />
              <FormControlLabel
                value="Y"
                control={<Radio />}
                label="Your Choice"
              />
            </RadioGroup>
          </Typography>
          <Typography gutterBottom>
            <TextField
              id="outlined-basic"
              label="Room Charge"
              variant="outlined"
            />
            &nbsp;&nbsp;
            <TextField
              id="outlined-basic"
              label="Bed Charge"
              variant="outlined"
            />
          </Typography>
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
            &nbsp;&nbsp;
            <Tooltip title="Meal Plan" aria-label="add">
              <IconButton aria-label="Add">
                <AddCircleOutlineTwoToneIcon
                  onClick={() => setMealPop(true)}
                />
              </IconButton>
            </Tooltip>
            { //closeMealType
                (isMealPop)? <MealPlan closeMealType={closeMealType}/> : null
            }

          </Typography>
          <Typography gutterBottom>
            <TextField
              id="date"
              label="From"
              type="date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
            &nbsp;-&nbsp;
            <TextField
              id="date"
              label="To"
              type="date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Typography>
          <Typography gutter>
            <table>
              <tr>
                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Sun</td>

                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Mon</td>
                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Tue</td>
                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Wed</td>
                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Thu</td>
                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Fri</td>
                <td>
                  <Checkbox color="primary" />
                </td>
                <td>Sat</td>
              </tr>
            </table>
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
  );
}
