import { Container, Title, Text, Space } from '@mantine/core';

export default function AboutPage() {
  return (
    <Container>
      <Title>About Us</Title>
      <Space h="md" />
      <Text>
        We are a team dedicated to creating innovative solutions for our users.
        Our mission is to provide high-quality services and foster a community of like-minded individuals.
      </Text>
      <Space h="md" />
      <Text>
        Founded in [year], we have been continuously growing and improving our offerings.
        We value transparency, collaboration, and user-centric design in everything we do.
      </Text>
      {/* Add more about information here */}
    </Container>
  );
}