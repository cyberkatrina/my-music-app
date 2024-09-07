import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Dashboard(props) {
  const [online, setOnline] = useState(true)
  const [volume, setVolume] = useState(20)
  const [quality, setQuality] = useState(2)
  const [notifications, setNotifications] = useState([])

  const offlineText = "Your application is offline. You won't be able to share or stream music to other devices."
  const volumeText = "Listening to music at a high volume could cause long-term hearing loss."
  const qualityText = "Music quality is degraded. Increase quality if your connection allows it."

  useEffect(() => {

    let copyArr = [...notifications]
    if (!online && !notifications.includes(offlineText)) {
      copyArr.push(offlineText)
    }
    if (volume > 80 && !notifications.includes(volumeText)) {
      copyArr.push(volumeText)
    }
    if (quality == 1 && !notifications.includes(qualityText)) {
      copyArr.push(qualityText)
    }
    if (online && notifications.includes(offlineText)) {
      copyArr = copyArr.filter((text) => text !== offlineText)
    }
    if (volume <= 80 && notifications.includes(volumeText)) {
      copyArr = copyArr.filter((text) => text !== volumeText)
    }
    if (quality != 1 && notifications.includes(qualityText)) {
      copyArr = copyArr.filter((text) => text !== qualityText)
    }
    setNotifications(copyArr)

  }, [online, volume, quality])

  return (
    <div>
      <h2 style={{ marginBottom: "50px", textAlign: "left", marginLeft: "130px" }}>
        Welcome User!
      </h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Online Mode
            </Typography>
            <Typography variant="body2">
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <Switch onClick={() => setOnline(!online)} defaultChecked />
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Master Volume
            </Typography>
            <Typography variant="body2">
              Overrides all other sound settings in this application
            </Typography>
          </CardContent>
          <CardActions>
            <VolumeDown />
            <Slider
              aria-label="Temperature"
              value={volume}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />{" "}
            <VolumeUp />
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Sound Quality
            </Typography>
            <Typography variant="body2">
              Manually control the music quality in event of poor connection
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quality}
                onChange={(e) => {
                  setQuality(e.target.value);
                }}
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
      </div>
      <h2 style={{ marginTop: "50px", textAlign: "left", marginLeft: "130px" }}>
        System Notifications:
      </h2>
      <ul style={{listStyleType: 'none'}}>
        {console.log("hi")}
        {notifications.map((note, index) => {
          return <li key={index} style={{marginTop: '15px'}}>{note}
          </li>
        })}
      </ul>
    </div>
  );
}

export default Dashboard;
