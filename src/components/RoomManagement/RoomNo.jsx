import React from "react";
import MUIDataTable from "mui-datatables";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  Dialog,
  TextField,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  ListItemIcon ,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import Amenities from "./Amenities";
import axios from "axios";

const url = "http://localhost:3006/";

export default class RoomNo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPop: false,
      floor: "n",
      roomCategory: "n",
      roomType: "N",
      checkedEB: false,
      isAmenities: false,
      roomCategoryData: [],
      floorData: [],
      data: [],
      amenitiesData: [],
      checkedData:[],
      roomNo:"",
      baseOcc:0,
      maxOcc:0,
      extraBed:0,
      description:"",
    };
  }

  componentDidMount() {
    this.getRoomList();
    this.getRoomCategoryData();
    this.getFloorData();
    this.getAmenities();    
  }

  getRoomList= async()=>{
    await axios.get(`${url}api/RoomList`).then((res) => {
      if (res.data.response[0].length !== 0) {
        this.setState({ data: res.data.response[0] });
      }
    });
  }

  getRoomCategoryData = async () => {
    await axios.get(`${url}api/roomCategory`).then((res) => {
      if (res.data.response[0].length !== 0) {
        this.setState({ roomCategoryData: res.data.response[0] });
      }
    });
  };

  getFloorData = async () => {
    await axios.get(`${url}api/floor`).then((res) => {
      if (res.data.response[0].length !== 0) {
        this.setState({ floorData: res.data.response[0] });
      }
    });
  };

  getAmenities = async () => {
    await axios.get(`${url}api/Amenities`).then((res) => {
      if (res.data.response[0].length !== 0) {
        this.setState({ amenitiesData: res.data.response[0] });
      }
    });
  };

  getFloor = (event) => {
    this.setState({ 
      floor: event.target.value
     });
  };

  getRoomCategory = (event) => {
    this.setState({ roomCategory: event.target.value });
  };

  getRoomType = (event) => {
    this.setState({ roomType: event.target.value });
  };

  handleEB = (event) => {
    this.setState({ checkedEB: !this.state.checkedEB });
  };

  reset = () => {
    this.setState({
      isPop: false,
      floor: "n",
      roomCategory: "n",
      roomType: "N",
      checkedEB: false,
      isAmenities: false,
      roomNo:"",
      baseOcc:0,
      maxOcc:0,
      extraBed:0,
      description:"",
      checkedData:[],
    });
  };

  closeAminityPop = () => {
    this.setState({ isAmenities: false });
  };

  handleToggle = (value) => () => {
    const currentIndex = this.state.checkedData.indexOf(value);
    const newChecked = [...this.state.checkedData];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({checkedData: newChecked})
  };

  saveList= async () => {
    const LRoom_no = this.state.roomNo;
    const LRoom_category = this.state.roomCategory;
    const LRoom_type = this.state.roomType;
    const LFloor = this.state.floor; 
    const LBaseOcc = this.state.baseOcc ;
    const LMaxOcc = this.state.maxOcc; 
    const LExtraBed = this.state.extraBed;
    const LAmenities = this.state.checkedData.join();
    const LDescription = this.state.description;

    await axios
      .post(`${url}api/RoomList/new`, {
        LRoom_no: LRoom_no,
        LRoom_category: LRoom_category,
        LRoom_type: LRoom_type,
        LFloor: LFloor,
        LBaseOcc: LBaseOcc,
        LMaxOcc: LMaxOcc,
        LExtraBed: LExtraBed,
        LAmenities: LAmenities,
        LDescription: LDescription,
        CreatedBy: 0,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            this.getRoomList();
            alert("Saved successfully");
            this.reset();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const columns = [
      {
        name: "SrNo",
        label: "Sr.NO.",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Room_no",
        label: "Room No.",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Category",
        label: "Category",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "RoomTypeText",
        label: "Room Type",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Floor",
        label: "Floor",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "BaseOcc",
        label: "Base Occupancy",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "MaxOcc",
        label: "Max Occupancy",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "ExtraBed",
        label: "Extra Bed",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Room_status",
        label: "Room Status",
        options: {
          filter: true,
          sort: true,
        },
      },
    ];

    const options = {
      filterType: "checkbox",
    };

    return (
      <Box>
        {/* =============BREAD CRUMBS SECTION CODE START==================== */}
        <Breadcrumbs className="bread-link-sec" aria-label="breadcrumb">
        <Link color="inherit" href="/RoomCategory">Room Category</Link>
                        <Link color="inherit" href="/Floor">Floor</Link>
                        <Link color="inherit" href="/RoomNo">Room No</Link>
                        <Link color="inherit" href="/ViewTariff">Tariff plan</Link>
                        <Link color="inherit" href="/ViewInventory">Inventory</Link>
          </Breadcrumbs>
         
 
{/* =============BREAD CRUMBS SECTION CODE START==================== */}
        {/* <Typography variant="h6">Add New Room</Typography> */}
        <Tooltip title="Add" aria-label="add">
          <IconButton aria-label="Add">
            <AddCircleOutlineTwoToneIcon
              onClick={() => this.setState({ isPop: true })}
            />
          </IconButton>
        </Tooltip>
        <MUIDataTable
          title={"Room List"}
          data={this.state.data}
          columns={columns}
          options={options}
        />
        <Dialog
          onClose={() => this.setState({ isPop: false })}
          aria-labelledby="add-category-title"
          open={this.state.isPop}
        >
          <MuiDialogTitle disableTypography>
            <Typography variant="h6">Add New Room</Typography>
          </MuiDialogTitle>
          <MuiDialogContent dividers>
            <Typography gutterBottom>
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Room Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.roomCategory}
                  onChange={(e) => this.getRoomCategory(e)}
                  label="Room Category"
                  style={{ minWidth: 120 }}
                >
                  <MenuItem value="n">None</MenuItem>
                  {this.state.roomCategoryData.map((item) => (
                    <MenuItem value={item.c_id} key={item.c_id}>
                      {item.Category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              &nbsp;&nbsp;
              <FormControl variant="outlined">
                <InputLabel htmlFor="floorID">
                  Floor
                </InputLabel>
                <Select
                  value={this.state.floor}
                  onChange={(e) => this.getFloor(e)}
                  label="Floor"
                  style={{ minWidth: 120 }}
                >
                  <MenuItem value="n">None</MenuItem>
                  {this.state.floorData.map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.Title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              &nbsp;&nbsp;
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Room Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.roomType}
                  onChange={(e) => this.getRoomType(e)}
                  label="Room Type"
                  style={{ minWidth: 120 }}
                >
                  <MenuItem value="A">AC</MenuItem>
                  <MenuItem value="N">Non Ac</MenuItem>
                </Select>
              </FormControl>
            </Typography>
            <Typography gutterBottom>
              <TextField 
                id="roomNo" 
                label="Room No" 
                variant="outlined" 
                defaultValue={this.state.roomNo}
                onChange={(e) => this.setState({roomNo: e.target.value})}
              />
            </Typography>
            <Typography gutterBottom>
              <TextField
                id="baseOcc"
                label="Base Occupancy"
                type="number"
                variant="outlined"
                defaultValue={this.state.baseOcc}
                onChange={(e) => this.setState({baseOcc: e.target.value })}
              />   
              &nbsp;&nbsp;
              <TextField
                id="maxOcc"
                label="Max Occupancy"
                type="number"
                variant="outlined"
                defaultValue={this.state.maxOcc}
                onChange={(e) => this.setState({maxOcc: e.target.value })}
              />
            </Typography>
            <Typography gutterBottom>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedEB}
                    onChange={(e) => this.handleEB(e)}
                    name="base"
                    color="primary"
                  />
                }
                label="Extra Bed"
              />
              {this.state.checkedEB ? (
                <TextField
                  id="extraBed"
                  label="No. Of Extra Bed"
                  variant="outlined"
                  defaultValue={this.state.extraBed}
                  onChange={(e) => this.setState({extraBed: e.target.value })}
                />
              ) : null}
            </Typography>
            <Typography gutterBottom>
              Amenities 
              <Tooltip title="Amenities" aria-label="add">
                <IconButton aria-label="Add">
                  <AddCircleOutlineTwoToneIcon
                    onClick={() => this.setState({ isAmenities: true })}
                  />
                </IconButton>
              </Tooltip>
              <List style={{maxWidth: 300,position: 'relative',overflow: 'auto',maxHeight: 280,}}>
                {this.state.amenitiesData.map((item) => {
                  const labelId = `checkbox-list-label-${item.id}`;
                  return (
                    <ListItem
                      key={item.id}
                      role={undefined}
                      dense
                      button
                      onClick={this.handleToggle(item.id)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={this.state.checkedData.indexOf(item.id) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={item.amenity}
                      />
                    </ListItem>
                  );
                })}
              </List>              
              {this.state.isAmenities ? (
                <Amenities closeAminityPop={this.closeAminityPop} />
              ) : null}
            </Typography>
            <Typography gutterBottom>
              <TextField 
              id="aboutroom" 
              label="About Room" 
              variant="outlined" 
              onChange={(e) => this.setState({description:e.target.value})} 
              defaultValue={this.state.description}
              />
            </Typography>
          </MuiDialogContent>
          <MuiDialogActions>
            <Button
              autoFocus
              onClick={() => this.saveList()}
              color="primary"
              variant="contained"
            >
              Save
            </Button>
            <Button
              onClick={() => this.reset()}
              color="secondary"
              variant="contained"
            >
              Close
            </Button>
          </MuiDialogActions>
        </Dialog>
      </Box>
    );
  }
}
