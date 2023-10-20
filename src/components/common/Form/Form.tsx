import './Form.scss';
import { Button } from '../Button';

export function Form({ variant, button, handleSubmit, name, children }) {
  return (
    <form
      name={name}
      className={`form form_kind_${variant}`}
      onSubmit={handleSubmit}
    >
      {children}
      <Button
        variant='primary'
        color='orange-fill'
        type='submit'
        size='medium'
        width='auto'
      >
        {button}
      </Button>
    </form>
  );
}
