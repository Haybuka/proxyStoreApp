
import { useState } from 'react';
import { Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

function ProxyCalender({ handleSelect }) {

  const [selected, setSelected] = useState('')
  const handleDate = (day) => {
    setSelected(day.dateString)
    handleSelect(day.dateString);
  }

  return (
    <Calendar
      onDayPress={day => handleDate(day)}

      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true, selectedColor: 'blue', selectedDotColor: "red" }
      }}
      allowSelectionOutOfRange={false}
      theme={{
        todayTextColor: "#000"
      }}
      enableSwipeMonths={true}
    />
  );
}



export default ProxyCalender;