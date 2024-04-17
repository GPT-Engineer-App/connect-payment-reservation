import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, List, ListItem, Text, VStack, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState("");

  const handleAddReservation = () => {
    if (newReservation) {
      setReservations([...reservations, newReservation]);
      setNewReservation("");
    }
  };

  const handleDeleteReservation = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2V8ZW58MHx8fHwxNzEzMzMyMjgyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Heading as="h1" size="xl">
          청소 서비스 관리자 페이지
        </Heading>
        <Text>청소 예약 관리를 위한 간단한 대시보드입니다.</Text>

        <Box w="100%">
          <Input placeholder="새 예약 추가..." value={newReservation} onChange={(e) => setNewReservation(e.target.value)} size="md" />
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddReservation} mt={2}>
            예약 추가
          </Button>
        </Box>

        <List w="100%">
          {reservations.map((reservation, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderRadius="lg" mt={2}>
              <Text>{reservation}</Text>
              <Button colorScheme="red" onClick={() => handleDeleteReservation(index)}>
                <FaTrash />
              </Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
