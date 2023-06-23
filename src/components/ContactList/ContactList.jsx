import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts = [], deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => {
        return (
          <ContactListItem
            {...contact}
            key={contact.id}
            index={index}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
