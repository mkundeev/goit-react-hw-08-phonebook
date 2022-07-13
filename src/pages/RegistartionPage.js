import RegistrationForm from 'components/RegistrationForm';
import Container from 'components/Container';

export default function RegistartionPage() {
  const formSubmit = contact => {
    console.log(contact);
  };

  return (
    <Container>
      <RegistrationForm onSubmit={formSubmit} registration />
    </Container>
  );
}
