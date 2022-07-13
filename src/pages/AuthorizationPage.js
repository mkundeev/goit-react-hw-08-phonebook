import RegistrationForm from 'components/RegistrationForm';
import Container from 'components/Container';

export default function AuthorizationPage() {
  const formSubmit = contact => {
    console.log(contact);
  };
  return (
    <Container>
      <RegistrationForm onSubmit={formSubmit} />
    </Container>
  );
}
