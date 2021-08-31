import { refs } from './constants';
import { format } from 'date-fns';

const clock = () => {
  setInterval(() => {
    const currentTime = new Date();
    const hours = format(currentTime, 'HH');
    const minutes = format(currentTime, 'mm');
    const seconds = format(currentTime, 'ss');
    refs.hours.textContent = hours;
    refs.mins.textContent = minutes;
    refs.secs.textContent = seconds;
  }, 1000);
};

clock();
