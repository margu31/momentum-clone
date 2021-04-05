import React, { useEffect, useState } from 'react';
import Greeting from '../components/Greeting/Greeting';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTime,
  greetingMorning,
  greetingAfternoon,
  greetingEvening,
  fetchNowTime,
} from '../redux/modules/greeting';
import GreetingTime from '../components/Greeting/GreetingTime';
import GreetingTimeToggle from '../components/Greeting/GreetingTimeToggle';
import GreetingMessage from '../components/Greeting/GreetingMessage';
import { AnimatePresence } from 'framer-motion';

export default function GreetingContainer() {
  const { time, toggle, greeting } = useSelector(state => state.greeting);
  const { authUser, isAuthed } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [clock12Ver, clock23Ver, hours] = time;
  const clock = toggle ? clock12Ver : clock23Ver;

  const [visible, setVisible] = useState(false);

  let userName = 'there!';
  if (isAuthed) {
    userName = authUser.displayName;
  }

  const onToggle = () => {
    dispatch(toggleTime());
  };

  const onClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(fetchNowTime());
    }, 30000);
  }, [dispatch]);

  useEffect(() => {
    if (4 < hours && hours < 12) dispatch(greetingMorning());
    if (11 < hours && hours < 18) dispatch(greetingAfternoon());
    if (17 < hours || hours < 5) dispatch(greetingEvening());
  }, [hours, dispatch]);

  // if (loading) return null;

  return (
    <Greeting>
      <GreetingTime time={clock}>
        <AnimatePresence>
          <GreetingTimeToggle
            onToggle={onToggle}
            onClick={onClick}
            visible={visible}
          />
        </AnimatePresence>
      </GreetingTime>
      <GreetingMessage message={greeting} userName={userName} />
    </Greeting>
  );
}
