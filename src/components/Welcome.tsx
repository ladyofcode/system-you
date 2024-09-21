'use client';

import { Title, Text, Container } from '@mantine/core';

export function Welcome() {
  return (
    <Container size="md">
      <Title order={1}>Welcome to System: You</Title>
      <Text>Build your best self, your way.</Text>
    </Container>
  );
}