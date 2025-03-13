// import { DatesSetArg, EventContentArg } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
// import FullCalendar from '@fullcalendar/react';
// import { Box } from '@mui/material';
// import { useQuery } from '@tanstack/react-query';
// import { getProductSchedule } from 'apis/product';
// import ScheduleDialog from 'components/product/register/ScheduleDialog';
// import { PRODUCT } from 'constants/@queryKeys';
// import { format } from 'date-fns';
// import { useState } from 'react';
// import { IGetScheduleForm } from 'types/product';

// const FullCalendarPage = () => {
//   const [period, setPeriod] = useState<IGetScheduleForm>({
//     startDate: null,
//     endDate: null,
//   });
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [isOpenScheduleDialog, setIsOpenScheduleDialog] = useState(false);

//   const { data: scheduleList } = useQuery(
//     [PRODUCT.SCHEDULE, period.startDate],
//     () =>
//       getProductSchedule({
//         startDate: period.startDate,
//         endDate: period.endDate,
//       }),
//     {
//       enabled: !!period.startDate,
//     }
//   );

//   const events = scheduleList?.map((schedule) => {
//     const openDate = new Date(schedule.openDate);

//     return {
//       title: schedule.isAllDay ? '종일' : format(openDate, 'HH:mm'),
//       start: openDate,
//       allDay: schedule.isAllDay,
//     };
//   });

//   const onDateClick = ({ date }: DateClickArg) => {
//     onOpenScheduleDialog(date);
//   };

//   const onChangeDate = ({ startStr, endStr }: DatesSetArg) => {
//     setPeriod({ startDate: new Date(startStr), endDate: new Date(endStr) });
//   };

//   const onOpenScheduleDialog = (selected: Date) => {
//     setSelectedDate(selected);
//     setIsOpenScheduleDialog(true);
//   };

//   const eventContent = (eventInfo: EventContentArg) => {
//     const isAllDay = eventInfo.event.allDay;

//     return (
//       <Box
//         sx={{
//           width: '100%',
//           backgroundColor: isAllDay ? '#5A90FF' : '#FF8652',
//           borderRadius: '3px',
//           p: 0.5,
//           color: '#fff',
//           fontWeight: 600,
//         }}
//       >
//         {eventInfo.event.title}
//       </Box>
//     );
//   };

//   return (
//     <>
//       <ScheduleDialog
//         open={isOpenScheduleDialog}
//         setOpen={setIsOpenScheduleDialog}
//         date={selectedDate}
//       />
//       <FullCalendar
//         locale="kr"
//         plugins={[dayGridPlugin, interactionPlugin]}
//         events={events}
//         datesSet={onChangeDate}
//         dateClick={onDateClick}
//         eventContent={eventContent}
//         headerToolbar={{
//           left: 'prev',
//           center: 'title',
//           right: 'next',
//         }}
//       />
//     </>
//   );
// };

// export default FullCalendarPage;