import React from 'react';
import {getDayInfos} from '../../../services/calendar';
import Colors from '../../../styles/colors';
import { RNCalendars } from './styles'

const Calendar = ({markedDates, setDayInfos}) => {
  return (
    <RNCalendars
      theme={{
        calendarBackground: Colors.asphaltDark,
        monthTextColor: Colors.white,
        arrowColor: Colors.white,
        dayTextColor: Colors.white,
        todayTextColor: Colors.white,
      }}
      markingType={'custom'}
      markedDates={markedDates}
      onDayPress={async (day: { dateString: string; }) => {
        console.log('selected day', day);
        const dayInfosResponse = await getDayInfos(day.dateString);
        setDayInfos(dayInfosResponse);
      }}
      monthFormat={'MMM, yyyy'}
      onMonthChange={(month: any) => {
        console.log('month changed', month);
        setDayInfos({
          imc: 0,
          imcAvaliation: 'Indeterminado',
          imcAvaliationColor: Colors.carbon,
          day: '',
          weight: '',
          height: '',
        });
      }}
      hideExtraDays={true}
      firstDay={1}
    />
  );
};

export default Calendar;
