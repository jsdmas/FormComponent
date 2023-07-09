import Input from '../components/Input';
import { useFieldContext } from './context/field';

export default function EmailInput() {
  const [value, setValue] = useFieldContext();

  return (
    <Input
      type='text'
      placeholder='email'
      value={value}
      onChange={(event) => {
        setValue((prevState) => ({
          ...prevState,
          email: event.target.value,
        }));
      }}
    />
  );
}
