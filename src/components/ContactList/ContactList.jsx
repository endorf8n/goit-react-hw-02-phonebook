import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => {
        return <ContactListItem {...contact} key={contact.id} index={index} />;
      })}
    </ul>
  );
};
