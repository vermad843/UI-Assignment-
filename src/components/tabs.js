import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { tabs } from "../constants/sharedConsts";
import Card from "../components/cards";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="scrollable"
          TabIndicatorProps={{ style: { background: "#464B4E" } }}
          className="tab-cont"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((s, i) => (
            <Tab
              className="tabs-child"
              label={
                <div className="div-tabs">
                  {" "}
                  <img className="img-tab" src={s.src} alt={s.label} />
                  {s.label}
                </div>
              }
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((s, i) => (
        <TabPanel value={value} index={i}>
          <div className="div-tabs">
            <Grid container>
              {Array(5)
                .fill()
                .map((y) => (
                  <Grid item md={6}>
                    <Card value={s.name} index={i + 1} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
