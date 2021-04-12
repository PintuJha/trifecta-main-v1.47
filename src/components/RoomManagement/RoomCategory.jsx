import React from 'react';
import MUIDataTable from "mui-datatables";
import {Typography,Box,Button,Tooltip,IconButton, Dialog,TextField} from '@material-ui/core';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import axios from 'axios';

export default class RoomCategory extends React.Component {


    constructor() {
        super();
        this.state = {
            isPop: false,
            category: "",
            shortCode: "",
            noOfRooms: 0,
            data: []
        }
    }

    componentDidMount() {
        this.getRoomCategoryData();
    }

    async getRoomCategoryData() {
        await axios.get(`http://localhost:3006/api/roomCategory`)
            .then(res => {
                //console.log("adsfa",JSON.stringify(res.data.response[0]));
                if(res.data.response[0].length!==0){
                    this.setState({ data: res.data.response[0]})
                }
            })
    }

    async saveCategory() {
        let category = this.state.category;
        let noOfRoom = this.state.noOfRooms;
        let shortCode = this.state.shortCode;

        if (category === "") {
            alert("Enter category");
            return false;
        }

        if (noOfRoom === "") {
            alert("Enter No of rooms");
            return false;
        }

        if (shortCode === "") {
            alert("Enter Short Code");
            return false;
        }

        await axios.post('http://localhost:3006/api/roomCategory/new', {
            Category: category,
            InventoryItem: noOfRoom,
            shortCode: shortCode,
            createdBy:0
        })
            .then((response) => {
                if (response.status === 200) {
                    this.getRoomCategoryData();
                    alert("Saved successfully");
                    this.reset();
                }
            }, (error) => {
                console.log(error);
            });
    }

    reset() {
        this.setState({
            category: "",
            shortCode: "",
            noOfRooms: 0,
            isPop: false,
        })
    }

    render() {
        const columns = [{
            name: "SrNo",
            label: "Sr.NO.",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "Category",
            label: "Category",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "shortCode",
            label: "Short Code",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "InventoryItem",
            label: "No. Of Rooms",
            options: {
                filter: true,
                sort: true,
            }
        },
        ]

        const options = {
            filterType: "dropdown",
            responsive: "scroll"
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
                        <AddCircleOutlineTwoToneIcon onClick={() => this.setState({ isPop: true })} />
                    </IconButton>
                </Tooltip>
                <MUIDataTable
                    title={"Room Category List"}
                    data={this.state.data}
                    columns={columns}
                    options={options}
                />
                <Dialog onClose={() => this.setState({ isPop: false })} aria-labelledby="add-category-title" open={this.state.isPop}>
                    <MuiDialogTitle disableTypography >
                        <Typography variant="h6">Room Category List</Typography>
                    </MuiDialogTitle>
                    <MuiDialogContent dividers>
                        <Typography gutterBottom>
                            <TextField id="outlined-basic" label="Room Category" variant="outlined" onChange={(e) => this.setState({ category: e.target.value })} />
                        </Typography>
                        <Typography gutterBottom>
                            <TextField id="outlined-basic" label="Short Code" variant="outlined" onChange={(e) => this.setState({ shortCode: e.target.value })} />
                        </Typography>
                        <Typography gutterBottom>
                            <TextField id="outlined-basic" type="number" label="No. Of Rooms" variant="outlined" onChange={(e) => this.setState({ noOfRooms: e.target.value })} />
                        </Typography>
                    </MuiDialogContent>
                    <MuiDialogActions>
                        <Button autoFocus onClick={() => this.saveCategory()} color="primary" variant='contained'>
                            Save
                            </Button>
                        <Button onClick={() => this.reset()} color="secondary" variant='contained'>
                            Close
                            </Button>
                    </MuiDialogActions>
                </Dialog>
            </Box>
        )
    }
}