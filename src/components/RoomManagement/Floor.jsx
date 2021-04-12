import React from "react";
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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import MuiDialogActions from "@material-ui/core/DialogActions";
import axios from "axios";

export default class Floor extends React.Component {
  constructor() {
    super();
    this.state = {
      isPop: false,
      Floor: "",
      Title: "",
      data: [],
    };
  }

  componentDidMount() {
    this.getFloorData();
  }

  async getFloorData() {
    await axios.get(`http://localhost:3006/api/floor`).then((res) => {
      // this.setState({ data: res.data.response })
      if (res.data.response[0].length !== 0) {
        this.setState({ data: res.data.response[0] });
      }
    });
  }

  async saveFloor() {
    let Floor = this.state.Floor;
    let Title = this.state.Title;

    if (Floor === "") {
      alert("Enter category");
      return false;
    }

    if (Title === "") {
      alert("Enter No of rooms");
      return false;
    }

    await axios
      .post("http://localhost:3006/api/floor/new", {
        Floor: Floor,
        Title: Title,
        CreatedBy: 0,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            this.getFloorData();
            alert("Saved successfully");
            this.reset();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  reset() {
    this.setState({
      Floor: "",
      Title: "",
      isPop: false,
    });
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
        name: "Title",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Floor",
        label: "Floor No.",
        options: {
          filter: true,
          sort: true,
        },
      },
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
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
        <Tooltip title="Add" aria-label="add">
          <IconButton aria-label="Add">
            <AddCircleOutlineTwoToneIcon
              onClick={() => this.setState({ isPop: true })}
            />
          </IconButton>
        </Tooltip>
        <MUIDataTable
          title={"Floor List"}
          data={this.state.data}
          columns={columns}
          options={options}
        />

        <Box>
          <Dialog
            onClose={() => this.setState({ isPop: false })}
            aria-labelledby="add-category-title"
            open={this.state.isPop}
          >
            <MuiDialogTitle disableTypography>
              <Typography variant="h6">Add Floor</Typography>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              <Typography gutterBottom>
                <TextField
                  id="outlined-basic"
                  label="Name / Title"
                  variant="outlined"
                  onChange={(e) => this.setState({ Title: e.target.value })}
                />
              </Typography>
              <Typography gutterBottom>
                <TextField
                  id="outlined-basic"
                  label="Floor Number"
                  variant="outlined"
                  onChange={(e) => this.setState({ Floor: e.target.value })}
                />
              </Typography>
            </MuiDialogContent>
            <MuiDialogActions>
              <Button
                autoFocus
                onClick={() => this.saveFloor()}
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
      </Box>
    );
  }
}
