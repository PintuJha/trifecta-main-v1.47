import React, { useState, useEffect } from "react";
import { Typography, Dialog, Button, TextField } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MUIDataTable from "mui-datatables";
import axios from 'axios';

export default function Amenities(props) {
  const [isPop, setPop] = useState(true);
  const [data, setData] = useState([]);
  const [amenity, setAmenity] = useState('');

  const closePop = () => {
    setPop(false);
    props.closeAminityPop();
  };

  useEffect(() => {
    getAmenities();
  })

  const getAmenities = async () => {
    await axios.get(`http://localhost:3006/api/Amenities`)
      .then(res => {
        // this.setState({ data: res.data.response })
        if (res.data.response[0].length !== 0) {
          setData(res.data.response[0]);
        }
      })
  };

  const saveAmenities = async () => {
    let a = amenity;

    if (a === "") {
      alert("Enter Amenity");
      return false;
    }

    await axios.post('http://localhost:3006/api/Amenities/new', {
      Aamenity: a,
      CreatedBy: 0
    })
      .then((response) => {
        if (response.status === 200) {
          getAmenities();
          alert("Saved successfully");
          reset();
        }
      }, (error) => {
        console.log(error);
      });
  }

  const reset = () => {
    setAmenity('');
  }

  const columns = [
    {
      name: "SrNo",
      label: "Sr.NO.",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "amenity",
      label: "Amenity",
      options: {
        filter: true,
        sort: true,
      }
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <Dialog onClose={closePop} open={isPop} fullWidth={true} maxWidth={"lg"}>
      <MuiDialogTitle disableTypography>
        <Typography variant="h6">Add Amenities</Typography>
      </MuiDialogTitle>
      <MuiDialogContent dividers>
        <Typography gutterBottom>
          <Typography>
            <TextField id="amenities" label="Amenity" variant="outlined" onChange={(e) => setAmenity(e.target.value)} defaultValue={amenity} />
            &nbsp;&nbsp;
            <Button autoFocus color="primary" variant="contained" onClick={saveAmenities}>
              Save
            </Button>
            &nbsp;&nbsp;
            <Button color="secondary" variant="contained" onClick={reset}>
              Reset
            </Button>
          </Typography>
        </Typography>
        <Typography gutterBottom>
          <MUIDataTable
            title={"Amenities List"}
            data={data}
            columns={columns}
            options={options}
          />
        </Typography>
      </MuiDialogContent>
      <MuiDialogActions>
        <Button onClick={closePop} color="secondary" variant="contained">
          Close
        </Button>
      </MuiDialogActions>
    </Dialog>
  );
}
