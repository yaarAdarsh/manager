import React,{useState} from "react";
import dayjs from "dayjs";
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import Badge from '@mui/material/Badge';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import AcUnitIcon from '@mui/icons-material/AcUnit';

const isWeekend = (date) => {
  const day = date.day();
  return day === 0 || day === 6;
};

function AllCalender() {
  const [value, setValue] = React.useState(new Date());
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} className="calendar">
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.date()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <AcUnitIcon style={{fontSize: "medium", color: "blue"}}/> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
      
    </LocalizationProvider>
  );
}

export default AllCalender;
