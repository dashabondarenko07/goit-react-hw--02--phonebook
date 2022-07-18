import { Button, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => {
              onClick(id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
