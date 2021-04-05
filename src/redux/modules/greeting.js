const FETCH_NOW_TIME = 'greeting/FETCH_NOW_TIME';
const TOGGLE_TIME = 'greeting/TOGGLE_TIME';
const GREETING_MORNING = 'greeting/GREETING_MORNING';
const GREETING_AFTERNOON = 'greeting/GREETING_AFTERNOON';
const GREETING_EVENING = 'greeting/GREETING_EVENING';

export const fetchNowTime = () => ({ type: FETCH_NOW_TIME });
export const toggleTime = () => ({ type: TOGGLE_TIME });
export const greetingMorning = () => ({ type: GREETING_MORNING });
export const greetingAfternoon = () => ({ type: GREETING_AFTERNOON });
export const greetingEvening = () => ({ type: GREETING_EVENING });

const getNowTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const clock12Ver = `${
    hours === 0 ? '0' + hours : hours > 12 ? hours - 12 : hours
  }:${minutes < 10 ? '0' + minutes : minutes}`;
  const clock23Ver = `${hours === 0 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;

  return [clock12Ver, clock23Ver, hours];
};

const initialState = {
  time: getNowTime(),
  toggle: false,
  greeting: null,
};

export default function greeting(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOW_TIME:
      return {
        ...state,
        time: getNowTime(),
      };
    case TOGGLE_TIME:
      return {
        ...state,
        time: getNowTime(),
        toggle: !state.toggle,
      };
    case GREETING_MORNING:
      return {
        ...state,
        greeting: 'Good morning, ',
      };
    case GREETING_AFTERNOON:
      return {
        ...state,
        greeting: 'Good afternoon, ',
      };
    case GREETING_EVENING:
      return {
        ...state,
        greeting: 'Good evening, ',
      };
    default:
      return state;
  }
}
