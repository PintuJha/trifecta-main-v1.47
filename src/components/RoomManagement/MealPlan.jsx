import React, { useState,useEffect } from "react";
import { Typography, Dialog, Button, TextField } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
import MUIDataTable from "mui-datatables";
import axios from 'axios';

export default function MealPlan(props) {
  const [isPop, setPop] = useState(true);
  const [data, setData] = useState([]);
  const [plane, setPlane] = useState('');
  const [shortcode, setShort] = useState('');

  const closePop = () => {
    setPop(false);
    props.closeMealType();
  };

  useEffect(() => {
    getMealPlan();
  })


  const getMealPlan = async () => {
    await axios.get(`http://localhost:3006/api/MealPlan`)
      .then(res => {
        if (res.data.response[0].length !== 0) {
          setData(res.data.response[0]);
        }
      })
  };

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
      name: "plan",
      label: "Meal Plane",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "ShortCode",
      label: "Short Code",
      options: {
        filter: true,
        sort: true,
      }
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  const reset = () => {
    setPlane("");
    setShort("");
  }

  const saveMealPlan = async () => {
    let p = plane;
    let sc = shortcode;

    if (p === "") {
      alert("Enter Meal Plan");
      return false;
    }
    if (sc === "") {
      alert("Enter Short Code");
      return false;
    }

    await axios.post('http://localhost:3006/api/MealPlan/new', {
      Mplan: p,
      MShortCode: sc,
      CreatedBy: 0
    })
      .then((response) => {
        if (response.status === 200) {
          getMealPlan();
          alert("Saved successfully");
          reset();
        }
      }, (error) => {
        console.log(error);
      });
  }


  return (
    <Dialog onClose={closePop} open={isPop} fullWidth={true} maxWidth={"lg"}>
      <MuiDialogTitle disableTypography>
        <Typography variant="h6">Add Meal Plan</Typography>
      </MuiDialogTitle>
      <MuiDialogContent dividers>
        <Typography gutterBottom>
          <Typography>
            <TextField id="mealplan" label="Meal Plan" variant="outlined" defaultValue={plane} onChange={(e)=>setPlane(e.target.value)} />
            &nbsp;&nbsp;
            <TextField id="ShortCode" label="Short Code" variant="outlined" defaultValue={shortcode} onChange={(e)=>setShort(e.target.value)} />
            &nbsp;&nbsp;
            {/* Pintu code */}
            {/* <FormControl variant="outlined" className={classes.formControl}>
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
            </FormControl> */}
             {/* Pintu code END*/}
            <Button autoFocus color="primary" variant="contained" onClick={saveMealPlan}>
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
            title={"Meal Plan List"}
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
